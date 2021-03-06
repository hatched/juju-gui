/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const PropTypes = require('prop-types');
const React = require('react');

const EXPERTS = require('../expert-card/experts');
const ExpertCard = require('../expert-card/expert-card');

require('./_expert-store-card.scss');

class ExpertStoreCard extends React.Component {
  render() {
    const expert = EXPERTS[this.props.expert];
    if (!expert) {
      return null;
    }
    return (
      <ExpertCard
        classes={this.props.classes}
        expert={expert}
        staticURL={this.props.staticURL}>
        <div className="expert-store-card">
          <p className="expert-store-card__description">
            {expert.storeDescription}
          </p>
          <span className="v1">
            <a
              className="p-button--neutral is-inline"
              href="http://jujucharms.com/experts/"
              target="_blank">
              Learn about Big Data expertise&hellip;
            </a>
          </span>
        </div>
      </ExpertCard>
    );
  }
};

ExpertStoreCard.propTypes = {
  classes: PropTypes.array,
  expert: PropTypes.string.isRequired,
  staticURL: PropTypes.string
};

module.exports = ExpertStoreCard;
