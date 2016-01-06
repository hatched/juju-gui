// Karma configuration
// Generated on Tue Sep 01 2015 11:00:43 GMT-0600 (CST)
'use strict';
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // List of files / patterns to load in the browser; Karma is smart enough,
    // with the preprocessors, to watch the source files and serve the compiled
    // files.
    files: [
      'jujugui/static/gui/build/modules.js',
      'jujugui/static/gui/src/test/assets/chai.js',

      'jujugui/static/gui/src/test/globalconfig.js',

      'jujugui/static/gui/build/app/assets/javascripts/yui/yui/yui.js',
      'jujugui/static/gui/build/app/assets/javascripts/yui/loader/loader.js',
      'jujugui/static/gui/src/test/utils.js',
      'jujugui/static/gui/src/test/factory.js',
      'jujugui/static/gui/build/app/assets/javascripts/d3.js',
      'jujugui/static/gui/build/app/assets/javascripts/jujulib/juju.js',

      // It's possible we can remove some or all of these below.
      'jujugui/static/gui/build/app/assets/javascripts/bind-function-pollyfill.js',
      'jujugui/static/gui/build/app/assets/javascripts/react-with-addons.js',
      'jujugui/static/gui/build/app/assets/javascripts/react-dom.js',
      'jujugui/static/gui/build/app/assets/javascripts/classnames.js',
      'jujugui/static/gui/build/app/assets/javascripts/clipboard.js',
      'jujugui/static/gui/build/app/assets/javascripts/react-onclickoutside.js',
      'jujugui/static/gui/build/app/assets/javascripts/ReactDnD.min.js',
      'jujugui/static/gui/build/app/assets/javascripts/ReactDnDHTML5Backend.min.js',
      'jujugui/static/gui/build/app/assets/javascripts/diff.js',
      'jujugui/static/gui/build/app/utils/component-test-utils.js',

      'jujugui/static/gui/build/app/utils/jujulib-conversion-utils.js',
      // It's possible we can remove some or all of these above.

      // 'jujugui/static/gui/src/test/test_app_hotkeys.js',
      // test_app.js is skipped because it causes cascading failures.
      // 'jujugui/static/gui/src/test/test_app.js',
      'jujugui/static/gui/src/test/test_autodeploy_extension.js',
      'jujugui/static/gui/src/test/test_bakery.js',
      'jujugui/static/gui/src/test/test_bundle_import_notifications.js',
      //'jujugui/static/gui/src/test/test_bundle_importer.js',
      'jujugui/static/gui/src/test/test_cache.js',
      'jujugui/static/gui/src/test/test_changes_utils.js',
      'jujugui/static/gui/src/test/test_console.js',
      'jujugui/static/gui/src/test/test_container_token.js',
      'jujugui/static/gui/src/test/test_cookies_app_extension.js',
      'jujugui/static/gui/src/test/test_create_machine_view.js',
      'jujugui/static/gui/src/test/test_d3_components.js',
      'jujugui/static/gui/src/test/test_drop_target_view_extension.js',
      'jujugui/static/gui/src/test/test_endpoints.js',
      'jujugui/static/gui/src/test/test_entity_extension.js',
      'jujugui/static/gui/src/test/test_env_change_set.js',
      // test_env_go.js is skipped because it causes cascading failures.
      // 'jujugui/static/gui/src/test/test_env_go.js',
      'jujugui/static/gui/src/test/test_env.js',
      'jujugui/static/gui/src/test/test_environment_view.js',
      'jujugui/static/gui/src/test/test_event_tracker.js',
      // test_fakebackend.js causes phantomjs to crash
      //'jujugui/static/gui/src/test/test_fakebackend.js',
      // feature flags tests were skipped in the old suite as well because
      // they rely on code only included in test_startup.js (which
      // is also skipped.)
      //'jujugui/static/gui/src/test/test_feature_flags.js',
      'jujugui/static/gui/src/test/test_ghost_deployer_extension.js',
      'jujugui/static/gui/src/test/test_landscape.js',
      'jujugui/static/gui/src/test/test_login.js',
      'jujugui/static/gui/src/test/test_machine_token.js',
      'jujugui/static/gui/src/test/test_machine_view_panel_extension.js',
      'jujugui/static/gui/src/test/test_machine_view_panel_header.js',
      'jujugui/static/gui/src/test/test_machine_view_panel.js',
      'jujugui/static/gui/src/test/test_model_bundle.js',
      'jujugui/static/gui/src/test/test_model_controller.js',
      'jujugui/static/gui/src/test/test_model_handlers.js',
      'jujugui/static/gui/src/test/test_model.js',
      'jujugui/static/gui/src/test/test_more_menu.js',
      'jujugui/static/gui/src/test/test_panzoom.js',
      'jujugui/static/gui/src/test/test_prettify.js',
      'jujugui/static/gui/src/test/test_routing.js',
      // test_sandbox_go.js causes phantomjs to crash
      //'jujugui/static/gui/src/test/test_sandbox_go.js',
      'jujugui/static/gui/src/test/test_sandbox.js',
      'jujugui/static/gui/src/test/test_service_module.js',
      'jujugui/static/gui/src/test/test_service_scale_up_view.js',
      'jujugui/static/gui/src/test/test_serviceunit_token.js',
      //'jujugui/static/gui/src/test/test_simulator.js',
      // test_startup.js was skipped in the old suite.
      //'jujugui/static/gui/src/test/test_startup.js',
      //'jujugui/static/gui/src/test/test_topology_relation.js',
      'jujugui/static/gui/src/test/test_topology_utils.js',
      'jujugui/static/gui/src/test/test_topology.js',
      'jujugui/static/gui/src/test/test_ui_state.js',
      'jujugui/static/gui/src/test/test_utils.js',
      'jujugui/static/gui/src/test/test_viewport_module.js',
      'jujugui/static/gui/src/test/test_web_handler.js',
      'jujugui/static/gui/src/test/test_web_sandbox.js',
      'jujugui/static/gui/src/test/test_websocket_logging.js',
      'jujugui/static/gui/src/test/test_zip_utils.js',

      // Test Assets
      {
        pattern: 'jujugui/static/gui/src/test/data/*.json',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],

    proxies: {
      '/dev/combo': 'http://0.0.0.0:{TEST_PORT}/dev/combo'
    },


    // list of files to exclude
    exclude: [
      'jujugui/static/gui/build/app/components/**/*-min.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server and port
    hostname: '0.0.0.0',
    port: 6543,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
