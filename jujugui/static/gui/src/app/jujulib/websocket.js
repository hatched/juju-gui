/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

/**
  Websocket wrapper for the Model and Controller API instances to use which
  helps abstract away some of the complexities in keeping the connection alive
  and in sync.
*/
class WS {

  /**
    @param {Object} socketURL URL to connect to with the WebSocket interface.
    @param {Object} options Configuration options for the WebSocket.
    @param {Function} options.onopen Called when the WebSocket onopen event fires.
    @param {Function} options.onclose Called when the WebSocket onclose event fires.
    @param {WebSocket} options.WebSocket Supplied WebSocket interface to instantiate.
      Defaults to WebSocket. Optional.
  */
  constructor(socketURL, options = {}) {
    /**
      Transaction id counter.
      @type {Integer}
      @private
    */
    this._txIdCounter = 0;
    /**
      Store for the transaction callbacks.
      @type {Map}
      @private
    */
    this._txnCallbacks = new Map();
    /**
      The active websocket instance.
      @type {WebSocket}
      @private
    */
    this._ws = null;
    /**
      The connection status of the websocket.
      @type {String}
    */
    this.status = WS.DISCONNECTED;
    /**
      Called when the WebSocket onopen event fires.
      @type {Function}
    */
    this.onopen = options.onopen || function() {};
    /**
      Called when the WebSocket onclose event fires.
      @type {Function}
    */
    this.onclose = options.onclose || function() {};
    /**
      URL to connect to with the WebSocket interface.
      @type {String}
    */
    this.socketURL = socketURL || null;
    /**
      Supplied WebSocket interface to instantiate. Defaults to WebSocket. Optional.
      @type {WebSocket}
    */
    this.WebSocket = options.WebSocket || WebSocket;
  }

  /**
    Return an incremented, unique, version transaction id value for the next request.
    @private
    @returns {Integer}
  */
  _getNewTxId() {
    this._txIdCounter = this._txIdCounter += 1;
    return this._txIdCounter;
  }

  /**
    Create a WebSocket connection to the Juju API.
  */
  connect() {
    console.log('connecting to', this.socketURL);
    this.status = WS.CONNECTING;
    this._ws = new this.WebSocket(this.socketURL);
    this._ws.onopen = () => {
      this.status = WS.CONNECTED;
      this.onopen();
    };
    this._ws.onclose = () => {
      this.status = WS.DISCONNECTED;
      this.onclose();
    };
    this._ws.onmessage = this._onMessage.bind(this);
  }

  /**
    Close the WebSocket connection to the Juju API.
  */
  close(fn) {
    if (this._ws) {
      console.log('closing connection to', this._socketURL);
      this._ws.close();
      fn();
    }
  }

  /**
    Send a formatted message to the Juju API.
    @param {Object} operation The RPC call to make to the Juju API.
    @param {Function} callback The callback to call after the msg has been sent.
  */
  send(operation, callback) {
    const readyState = this._ws.readyState;
    if (readyState !== 1) {
      console.log(`WebSocket is not open, dropping request. readyState: ${readyState}`);
      return;
    }
    const txId = this._getNewTxId();
    if (callback) {
      this._txnCallbacks.set(txId, callback);
    }
    operation['request-id'] = txId;
    if (!operation.params) {
      operation.params = {};
    }
    this._ws.send(JSON.stringify(operation));
  }

  /**
    Calls the supplied callback function for the transaction if one was provided,
    else it logs to the console.
    @private
    @param {String} frame The websocket frame data.
  */
  _onMessage(frame) {
    const data = JSON.parse(frame.data);
    const txId = data['request-id'];
    if (this._txnCallbacks.has(txId)) {
      this._txnCallbacks.get(txId)(data);
      this._txnCallbacks.delete(txId);
    }
  }

}

/**
  Connected status string.
  @static
*/
WS.CONNECTED = 'connected';
/**
  Connecting status string.
  @static
*/
WS.CONNECTING = 'connecting';
/**
  Disconnected status string.
  @static
*/
WS.DISCONNECTED = 'disconnected';

module.exports = WS;
