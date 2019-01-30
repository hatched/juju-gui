/* Copyright (C) 2018 Canonical Ltd. */
'use strict';


const generateUUID = require('uuid/v4');
const clonedeep = require('lodash.clonedeep');
let deepmerge = require('deepmerge');
// Due to our use of require() (which requires .default) and how Jest loads the
// module we have to handle both cases. See https://github.com/KyleAMathews/deepmerge/issues/87
if (deepmerge.default) {
  deepmerge = deepmerge.default;
}

const {processDeltas} = require('./delta-handlers');

class Maraca {
  constructor(config) {
    this.ON_CHANGE = config.onChange;
    this._boundWatcherListener = this._watcherListener.bind(this);
    this._valueStore = {
      annotations: {},
      applications: {},
      // Even though the megawatcher does not return the charms in the model
      // we need to request and store that charm information. The charm
      // information is also required for deploying new applications.
      charms: {},
      machines: {},
      relations: {},
      remoteApplications: {},
      units: {}
    };
  }

  /**
    Inserts a new record into the defined collection if one does not exist.
    @param {String} collectionName The collection name to create a new record
      in. Example: 'charms', 'annotations', etc...
    @param {Object} data The data to store in the record. This data must follow
      the same structure as defined for each collection. See the maraca
      documentation.
    @returns {Object} The inserted data or in the event of a conflict or
      validation failure, an error object.
  */
  insert(collectionName, data) {
    const error = this._validateData(collectionName, data);
    if (error) {
      return error;
    }
    const uuid = generateUUID();
    data.uuid = uuid;
    return this._valueStore[collectionName][uuid] = data;
  }

  /**
    Validates that the supplied data can be inserted into the defined collection.
    @param {String} collectionName The collection name to create a new record
      in. Example: 'charms', 'annotations', etc...
    @param {Object} data The data to store in the record. This data must follow
      the same structure as defined for each collection. See the maraca
      documentation.
    @returns {Object} null if the data validates or an error object if it does not.
  */
  _validateData(collectionName, data) {
    return null; // it's alllllll good.
  }

  /**
    Get the frozen store of entities.
  */
  getValueStore() {
    return clonedeep(this._valueStore);
  }

  /**
    Start listening to the megawatcher event.
  */
  connect() {
    document.addEventListener('_rpc_response', this._boundWatcherListener);
  }

  /**
    Stop listening to the megawatcher event.
  */
  disconnect() {
    document.removeEventListener('_rpc_response', this._boundWatcherListener);
  }

  /**
    The function called when the megawatcher event fires.
    @param evt {Object} The megawatcher event.
  */
  _watcherListener(evt) {
    const data = evt.detail;
    if (!data.response || ! data.response.deltas) {
      // Ignore megawatcher responses that don't have deltas.
      return;
    }
    this._handleDeltas(data.response.deltas);
    this.ON_CHANGE();
  }

  /**
    Update the store with the changes from the deltas.
    @param evt {Object} The megawatcher event.
  */
  _updateStore(updates, updateType) {
    Object.keys(updates).forEach(collectionKey => {
      const collection = updates[collectionKey];
      Object.keys(collection).forEach(entityKey => {
        const entity = collection[entityKey];
        const storeCollection = this._valueStore[collectionKey];
        if (updateType === 'changed') {
          if (!storeCollection[entityKey]) {
            storeCollection[entityKey] = {};
          }
          storeCollection[entityKey] = deepmerge(storeCollection[entityKey], entity, {
            // Replace entity properties that are arrays with the new array from
            // the delta instead of merging them.
            arrayMerge: (destinationArray, sourceArray, options) => sourceArray
          });
        } else {
          delete storeCollection[entityKey];
        }
      });
    });
  }

  /**
    Consolidate the deltas.
    @param deltas {Array} The list of deltas.
  */
  _handleDeltas(deltas) {
    const updates = processDeltas(deltas);
    this._updateStore(updates.changed, 'changed');
    this._updateStore(updates.removed, 'removed');
  }
}

module.exports = Maraca;
