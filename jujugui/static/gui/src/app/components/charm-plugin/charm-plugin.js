/* Copyright (C) 2017 Canonical Ltd. */
'use strict';

const React = require('react');
const PropTypes = require('prop-types');

const Panel = require('../panel/panel');

class CharmPlugin extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderPlugins() {
    return this.props.plugins.map(plugin => React.createElement(plugin, {}));
  }

  render() {
    return (
      <Panel visible={true} instanceName="charm-plugin">
        {this._renderPlugins()}
      </Panel>);
  }
}

CharmPlugin.propTypes = {
  plugins: PropTypes.array.isRequired
};

module.exports = CharmPlugin;
