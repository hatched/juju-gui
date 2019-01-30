/* Copyright (C) 2019 Canonical Ltd. */
'use strict';

const {urls} = require('jaaslib');

class ModelInteractionController {
  constructor(config) {
    /**
      A datastore capable of saving the juju object data structure. Typically
      an instance of Maraca.
      @type {Object}
    */
    this.datastore = config.datastore;
  }

  /**
    Inserts the supplied data into the supplied collection with the uncommitted
    key set to true.
    @param {String} collection The collection to insert the data into, ex) 'charms'.
    @param {Object} data The data to insert into the collection.
    @returns {Object} The inserted object or an error from the datastore.
  */
  _insert(collection, data) {
    return this.datastore.insert(collection, Object.assign({
      uncommitted: true
    }, data));
  }

  /**
    Adds an uncommitted charm to the database. This typically won't be called
    directly but instead be called by the deploy method.
    Uses the jujulib client facade `addCharm` method call signature.
    github.com/juju/js-libjuju/blob/master/api/doc/client-v2.md#addCharmargs-callback
    @param {Object} args The same args as the `addCharm` jujulib method.
    @returns {Object} The inserted object or an error from the datastore.
  */
  addCharm(args) {
    return this._insert('charms', args);
  }

  /**
    Adds an uncommitted application to the database. This typically won't be
    called directly but instead be called by the deploy method.
    Uses the jujulib application facade `deploy` method call signature.
    github.com/juju/js-libjuju/blob/master/api/doc/application-v8.md#deployargs-callback
    @param {Object} args The same args as the `deploy` jujulib method.
    @returns {Object} The inserted object or an error from the datastore.
  */
  addApplication(args) {
    return this._insert('applications', args);
  }

  /**
    Adds an uncommitted machine to the database.
    Uses the jujulib client facade 'addMachines' method call signature.
    github.com/juju/js-libjuju/blob/master/api/doc/client-v2.md#addMachineargs-callback
    @param {Object} args The same args as the `addMachines` jujulib method.
    @returns {Object} The inserted object or an error from the datastore.
  */
  addMachines(args) {
    return this._insert('machines', args);
  }

  /**
    Adds an uncommitted unit to the database.
    Uses the jujulib application facade 'addunits' method call signature.
    github.com/juju/js-libjuju/blob/master/api/doc/application-v8.md#addUnitsargs-callback
    @param {Object} args The same args as the `addUnits` jujulib method.
    @returns {Object} The inserted object or an error from the datastore.
  */
  addUnits(args) {
    return this._insert('units', args);
  }

  /**
    Adds all necessary uncommitted records to the database so that the database
    can then be committed to Juju and a real application deploy be completed.
    @param {Object} args The arguments necessary for deploying the application.
    @param {String} [args.appName] A custom name of the application.
    @param {String} args.charmURL The url of the charm to deploy.
    @param {Object} args.config The changed configuration values for the application.
    @param {String} args.series The series to deploy the application.
  */
  deploy(args) {
    const appName = args.appName || urls.URL.fromAnyString(this.props.bundleURL).name;
    const series = args.series;

    this.addCharm({
      url: args.charmURL
    });

    this.addApplication({
      application: appName,
      'charm-url': args.charmURL,
      // num-units is 0 because we manually add units in separate calls.
      'num-units': 0,
      // constraints are set on a machine-by-machine basis.
      constraints: {},
      config: args.config,
      series: series
    });

    const machine = this.addMachines({
      series: series
    });

    this.addUnits({
      application: appName,
      'num-units': 1,
      placement: [{
        scope: '#',
        directive: machine.uuid
      }]
    });
  }

}

module.exports = ModelInteractionController;
