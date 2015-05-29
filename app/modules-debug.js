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

// This file is used for development only. In order to use it you should call
// one of the "make debug" and "make devel" commands.
//
// If you add a new module here that is in the assets/javascripts path, there's
// a good chance that you will need to add the file in bin/merge-files in order
// for the fully compressed version (used by our release and "make prod," among
// others) to work.
//
// This file declares which files implement modules, using the
// "fullpath" property; and declares the membership of rollup modules, using
// the "use" property to specify what the module name aliases.
//
// The "requires" property should not be used here because the javascript
// minimizer will not parse it.
/* jshint -W079 */
// Tell jshint to ignore the global redefinition
var GlobalConfig = {
  filter: 'debug',
  // Set "true" for verbose logging of YUI.
  debug: false,

  base: '/juju-ui/assets/javascripts/yui/',
  // Use Rollups
  combine: false,

  // Don't load YUI CSS from YUI servers.
  fetchCSS: false,

  // Do not attempt to dispatch a new route when an anchor tag appears in the
  // url. This is intended to keep charm details from reloading on tab
  // selection in the browser.
  navigateOnHash: false,

  groups: {
    gallery: {
      modules: {
        'gallery-markdown': {
          fullpath: '/juju-ui/assets/javascripts/gallery-markdown-debug.js'
        },
        'gallery-timer': {
          fullpath: '/juju-ui/assets/javascripts/gallery-timer-debug.js'
        }
      }
    },
    d3: {
      modules: {
        'd3': {
          'fullpath': '/juju-ui/assets/javascripts/d3.min.js'
        },
        'd3-components': {
          fullpath: '/juju-ui/assets/javascripts/d3-components.js'
        },
        'd3-statusbar': {
          fullpath: '/juju-ui/assets/javascripts/d3.status.js'
        }
      }
    },
    'event_tracker': {
      modules: {
        'event-tracker': {
          fullpath: '/juju-ui/assets/javascripts/event-tracker.js'
        }
      }
    },
    'resizing_textarea': {
      modules: {
        'resizing-textarea': {
          fullpath: '/juju-ui/assets/javascripts/resizing_textarea.js'
        }
      }
    },
    prettify: {
      modules: {
        'prettify': {
          fullpath: '/juju-ui/assets/javascripts/prettify.js'
        }
      }
    },
    spinner: {
      modules: {
        'spinner': {
          fullpath: '/juju-ui/assets/javascripts/spinner.js'
        }
      }
    },
    jsyaml: {
      modules: {
        'js-yaml': {
          fullpath: '/juju-ui/assets/javascripts/js-yaml.min.js'
        }
      }
    },
    zip: {
      modules: {
        'zip': {
          // Zip library from http://gildas-lormeau.github.io/zip.js/
          fullpath: '/juju-ui/assets/javascripts/zip.js'
        }
      }
    },
    filesaver: {
      modules: {
        'FileSaver': {
          fullpath: '/juju-ui/assets/javascripts/FileSaver.js'
        }
      }
    },

    juju: {
      base: '/juju-ui',
      modules: {
        // Primitives
        'yui-patches': {
          path: '/assets/javascripts/yui-patches.js'
        },

        'notifier': {
          path: '/widgets/notifier.js'
        },

        'browser-token': {
          path: '/widgets/token.js'
        },

        'browser-token-container': {
          path: '/widgets/token-container.js'
        },

        'browser-filter-widget': {
          path: '/widgets/filter.js'
        },

        'browser-overlay-indicator': {
          path: '/widgets/overlay-indicator.js'
        },

        'browser-search-widget': {
          path: '/widgets/charm-search.js'
        },

        'browser-tabview': {
          path: '/widgets/browser-tabview.js'
        },

        'juju-inspector-widget': {
          path: '/widgets/inspector-widget.js'
        },
        'juju-databinding': {
          path: '/views/databinding.js'
        },
        'reconnecting-websocket': {
          path: '/assets/javascripts/reconnecting-websocket.js'
        },

        'ns-routing-app-extension': {
          path: '/assets/javascripts/ns-routing-app-extension.js'
        },

        'app-subapp-extension': {
          path: '/assets/javascripts/app-subapp-extension.js'
        },

        'app-cookies-extension': {
          path: '/assets/javascripts/app-cookies-extension.js'
        },

        'local-charm-import-helpers': {
          path: '/assets/javascripts/local-charm-import-helpers.js'
        },

        'bundle-importer': {
          path: '/utils/bundle-importer.js'
        },

        'view-dropdown-extension': {
          path: '/assets/javascripts/view-dropdown-extension.js'
        },

        'environment-header-extension': {
          path:
              '/assets/javascripts/environment-header-extension.js'
        },

        'machine-view-panel-extension': {
          path:
              '/assets/javascripts/machine-view-panel-extension.js'
        },

        'more-menu': {
          path: '/widgets/more-menu.js'
        },

        'sub-app': {
          path: '/assets/javascripts/sub-app.js'
        },

        'zip-utils': {
          path: '/assets/javascripts/zip-utils.js'
        },

        // Views
        'juju-landscape': {
          path: '/views/landscape.js'
        },

        'juju-topology-relation': {
          path: '/views/topology/relation.js'
        },

        'juju-topology-panzoom': {
          path: '/views/topology/panzoom.js'
        },

        'juju-topology-viewport': {
          path: '/views/topology/viewport.js'
        },

        'juju-topology-service': {
          path: '/views/topology/service.js'
        },

        'juju-topology-utils': {
          path: '/views/topology/utils.js'
        },

        'juju-topology': {
          path: '/views/topology/topology.js'
        },

        'juju-view-bundle': {
          path: '/views/topology/bundle.js'
        },
        'juju-view-utils': {
          path: '/views/utils.js'
        },

        'juju-notifications': {
          path: '/views/notifications.js'
        },

        'juju-help-dropdown': {
          path: '/views/help-dropdown.js'
        },

        'juju-user-dropdown': {
          path: '/views/user-dropdown.js'
        },

        'juju-container-token': {
          path: '/widgets/container-token.js'
        },

        'juju-create-machine-view': {
          path: '/widgets/create-machine-view.js'
        },

        'juju-deployer-bar': {
          path: '/widgets/deployer-bar.js'
        },

        'juju-environment-header': {
          path: '/widgets/environment-header.js'
        },

        'juju-serviceunit-token': {
          path: '/widgets/serviceunit-token.js'
        },

        'juju-machine-token': {
          path: '/widgets/machine-token.js'
        },

        'juju-machine-view-panel': {
          path: '/widgets/machine-view-panel.js'
        },

        'juju-machine-view-panel-header': {
          path: '/widgets/machine-view-panel-header.js'
        },

        'juju-view-environment': {
          path: '/views/environment.js'
        },

        'juju-view-login': {
          path: '/views/login.js'
        },

        'juju-view-onboarding': {
          path: '/views/onboarding.js'
        },

        'juju-service-scale-up-view': {
          path: '/widgets/service-scale-up-view.js'
        },

        'juju-templates': {
          path: '/templates.js'
        },

        'juju-viewlet-manager': {
          path: '/views/viewlet-manager.js'
        },

        'ghost-deployer-extension': {
          path: '/views/ghost-deployer-extension.js'
        },

        'added-services-button': {
          path: '/subapps/browser/views/added-services-button.js'
        },

        'juju-views': {
          use: [
            'handlebars',
            'd3-components',
            'juju-container-token',
            'juju-templates',
            'juju-notifications',
            'juju-help-dropdown',
            'juju-user-dropdown',
            'juju-create-machine-view',
            'juju-deployer-bar',
            'juju-environment-header',
            'juju-machine-token',
            'juju-serviceunit-token',
            'juju-machine-view-panel',
            'juju-machine-view-panel-header',
            'juju-view-utils',
            'juju-service-scale-up-view',
            'juju-topology',
            'juju-view-environment',
            'juju-view-login',
            'juju-landscape'
          ]
        },

        'inspector-base': {
          path: '/views/inspector-base.js'
        },

        'service-inspector-utils-extension': {
          path:
              '/views/inspectors/service-inspector-utils-extension.js'
        },

        'request-series-inspector': {
          path: '/views/inspectors/request-series.js'
        },

        'local-new-upgrade-inspector': {
          path: '/views/inspectors/local-new-upgrade.js'
        },

        'service-inspector': {
          path: '/views/inspectors/service-inspector.js'
        },

        // Viewlet views
        'inspector-overview-view': {
          path: '/views/viewlets/service-overview.js'
        },

        'viewlet-view-base': {
          path: '/views/viewlets/viewlet-view-base.js'
        },

        'service-constraints-view': {
          path: '/views/viewlets/service-constraints.js'
        },

        'service-relations-view': {
          path: '/views/viewlets/service-relations.js'
        },

        'request-series-view': {
          path: '/views/viewlets/request-series.js'
        },

        'service-config-view': {
          path: '/views/viewlets/service-config.js'
        },

        'local-new-upgrade-view': {
          path: '/views/viewlets/local-new-upgrade-view.js'
        },

        'charm-details-view': {
          path: '/views/viewlets/charm-details.js'
        },

        'inspector-header-view': {
          path: '/views/viewlets/inspector-header.js'
        },

        'unit-details-view': {
          path: '/views/viewlets/unit-details.js'
        },

        'change-version-view': {
          path: '/views/viewlets/change-version.js'
        },

        'scale-up-view': {
          path: '/views/viewlets/scale-up.js'
        },

        // Viewlet view extensions

        'conflict-view-extension': {
          path: '/views/viewlets/conflict-view-extension.js'
        },

        'configfile-view-extension': {
          path: '/views/viewlets/configfile-view-extension.js'
        },

        // Models
        'juju-endpoints': {
          path: '/models/endpoints.js'
        },

        'juju-bundle-models': {
          path: '/models/bundle.js'
        },

        'juju-charm-models': {
          path: '/models/charm.js'
        },

        'juju-delta-handlers': {
          path: '/models/handlers.js'
        },

        'juju-models': {
          path: '/models/models.js'
        },

        'model-controller': {
          path: '/models/model-controller.js'
        },

        // Connectivity
        'juju-env-base': {
          path: '/store/env/base.js'
        },

        'juju-env-go': {
          path: '/store/env/go.js'
        },

        'juju-env-fakebackend': {
          path: '/store/env/fakebackend.js'
        },

        'juju-fakebackend-simulator': {
          path: '/store/env/simulator.js'
        },

        'juju-env-sandbox': {
          path: '/store/env/sandbox.js'
        },

        'juju-env-web-handler': {
          path: '/store/env/web-handler.js'
        },

        'juju-env-web-sandbox': {
          path: '/store/env/web-sandbox.js'
        },

        'juju-notification-controller': {
          path: '/store/notifications.js'
        },

        'juju-endpoints-controller': {
          path: '/store/endpoints.js'
        },

        'charmstore-api': {
          path: '/store/charmstore-api.js'
        },

        'juju-websocket-logging': {
          path: '/websocket-logging.js'
        },

        'browser-cache': {
          path: '/utils/cache.js'
        },

        'environment-change-set': {
          path: '/utils/environment-change-set.js'
        },

        'mv-drop-target-view-extension': {
          path: '/utils/mv-drop-target-view-extension.js'
        },

        'search-widget-mgmt-extension': {
          path: '/utils/search-widget-mgmt-extension.js'
        },

        'autodeploy-extension': {
          path: '/widgets/autodeploy-extension.js'
        },

        'juju-controllers': {
          use: [
            'juju-env-base',
            'juju-env-go',
            'juju-notification-controller']
        },

        // App
        'juju-gui': {
          path: '/app.js'
        },

        // Sub Apps

        // Browser
        'subapp-browser': {
          path: '/subapps/browser/browser.js',
          requires: ['subapp-browser-charmview']
        },

        'subapp-browser-events': {
          path: '/subapps/browser/events-extension.js'
        },

        'juju-app-state': {
          path: '/views/state.js',
          requires: []
        },

        // Browser Views
        'subapp-browser-entitybaseview': {
          path: '/subapps/browser/views/entity-base.js'
        },

        'subapp-browser-charmview': {
          path: '/subapps/browser/views/charm.js'
        },

        'subapp-browser-bundleview': {
          path: '/subapps/browser/views/bundle.js'
        },

        'subapp-browser-sidebar': {
          path: '/subapps/browser/views/sidebar.js',
          requires: [
            'subapp-browser-charmview'
          ]
        },

        'juju-charmbrowser': {
          path: '/subapps/browser/views/charmbrowser.js'
        },

        'juju-added-services': {
          path: '/subapps/browser/views/added-services.js'
        },

        'juju-added-service-token': {
          path: '/subapps/browser/views/added-service-token.js'
        },

        'juju-environment-counts': {
          path: '/subapps/browser/views/environment-counts.js'
        },

        //Browser Models
        'juju-browser-models': {
          path: '/models/browser.js'
        }
      }
    }
  }
};
