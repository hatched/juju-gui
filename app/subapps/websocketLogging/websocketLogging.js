/*
This file is part of the Juju GUI, which lets users view and manage Juju
environments within a graphical interface (https://launchpad.net/juju-gui).
Copyright (C) 2012-2013 Canonical Ltd.

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3, as published by
the Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranties of MERCHANTABILITY,
SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero
General Public License for more details.

You should have received a copy of the GNU Affero General Public License along
with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';


/**
  SubApp that logs websocket traffic for debugging purposes.

  @module juju
  @submodule subapps
*/
YUI.add('subapp-websocket-logging', function(Y) {
  var ns = Y.namespace('juju.subapps');

  /**
    SubApp that logs websocket traffic for debugging purposes.

    @class Browser
    @extends {juju.SubApp}
  */
  // If the line that defines the subapp wraps, the whitespace linter goes
  // crazy, so instead of a super-short module name, we have this.
  var SUBAPP_NAME = 'subapp-websocket-logging';
  ns.WebsocketLogging = Y.Base.create(SUBAPP_NAME, Y.juju.SubApp, [], {

    // The stored messages, their direction, and time.
    log: undefined,

    /**
      Websocket logger initialization.

      @method initializer
      @param {Object} cfg general init config object.
      @return {undefined} Side-effects only.
    */
    initializer: function(cfg) {
      this.log = [];
      this.setUpEventListeners();
    },

    /**
      Bind the event listeners.

      @method setUpEventListeners
      @return {undefined} Side-effects only.
    */
    setUpEventListeners: function() {
      var self = this;
      Y.on('websocketSend', function(data) {
        self.logMessage('to server', data);
      });
      Y.on('websocketReceive', function(data) {
        self.logMessage('to client', data);
      });
      Y.on('saveWebsocketLog', Y.bind(this.saveLog, this, this.log));
    },

    /**
      Generate a date/time string representing the current time.

      @method timestamp
      @return {String} The current time in ISO 8601 format.
    */
    timestamp: function() {
      return new Date().toISOString();
    },

    /**
      Record a websocket message, its direction, and the current time.

      @method logMessage
      @param {String} direction The direction the message was sent.  Either 'to
        server' or 'to client'.
      @param {String} message The message that was sent over the websocket.
      @return {undefined} Side-effects only.
    */
    logMessage: function(direction, message) {
      this.log.push([this.timestamp(), direction, message].join('\n'));
    },

    /**
      Save a log of websocket traffic

      @method saveLog
      @param {Object} cfg general init config object.
      @return {undefined} Side-effects only.
    */
    saveLog: function(log) {
      var data = log.join('\n');
      var mimeType = 'text/plain;charset=utf-8';
      try {
        var blob = new Blob([data],
            {type: mimeType});
      } catch (e) {
        // BlobBuilder has been deprecated in favour of Blob, but some browsers
        // (including phantomjs) have not added the replacement Blob
        // constructor API, so we have this fall-back code.
        var BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder;
        var builder = new BlobBuilder();
        builder.append(data);
        return builder.getBlob(mimeType);
      }
      /* global saveAs: false */
      saveAs(blob, 'websocket-log.txt');
    }

  });

}, '0.1.0', {
  requires: [
    'sub-app'
  ]
});
