/* Copyright (C) 2017 Canonical Ltd. */
'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const {Button} = require('@canonical/juju-react-components');

require('./_create-model-button.scss');

class CreateModelButton extends React.Component {
  _createNewModel() {
    const props = this.props;
    if (props.disabled) {
      return;
    }
    // We want to explicitly close the profile when switching to a new
    // model to resolve a race condition with the new model setup.
    props.changeState({
      profile: null,
      hash: null,
      postDeploymentPanel: null
    });
    props.switchModel(null);
    if (this.props.action) {
      this.props.action();
    }
    this.props.analytics.addCategory(this).sendEvent(this.props.analytics.CLICK);
  }

  render() {
    const disabled = this.props.disabled || false;
    return (
      <div className="create-new-model v1">
        <Button
          action={this._createNewModel.bind(this)}
          disabled={disabled}
          modifier={this.props.modifier}>
          {this.props.title}
        </Button>
      </div>
    );
  }
};

CreateModelButton.propTypes = {
  action: PropTypes.func,
  analytics: PropTypes.object.isRequired,
  changeState: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  modifier: PropTypes.string,
  switchModel: PropTypes.func.isRequired,
  title: PropTypes.string
};

CreateModelButton.defaultProps = {
  modifier: 'neutral',
  title: 'Create new'
};

module.exports = CreateModelButton;
