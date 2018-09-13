/* Copyright (C) 2018 Canonical Ltd. */
'use strict';

const React = require('react');
const enzyme = require('enzyme');

const StatusRelationList = require('./relation-list');

describe('StatusRelationList', () => {
  let applications, relations;

  const renderComponent = (options = {}) => enzyme.shallow(
    <StatusRelationList
      applications={options.applications || applications}
      changeState={options.changeState || sinon.stub()}
      generateApplicationURL={options.generateApplicationURL || sinon.stub()}
      generatePath={options.generatePath || sinon.stub()}
      onApplicationClick={options.onApplicationClick || sinon.stub()}
      relations={options.relations || relations}
      statusFilter={options.statusFilter} />
  );

  beforeEach(() => {
    applications = {
      getById: sinon.stub().returns({
        get: sinon.stub()
      })
    };
    relations = [{
      get: sinon.stub().withArgs('pending').returns(false),
      getAttrs: sinon.stub().withArgs().returns({
        endpoints: [[
          'mysql', {name: 'cluster', role: 'peer'}
        ]],
        id: 'rel1'
      })
    }, {
      get: sinon.stub().withArgs('pending').returns(false),
      getAttrs: sinon.stub().withArgs().returns({
        endpoints: [[
          'haproxy', {name: 'website', role: 'provider'}
        ], [
          'wordpress', {name: 'proxy', role: 'requirer'}
        ]],
        id: 'rel2'
      })
    }, {
      // Uncommitted relations are excluded.
      get: sinon.stub().withArgs('pending').returns(true),
      getAttrs: sinon.stub().withArgs().returns({
        endpoints: [],
        id: 'rel3'
      })
    }];
  });

  it('renders', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });
});