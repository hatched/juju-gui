# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.15.0] - 2019-08-22
### Changed
- Upgraded jaaslib to remove request for `revision-info` on Charmstore requests.
- Series list has been updated to include new OS series.
- Added Prettier to the codebase to format `.scss` files.
- Update to Xterm 3.8.0.
- Browserify has been replaced with Webpack which also now builds the SCSS files.
- Update the canvas to use the existing svg sprites.
- Removed unused svg assets from the build/dist.
- GUI is now being served by Flask.
- YUI is now served as a bundled asset in two files to reduce total number of assets.
- Replace components with juju-react-components.

### Fixed
- Forced Cloud facade to v2 to support UpdateCredentials method.
- Updated broken links in deployment flow.
- Broken GCP cloud logo in Firefox.
- Repeating port values on Status pane.
- Broken styles on the Status pane.
- Searches without query text would reload forever.
- Replaced Juju mailing list with Discourse link.

### Removed
- Entity details pages no longer have sticky headers.
- It's no longer possible to deploy k8s charms via the GUI.

## [2.14.1] - 2018-10-26
### Changed
- Updated React to 16.5.2 and remaining dependencies.
- Updated Profile section to use latest styling from Vanilla Framework.

### Fixed
- Status component is now more resilient to missing data.
- Opening bundle readme from grouped links in inspector application list now works with bundles deployed from the Juju CLI with Juju 2.5.
- Login button will now consistently show while not logged in in JAAS.

## [2.14.0] - 2018-10-01
### Added
- Applications deployed via a bundle will now be grouped in the inspector with easy access to their details pages and their post deployment content.
- Send analytics ping when exporting bundle.

### Changed
- Expand eslint linting rules. Use --fix on save to auto format into the correct syntax.
- Continued worked on making React components sharable.

### Removed
- Beta status notice has been removed.

### Fixed
- Ensure that IP address display correctly on the Profile page.
- Export bundles with series information for applications to fix multi-series deployment issues when the model has a different series than the application and specified machine.
- If a charm cannot be found in the charm store, do not fail when trying to read it from the endpoints map.
- Importing a bundle file has been disabled when in read-only mode.
- Post deployment component now correctly updates and handles no-get-started gracefully.
- Fix post deployment so that it shows even if the bundle is modified.
- The GUI now passes the correct flags to destroy unused storage instances when destroying a model.

## Older Releases
<details>
<summary>Click to expand</summary>

- 2.13.2:
  - Update JAASLib to 0.4.1
  - Update to use external bakery library (https://github.com/juju/bakeryjs).
  - Removed syntax highlighting in readme files to save on size.
  - (Fix) Errors experienced during destroying models are now surfaced to the user.
  - (Fix) Modifying the Kubernetes bundles pre-deploy no longer prevent it from adding machines on deploy.

- 2.13.1:
  - Remove test files from dist.
  - Update JAASlib.

- 2.13.0:
  - JAASlib has been moved to its own project and imported (https://github.com/juju/jaaslibjs).
  - Initial work on bundle grouping post deployment.
  - SSH-to-machine, tail logs, debug hooks, buttons have been added behind a flag.
  - (Fix) Will no longer show SSO login option if it's not available.
  - (Fix) Route parsing is less restrictive allowing direct access to more entities via url.

- 2.12.3:
  - Updated jujushell, new version is considerably more performant.
  - (Fix) Direct Deploy will no longer loop until all charms have loaded in some rare instances.
  - (Fix) A race condition generating weird app placement in bundle deploys on the canvas has been resolved.

- 2.12.2:
  - Sort charms and bundles in the user profile by name.
  - Show the controller model in the model dropdown list on the canvas.
  - (Fix) Clear the canvas when switching between new models.
  - (Fix) Owner permission no longer a requirement to destroy a model.
  - (Fix) Improved handling of unknown series in search results.
  - (Fix) cpu-cores constraint now respected in the machine view.
  - (Fix) Inspector screen scaling disabled in read-only mode.
  - (Fix) Disable 'add-keys' button after adding GitHub keys.
  - (Fix) Disconnect from current model when destroying it.

- 2.12.1:
  - Only show the controller info on the current user's profile.
  - Juju Shell can now handle possible initial welcome message.
  - The credentials forms can now be submitted by pressing enter.
  - Small styling updates.
  - (Fix) Update the DestroyModels API call for the new Juju API.

- 2.12.0:
  - The user profile has been completely redesigned.
  - Added 'Charm Details' link to the application inspector.
  - Added 'Get Started' link to the application inspector for charms which have a getstarted.md file.
  - (Fix) Application configuration in the inspector now properly handles empty fields in FireFox.
  - (Fix) Updated the messaging when the jujushell terminal is disconnected unexpectedly.
  - (Fix) Logout link is no longer hidden in the user dropdown menu.

- 2.11.3:
  - (Fix) Update marked to 0.3.9 to fix a security bug.

- 2.11.2:
  - (Fix) Add a workaround for the contenteditable bug in Firefox.
  - (Doc) Update multipass instructions.
  - (Doc) Minor fixes to releasing instructions.
  - (Beta) Improve jujushell detection and actually add tests for the feature.

- 2.11.1:

  - (Fix) Fix typo causing charmstore to be undefined when deploying from the user profile.
  - (Fix) Do not disconnect from the model when viewing user profiles.
  - (Fix) Style links in deployment flow with correct font-weight
  - (Beta) Improve detection and handling of the jujushell service.
  - (Beta) Implement models, bundles and charms panes on the new profile page.

- 2.11.0:

  - Beta release of a Terminal embedded into the GUI which allows you to perform CLI commands in the browser as you would in your local terminal. Currently only available behind a feature flag, in upcoming releases this will become widely available.
  - Removed machines are now shown in the Deployment Flow changelog.
  - Juju CLI commands are now shown alongside each record in the changelog in the Deployment Flow.
  - The changelog will now default to open when adding to an existing model.
  - (Fix) Charmstore login no longer requires logging in after refresh if you have already authenticated.
  - (Fix) Correctly remove pending resources when removing an uncommitted application from the canvas.
  - (Fix) The store page now always opens when clicking the search box.
  - (Fix) When updating an application name the changelog will now show the updated name.
  - (Fix) Update the model name correctly when actions are performed out of sync in the Deployment Flow.


- 2.10.2:

  - (Fix) Status View no longer errors if ports are not yet available.
  - (Fix) Scaling applications from the inspector no longer fails on submit.

- 2.10.1:

  - (Fix) Switching profiles between users now properly updates page title.
  - (Fix) Clicking outside the Shortcut modal now closes it.
  - (Fix) Render the user menu even if not connected to a controller.

- 2.10.0:

  - The majority of the GUI is now node-style require modules replacing the original YUI-style modules.
  - The init sequence has been completely rewritten to take advantage of this module system considerably speeding up time to interaction.
  - Size of the code sent to the client considerably reduced.
  - Clicking on a machine in the Status view now links to that machine in the Machine View.
  - Status view now sorts based on status level with error being the highest priority.
  - Clicking on the relation in the status view now links to that relation in the Inspector.
  - Beta release of the new Post Deployment document feature. After a bundle is deployed the GUI will display the contents of the bundles getstarted.md file.
  - (Fix) Removing the model name in the model switcher pre-commit no longer prevents you from updating the model name.
  - (Fix) Notifications now show on top of Deployment Flow.
  - (Fix) Close local charm inspector when switching models.

- 2.9.2:

  - Application icons are shown in the Beta Status view.
  - (Fix) Machine View and Status View can both be used in Safari.

- 2.9.1:

  - (Fix) Importing GCE credentials via JSON file no longer errors on upload.

- 2.9.0:

  - Beta release of the new Status pane! A highly requested feature, the GUI now shows the model status as it would be shown in the CLI via `juju status` with a number of improvements like the ability to jump right to an application, unit, or machine details. As this is the beta release we’re actively working on expanding the functionality and layout and welcome any feedback you have.
  - The layout of the bundle and charm details pages have been updated to increase the readability of the content.
  - When creating a new model the model name can now be changed in the header in addition to the Deployment Flow on uncommitted models.
  - Last release we added the ability to import SSH keys from GitHub. By popular request we’ve now also added the ability to import SSH keys from Launchpad.
  - (Fix) Do not allow switching of models while committing changes.

- 2.8.0:

  - Import SSH keys from GitHub during deployment.
  - Manually add multiple SSH keys during deployment.
  - Merged multiple changelogs into single Model Changes list.
  - Release of the Direct Deploy functionality.
  - (Fix) GUI will properly load now if it cannot reach the charmstore.
  - (Fix) Large number of errors are now surfaced instead of failing silently.

- 2.7.5:

  - AddKeys and ImportKeys api calls added to JS API for upcoming SSH key functionality.
  - ModelInfo calls now request missing status and owner information.
  - Initial work on a new profile UI.
  - Added "Artful" Ubuntu series.
  - (Fix) Modifying configuration of applications deployed from bundles now applies the config correctly.
  - (Fix) Update tense of the changelog outputs.
  - (Fix) Correctly authenticate if not all sessions have expired.
  - (Fix) When logged in, no longer rarely keep the logged out state.

- 2.7.4:

  - GUI dist size reduced by 68%.
  - Direct deploy styling updates.
  - Store hero images now link to search results.
  - Styling fixes and updates for tablets.
  - Search results are now links so they can be middle clicked to open in a new tab.
  - (Fix) Logout links properly work across platforms.
  - (Fix) Closing notifications no longer errors.
  - (Fix) Setting config values on applications no longer errors when descriptions are empty.
  - (Fix) Direct Deploy "Back to canvas" now works as expected.
  - (Fix) SSH keys pasted into the deployment flow no longer spill out of container.
  - (Fix) Model switcher list now properly scrolls when you have many models.
  - (Fix) Model login no longer loops under rare circumstances.
  - (Fix) Hitting the browser back button after searching now navigates properly.

- 2.7.3:

   - (Fix) Deploying into a new model, then switching models no longer intermittently connects to the incorrect model.
   - (Fix) Hitting the browser back button from a search query will now property return to search results.

- 2.7.2:

   - (Fix) Store image assets are shown properly across all platforms.
   - (Fix) Properly collapse search results with shared series.

- 2.7.1:

   - (Fix) Will now correctly boot in Safari.

- 2.7.0:

   - Subordinates are now shown as such in the charm details pages.
   - Reduced search query time by over 85%.
   - Added confirmation when removing credentials from account page.
   - The same bundle can now be deployed multiple times into the same model.
   - You can now add to the canvas directly from the search results.
   ->
     Machine view now shows constraints and allows them to be modified on
     machines which have not yet been provisioned.
   ->
     Bundles with a description in their yaml are now shown in their details
     pages and in Direct Deploy.
   - (Fix) Visiting a user profile page directly no longer intermittently redirects to your own.
   - (Fix) Usernames with + sign are now handled properly.
   - (Fix) No longer remove spaces from search queries.
   - (Fix) Checkbox hit area increased in inspector unit lists.
   - (Fix) When not in JAAS some charms will no longer request USSO login.
   - (Fix) Username is now clickable in charm/bundle details pages.
   - (Fix) Do not show the credentials section if there are none.
   - (Fix) Sticky header in charm/bundle details longer improperly hides information.
   - (Fix) Correctly center store hero images.

- 2.6.0:

   - Store search results now provide a toggle to include the community results.
   - GUI version is now visible in the GUI help menu.
   - Private charms and bundles can now be deployed like any public charm or bundle.
   - List charm terms on the charm details pages.
   ->
     Charms with terms can now be deployed in the GUI. When deploying a charm
     that requires a term agreement the terms will be presented in the
     deployment flow prior to being allowed to deploy.
   ->
     Added beta support for Direct Deploy. By visiting a url with a `dd` query
     parameter the supplied entity id will be added to a new model and a
     simplified deployment flow will be displayed for a faster deployment
     experience.
   ->
     Added account page which shows the credentials you've added across clouds
     and provides a central location to add and remove cloud credentials. The
     account page is accessible from the user icon in the top right of the GUI.
   - Started push on removing YUI.
   - Page titles now update when viewing the store.
   - Styling updates.
   ->
     When selecting an application in the inspector the icon is now moved just
     into frame.
   - (Fix) Inspector navigation to relation details pre-deploy is now functional.
   - (Fix) Config option fields no longer escape values multiple times.
   - (Fix) Exporting uncommitted models now correctly exports machine data.
   - (Fix) Do not try and move relation when ambiguous relation selector is open.
   - (Fix) Help link in the user menu is now clickable.
   - (Fix) Correctly display the series list for multi-series charms.
   - (Fix) Zoom in/out keyboard shortcuts now work.

- 2.5.2:

   - Unit workload status now shown in unit list view.
   - User permissions are now shown in profile view.
   - (Fix) Do not fail if cloud provider logo isn't available.
   - (Fix) If login times out, retry.
   - (Fix) Clicking user name in search results links to their profile.
   - (Fix) Do not allow duplicate credential names.
   - (Fix) Provide immediate feedback when destroying models.

- 2.5.1:

   - Profile access has been moved to dropdown in top right.
   - VPC ID and Force VPC options added to the deployment flow for AWS.
   - Model credentials are now shown in the user profile.
   - Friendly credential names are now displayed.
   - Able to open the store from the machine view onboarding messages.
   - Read only mode has better feedback to show why actions are blocked.
   - Entity details pages now includes link to latest revision.
   - (Fix) Owner now links to their profile page, not launchpad.
   - (Fix) Destroy model button is only shown if user has access.
   - (Fix) Cookie notice is now shown on login screen.
   - (Fix) Right-click-open now works for links in the header.
   - (Fix) JAAS always auto logs into charmstore.
   - (Fix) Juju logo properly links to root path.
   - (Fix) Empty search queries now show default store page.

- 2.5.0:

   - Removed Juju 1 support.
   - Removed Sandbox support.
   - Display channel information on bundle and charm detail pages.
   - Subordinate inspector unit lists now show subordinate units.
   - Improve styling for small screens.
   - Improve header rendering when switching models.
   - Updated styling on model sharing modal.
   - Added series to constraint options when creating new machines.
   - (Fix) Settings screen now closes on save.
   - (Fix) Constraints are now properly shown when scaling in inspector.
   - (Fix) Only constraints available on the specified provider are shown.
   - (Fix) Model switcher displays models which have never been connected to.
   - (Fix) Provide links to download charm resources when available.


- 2.4.4:

   - New model switcher which sorts based on last accessed.
   ->
     If a large number of ports are opened by a charm the inspector now shows
     them as ranges instead of individual ports.
   - New loading indicator for the GUI startup sequence.
   - Keyboard shortcuts have been moved to `Shift + ?`.
   - GUI Settings config has been moved to `Shift + !`.
   ->
     (Fix) Subordinates relation scope is properly respected when creating
     relations with both a global and container scopes.
   - (Fix) Requires relation endpoints can now be satisfied multiple times.
   - (Fix) Bundle exports will no longer improperly export boolean values.
   - (Fix) Show IP address in inspector even if no ports are available.
   - (Fix) Changing charm versions in the inspector now uses the new charm ids.
   - (Fix) Assumes @external domain if none is supplied while sharing.
   - (Fix) Hitting escape now closes the store.
   - (Fix) Do not show the sharing icon unless sharing is available.

- 2.4.3:

    - (Fix) Header links now correctly show the appropriate user profiles.
    - (Fix) Adding Google Cloud credentials json file now is stored correctly.
    - (Fix) Config options set to "" will no longer 'unset' the value in Juju.
    - (Fix) Bundle and charm details now have proper homepage and bug links.
    - (Fix) Display modified configuration options on bundle details pages.
    - (Fix) No longer repeating user name in user profile.
    - (Fix) Cookie notice no longer blocks deploy button.

- 2.4.2:

    ->
      (Fix) Prior to logging in, if the GUI loses connection to the controller
      it will no longer force a login.
    ->
      (Fix) Clicking the log in button on the canvas now correctly automatically
      logs you into the charmstore.

- 2.4.1:

    - Clicking the Juju logo now takes you to your profile.
    - Automatically log into the charmstore when logging in on hosted Juju.
    ->
      (Fix) Visiting another user or group's profile page now properly displays
      their profile.
    - (Fix) Model name is now properly synced throughout the UI.
    - (Fix) Close the search results when clicking outside.
    - (Fix) Display the proper cloud title after selecting a cloud.
    - (Fix) Long charm/bundle names now properly wrap.

- 2.4.0:

    ->
      Sharing interface now allows you to grant and revoke permissions of
      users on a per model basis.
    ->
      Charm terms are now shown in the deployment flow and any charms with
      terms now require those terms to be agreed to before deploying.
    - Added help button to header for links to documentation and shortcuts.
    - (Fix) Charmstore now uses the new URL scheme.
    - (Fix) SSH Key input field is now styled properly in Firefox/Safari.

- 2.3.0:

    - New, easy to share URL scheme.
    - New application state system.
    ->
      New Sharing interface which shows which users currently have access to
      the active model.
    - Model exports now include uncommitted changes.
    - Deployment Flow now allows you to add custom SSH keys.
    - Model switcher now shows the model owner's name if not the logged in user.
    - Alpha support for remote applications.
    - (Fix) When scaling units, correctly increment the unit id.
    - (Fix) Inspector configuration input heights are now set properly.
    - (Fix) Properly handle regions in MAAS.
    - (Fix) Improved validation on required deployment fields.
    - (Fix) Invalid required fields will now block deployment.
    - (Fix) Model name changes are now synced throughout the UI.
    - (Fix) Hide inactive Deployment Flow components until they are needed.
    - (Fix) Show file drop message even if there are matching applications.
    - (Fix) Drag and drop of external charm/bundle files now works in Safari.
    - (Fix) Fetch bundle details when viewing the GUI anonymously.
    - (Fix) Azure credentials now use the same fields as Juju.

- 2.2.7:

    - (Fix) Correctly clear cookies when visiting from the storefront.
    - (Fix) Exposed applications in bundles no longer halt deployment.

- 2.2.6:

    - (Fix) Anonymous and demo now connect to the controller.

- 2.2.5:

    - Enable deploy-target queries to work with new deployment flow.
    - Restyle invalid inputs in deployment flow.
    - Small UI changes throughout.
    - (Fix) Respect bundle constraints when deploying units.
    - (Fix) Show favicon regardless of base url.
    - (Fix) Increase hitbox size for adding credentials.

- 2.2.4:

    - [bda69b5] Update the sign up copy and add a button to sign up.
    - [931c029] Sign-up component: expire early if the user did not apply.
    - [8eff0bf] Remove export functionality from signup.
    - [1936033] Use proper key for addPendingResources in deployment.
    - [36a6876] Change the logic used to display the signup component.

- 2.2.3:

    - Added charm resources section to the inspector.
    - Reduced GUI size by 30KB pre-gzip by optimising minification.
    - Added multi-threading to transpile step, saving 30s off transpile time.
    - Display cloud provider in header.
    - (Fix) Switching models from disconnected state updates model name.
    - (Fix) Pass resource list when deploying charms with resources.
    - (Fix) Cloud logo positioning and scaling.
    - (Fix) Honor config values set in bundles.

- 2.2.2:

    - Add the ability to destroy models in the user profile.
    - Add zoom component back to the canvas.
    - Display a message in the model switcher if there are no models.
    - Add "Default" value to region selector to speed up deployment.
    - Update styling of the input fields in the deployment flow.
    - (Fix) Model creation when redirect is required no longer fails.
    - (Fix) Improve visibility of redirect info errors.
    - (Fix) Do not try to connect to models in error state.
    - (Fix) Re-enable external credential data.
    - (Fix) Logging in via Sandbox mode.

- 2.2.1:

    - Update UI for empty profile.
    - Search input no longer expands when focused.
    - New animated inputs in deployment flow.
    - Applications queued for deletion now indicate as such in their inspector.
    - >
      (Fix) When removing applications also remove the prerequisite calls.
      This fixes the issue where the changes indicated in the deployment
      summary wouldn't mirror the representation on the canvas.
    - (Fix) Openstack domain field is no longer required.
    - (Fix) Properly clear staged changes when logging out.
    - (Fix) Surface model creation errors.
    - (Fix) Model names are now validated on input blur.
    - (Fix) Segments in deployment page now animate height based on content.
    - (Fix) Various UI updates.
    - (Fix) Local charms with no icon will now display the default icon.

- 2.2.0:

    - >
      The Juju 2.0 controller was built with multi-user, multi-model
      functionality in mind. To provide the best user experience we are
      introducing new and enhanced model management in this release. This
      new experience allows you to create new models, select which region to
      deploy to, add new credentials, and choose which credentials to use when
      deploying to new models.
    - >
      Add Bundle Service support. This feature allows the GUI to use the
      external Bundle Service to import bundles when the bundle lib in Juju
      is not available, such as when in a sandbox or unconnected mode.
    - >
      Add version.json asset which contains the version number and git sha used
      to build the GUI. To access this file visit the following path replacing
      the necessary values:
      <host>/gui/<controllerUUID>/<modelUUID>/static/gui/build/app/version.json
    - (Fix) Logging in via USSO when you have no models.
    - (Fix) Update relation list when removing uncommitted subordinate relation.
    - (Fix) No clouds result when listing clouds.
    - (Fix) Switch between unconnected state to connected state.

- 2.1.13:

    - Login logic improved to support sequential controller and model access.
    - Logout logic improved to correctly log out of all models and controllers.
    - User login location suffix @local is now added automatically if missing.
    - Updated Juju API to keep it in line with the Juju beta changes.
    - User profile now displays dates in a relative format.
    - >
      Closing the browser tab will now issue browser confirmation if you have
      uncommitted changes.
    - Destroyed applications on the canvas now have blue outline.
    - Added support for new ACL handling.
    - (Fix) Switch from unconnected to connected state with uncommitted changes.
    - (Fix) Number of various layout and styling issues.
    - (Fix) Only attempt logging into a model if controller reports available.
    - (Fix) Search input no longer clears when Juju deltas arrive.
    ->
      (Fix) Bundle imports now fetch the canonical charm ID before deploying to
      handle cases where user generated bundles are using non-canonical ID's.
    - (Fix) Pass user correct user credential tag when generating new models.

- 2.1.12:

    - Removed "availability-zone" from model exports.

- 2.1.11:

    - Update the API facades to match the latest changes from Juju 2.
    - Bundles now use "applications" top level key instead of "services".
    - Use a different WebSocket connection for the model and controller.
    - Create New Model buton moved into the user profile.
    - Deploying bundles with lxc placements automatically convert to lxd.
    - >
      Multi-series subordinates now have their series locked to the series
      of the first related parent application.
    - (Fix) Local charms now deploy without issuing error about charm location.
    - (Fix) Exported bundles now include the "availability-zone" constraint.
    - (Fix) When relating to subordinates, invalid targets are now faded.

- 2.1.10:

    - Various UX fixes for DF cloud section.
    - Split BudgetList and EntityList components out of UserProfile.
    - Create Section load watcher component
    - Fix bundle deploy with juju 1
    - Handle DF section display

- 2.1.9:

    - Fix login with USSO.
    - Inspector relations: do not fail when the app has peer relations.
    - New deployment flow HTML/CSS.
    - Fail gracefully when plans are not fetched.
    - Add credentials component.
    - Choose cloud component.
    - Add Charmstore v5 and multi-series support.
    - Fix bundle deployment in the charm store v5 world.
    - Use real credentials in the deployment flow.
    - Split AgreementList out from UserProfile.
    - Display real plans in the deployment flowOnly show the promulgated charms if they exist.
    - Updated the applications/machines switcher.
    - Remove hardcoded URLs from store page and use changeState to display details.
    - Get the list of clouds for the deployment flow.
    - Fix build relation when relation exists between different applications.
    - Update node deps inc React 15.3.
    - Enable the new flow when using the blues flag.
    - Create a util for deploying or committing to models.
    - Update juju logo.
    - Remove old blues deployment flowFade a unrelatable service instead of hiding it.
    - Replace PhantomJS with XVFB run Chromium browserSet the credential on load if there is one.
    - Display changelogs on services.
    - Add mousedown drag to build a relation.
    - Use babel to minify instead of Uglify.
    - Move jujulib into the root tree.
    - Remove the WebSocket logger.

- 2.1.8:
    - Add support for Juju 2 API.
    - Various UI fixes.
- 2.1.7:
    - Provide API clients for Romulus services in the app object.
    - Last user-facing clean up on text for svc2app
    - Update the unit list item to be a reusable component.
    - Implement initial API calls for plans and terms.
    - Change services to applications in bundle export for Juju 2
    - Split jujulib. Also
    - Rename jem to jimm.
    - Fixes and improvements to property handling
    - User facing s/service/application/g.
    - Implement the "make uitest" target.
    - Services are now called applications.
    - Remove the nested YUI node_modules folder that bloats the dist since the npm3 update
    - Tweak release docs
- 2.1.6:
    - Moved model creation into the User Profile.
    - Bundle export files now have the model name and date.
    - Switching between models with uncommitted changes now displays a confirmation dialogue.
    - (Fix) Bundle icons are now properly displayed.
    - (Fix) Focus on header search input when opening midpoint.
    - (Fix) Focus on charm details content when opening.
    - (Fix) Reset panels when switching between models.
    - (Fix) Do not send RPC calls when websocket is closing.
- 2.1.5:
    - Add tests for when env should/should not connect.
    - Improve testing around search result IDs.
    - Load the gui when conected to JEM and there are no models
    - Allow clicking outside of a panel to close it.
    - Only close the notifications when the close button is clicked.
    - Move account and profile sections so they can be displayed along mid-point views.
    - Update shadows
- 2.1.4:
    - Fix various problems with bundle links in search results.
    - Show inspector in Machine View
    - Destroy any model
    - Fix icon urls for charms and bundles in the profile page.
    - Tweak the position of the import and export buttons on mobile
    - Destroy confirmation position
- 2.1.3:
    - Choose controller by the cloud and region
    - Connect when gisf and not using a sandbox model.
    - Fix deployed commit summary
    - Move notification list up in z-index.
    - Fix entity file links.
    - Deployment form validation
    - Fix display of login buttons.
    - Handle zero templates
    - Fix some rendering issues with the header and profile
    - Handle webhandler errors
    - Give series move room on search results
    - WSGI app: remove API path leftovers.
    - Fixed duplicate tag ids
    - Improve socket template handling.
    - Added inspector relation details view
    - Implement macaroon authentication.
    - Implement missing, location related, JEM client API calls.
    - Set UUID on model create
    - Fix logout when disconnected
    - Disconnected flag
    - Update static urls
    - Add series to the search results.
    - Update sysdeps for xenial
    - Moved the import and export buttons to the top of the canvas
    - Allow models to be destroyed
    - Avoid duplicating cookies, use localStorage when possible
    - Updated juju.js jem commands and tests for v2.
    - Update styling for environment switcher
    - Get Vanilla assets to load locally
    - Update search style in masthead
    - Set the model names correctly
    - Deployment flow updates again
    - Replace calls to listEnvs with listModelsWithInfo.
    - Add Xenial to list of supported series.
    - Restyle the services/machines switcher
    - Do not re-open deployment flow after initial commit
    - Allow switching to a model from the unconnected state.
    - Only commit changes when in existing model with gisf
    - Mobile spike
    - Create a new model from the profile page.
    - Improve env layer handling of models.
    - Saner lint and test targets.
    - Allow for three digit unit counts.
    - Allow credentials to be deleted
    - Update the link to the demo in the README
    - Save jem user after listing models on load
    - Get deployment flow back up and running
    - Add account page
    - Apply cloud vanilla theme
    - The breadcrumb should be shown in gisf mode
    - Added credentials forms for more clouds.
    - Use LXD with Juju 2.0
    - Hook up the model name field to the deploy command
    - Add service icon to unit inspector header.
    - Implement the ModelManager.ModelInfo client API call.
- 2.1.2:
    - Set the base asset path in the GUI to match Juju 2
    - Provide defaults when model information is missing.
    - Fix env switcher layout in Firefox.
    - Update config.js.go for new staticURL and fix broken paths
    - Combine the two deploy buttons into one
    - Add assets staticURL
    - Change profile link to use a click handler.
    - Mention staticURL in GUI in Juju docs.
    - Style the deployment form inputs to appear like the latest designs
    - Fix the buttons on the model switcher
    - Don't try and display the env name when logging in.
    - Updates to the deployment flow to match the latest designs
    - Skip connecting to a model on load
    - Index templates: collect JavaScript errors.
    - UI cleanups and fixes
    - Add more prop types
    - Inspector updates
    - Store templates in JEM
    - Handle differences between JEM and JES models.
    - List templates in the deployment flow via the API.
    - Add macaroons to config if provided
    - Add commit flow
    - Add listTemplates API call to juju.js.
    - Fix react registration problem in embedded GUI.
    - Add choose cloud and add credentials deploy steps
    - Fix Makefile typo
    - Update and standardise buttons and links
    - Add panel component for deployment flow
    - Remove related charms from entity data request.
    - Remove hardcoded charmstore URL.
    - Wrap test logic around rendering the breadcrumb.
- 2.1.1:
    - Add support for new Juju 2.0 unit info delta structure.
    - Confirm switching models if there are uncommitted changes to the model.
    - Disable container create button until form is complete.
    - Add lang and dir attributes for users with rtl browser settings.
- 2.1.0:
    - Added Juju 2.0-beta support.
    - Updated all API calls to support Juju 1.x and 2.x-beta facades.
    - Added the ability to create and switch between models in Juju 2.0.
    - Updated terminology to match the Juju 2.0 terminology.
    - >
      Created user profile view which shows you your available models, bundles
      and charms after logging into the charmstore.
    - >
      Added support for syntax highlighting in the charm details pages in the
      charmbrowser when the charm author provides a GitHub Flavoured Markdown
      readme file.
    - >
      Added the ability to drag uncommitted units between machines in the
      machine view.
    - Unit statuses are now also shown in the machine view.
    - Many UI tweaks and updates.
    - >
      (FIX) When subordinates are deployed extra empty machines are no longer
      created.
    - (FIX) Websockets are now closed properly when switching models.
    - (FIX) On logging out all cookies are now deleted.
- 2.0.3:
    - Removed and optimised code reducing the final size that needs to be sent.
    - (FIX) The service inspector duplicating units when scaling up.
    - (FIX) Require two clicks to switch between services on the canvas.
- 2.0.2:
    - >
      (FIX) The removal of the insecure config option. This functionality has
      been re-enabled for now however in the near future we will be disabling
      it for good forcing the GUI and its websockets over a secure connection.
      Note: The GUI and it's websockets are served over a secure connection
      by default.
- 2.0.1:
    - When clicking stacked charm icons the active one now is moved to the top.
    - >
      (FIX) Deploying the same charm multiple times would generate invalid
      charm names.
- 2.0.0:
    - Completely redesigned and rewritten user interface.
    - Improved integration with the charmstore.
    - New Machine View with drag and drop functionality across units.
    - Creation and switching of models across your controller.
    - New bundle deploy functionality.
- 1.4.6:
    - (FIX) Fix relationline following.
- 1.4.5:
    - (FIX) Refer to charm series as "OS series" rather than "Ubuntu series".
- 1.4.4:
    - >
      The series selector used in deploying local charms has been updated to
      align with the series allowed by juju core.
    - >
      The release doc (docs/process.rst) has been updated to reflect build
      steps necessary for releasing the juju-gui charm.
    - >
      (FIX) Deploying bundles now properly places units that have null machine
      placements and yet are used in collocated placements with other services.
- 1.4.3:
    - Added option to automatically place units by default.
    - (FIX) bundle.yaml relations defined as arrays are displayed correctly.
    - (FIX) SCSS files in sub directories are built by the watcher.
- 1.4.2:
    - Updated icon set. Removed unused icons.
    - Support running the UI in a sub URL.
    - (FIX) Fix multiple bugs in the deployer bar flow.
    - (FIX) Don't allow machine view columns to expand.
- 1.4.1:
    - Uncommitted bundles now work in devel mode by using jujucharms.com.
    - >
      Wrap Javascript assets in YUI modules, allowing them to be combo-loaded
      through Convoy.
    - Switch from using LESS to SCSS.
    - >
      Notifications for bundles deployed using the deployer have been
      restored.
    - >
      Code-removal - old DeployerImport methods and tests, along with
      deprecated py-juju support.
    - >
      Inspector cleanup - fixed-width health bar, and change version button
      hidden for uncommitted services.
    - Reference jujucharms.com instead of juju.ubuntu.com throughout.
    - (FIX) Restore v3 bundle functionality for drag-and-drop.
    - (FIX) Config options were being discarded in uncommitted bundles.
    - >
      (FIX) Fall back to most recent charm when no revno is specified in a
      bundle.
    - (FIX) Remove some usages of flex box for better display in Chrome.
- 1.4.0:
    - >
      Add the ability to represent the uncommitted state of a bundle: when
      deploying or dragging and dropping a bundle, the deployment is no longer
      immediately started, but the services, units and relations as described
      on the bundle are added to the canvas as uncommitted entities. This way
      it is possible to tweak and fine-tune bundle deployments before actually
      committing the environment changes.
    - Add support for bundle changeset handling also when in sandbox mode.
    - >
      Improve bundle exporting and importing to support the new v4 bundle
      syntax. This includes unit placement handling and machines declarations.
    - Improve reliability of the test and CI infrastructure.
    - In sandbox mode the environment default-series is now trusty.
    - >
      Add the ability to Import a collection of bundle changes from a
      querystring token reference identifying those changes.
    - >
      Support real WebSocket connections when required even if sandbox mode is
      enabled.
    - Remove legacy and unused code around bundle management.
    - Update Vagrant image and dependencies.
    - (FIX) Do not truncate service names in the service internal models.
    - >
      (FIX) Remove relations in the internal database when destroying both
      pending and committed services.
    - (FIX) Center the canvas on a newly placed bundle.
- 1.3.6:
    - >
      Allow deployment of basketless bundles (new bundle syntax) in sandbox
      mode.
    - Clean up Juju mega-watcher stream handling and improve watcher tests.
    - >
      (FIX) Safely handle new mega-watcher types as they are introduced by new
      Juju releases, even in the case of types not yet supported in the GUI.
- 1.3.5:
    - >
      Completed converting all api calls to the new v4 api which is
      considerably faster than v3.
    - (FIX) Charms which were duplicates of promulgated charms weren't shown.
    - Add React JSX compilation support to the Makefile.
- 1.3.4:
    - >
      (FIX) Service icons on the canvas no longer bounce back to their original
      positions when being repositioned.
    - (FIX) Bundle deploys no longer fail with invalid name error.
    - Removed the Features tab from the charm details pane.
    - Updated a number of api calls to the new v4 api.
    - Updated sysdeps makefile target for easier development.
- 1.3.3:
    - (FIX) bug #1428751: prevent incorrect lowercasing of config options.
    - (FIX) bug #1427162: Show local charm icon in inspector.
    - >
      (FIX) Downconvert apiv4 bundle yaml to apiv3 format temporarily to fix
      issue with multiple bundles per yaml.
    - (FIX) Show charm details using the available data if it's a local charm.
- 1.3.2:
    - Include links to code source and bugs pages in the bundle detail panel.
    - Deploy bundles using the new charm store API version 4.
    - >
      Update Juju Quickstart bundle deployment instructions. Now the new and
      simplified jujucharm.com syntax is used. e.g.
      "juju quickstart mediawiki-single".
- 1.3.1:
    - Added system dependencies make target to make development setup easier.
    - >
      (FIX) When dragging a charm from the charmbrowser to the canvas the
      configuration doesn't show up.
- 1.3.0:
    ->
     The GUI now uses the new v4 API of the Juju Charmstore. This change
     affects everything from service icons to charm and bundle details to
     the results of searching for a charm.  This also removes the auto-
     complete feature from the charm browser and search until they are
     implemented in the new charmstore.
    ->
     Login and logout items have been added to the menu with upcomming support
     for multiple users in Juju Core; if a user has been created in the state
     server, that user can log in with their password in the GUI.  If logging
     in as multiple users is not supported, then the user remains locked down
     to admin as before.  Multiple users are supported in the sandbox mode.
    - (FIX) Closing the Change Version view doesn't close the inspector.
    - (FIX) The correct icons are used for the added services bar.
- 1.2.5:
    ->
     Modifying the visibility of a service using the Added Services bar now
     animates the service icons on the canvas.
    - UI tweaks for the Inspector, Canvas, and Machine View.
    - (FIX) Change Version option now includes the most recent release version.
    ->
     (FIX) Charm configuration options with null default values are now
     respected when being deployed or when exporting bundle configurations.
- 1.2.4:
    ->
     New feature the Added Services bar! In your environment click on the
     added services bar located beneath the search input box in the sidebar.
     With it you can highlight and toggle the visibility of services. Use it
     to help find and visualize your complicated environments.
    - >
      Hide sidebar shortcut moved to ctrl-shift-h so as to not conflict with
      the Lastpass extension.
    - (FIX) Notification box turns orange when an error occurs.
    - (FIX) Improve the ambiguous relation menu appearance.
    - >
      (FIX) Increase the size of the canvas workspace to correct issues around
      the layout of large environments.
- 1.2.3:
    - Update header to fix in new upcoming site theme.
    - Link to the MAAS web ui when the GUI detects it's in a MAAS environment.
    - Add deploy-target query parameter to auto deploy something via a link.
    - (FIX) Update to make sure bundle deployments occur with "options" set.
    - (FIX) Auto placed units not showing in the machine list.
    - (FIX) Update relations to work in a one to many endpoint scenario.
    - >
      Under the ":flags:/as" feature flag, work on the added service bar
      progresses. Track the list of deployed services and enable you to show
      and hide services and units in both service view and machine view.
- 1.2.2:
    - >
      New settings UI in the keyboard help.
      Use the keyboard shortcut key ? to view the settings and to adjust things
      like the name of the environment, force enable containers support in
      machine view, and disable the cookie banner.
      All changes are local to the specific browser and not currently shared or
      synced across all users of the Juju environment.
    - >
      Add the expose/unexpose command to the deployer bar as a pending change
      vs immediate.
    - >
      If you have a pending service config change and that config is also
      changed by someone else, the potential conflict is now a warning on the
      commit summary page.
    - >
      (FIX) Prevent cascading deletes from happening to containers/machines
      when a unit/service they host is deleted.
    - (FIX) Container header rendering bug (1376353).
- 1.2.1:
    - >
      (FIX) Using a search category with an empty input no longer uses the
      previously searched for query.
- 1.2.0:
    - >
      New Feature: Machine View!

      The Juju GUI now provides two views of your environment. In addition to
      the service view there is not a new machine view. It will list out the
      underlying machines in your environment along with the services deployed
      on those machines. Machine view allows you to manually place services
      onto machines and containers on providers that support network access to
      containers.

      Along with the new machine view is a new deployer bar. This bottom bar
      allows you to stage up multiple changes to your environment before
      committing them to the Juju environment. This lets you add many
      machines, add services, and place them carefully, and verify your list
      of changes before any requests are made to Juju.
    - >
      Many small tweaks to the UI for machine view including an updated
      header, inspector look, and a new scale up UI for the inspector.
    - (FIX) Standardize the constraints units across the GUI
- 1.1.1:
    - The inspector requires fewer dispatches to render different states.
    - The sidebar can now be hidden with a keyboard shortcut (Ctrl+Alt+h).
    - A new notification is in place for bundle deployments.
    - Clicking relations shows the relation inspector.
    - >
      Upgrading a service comes with a new interface, making it easier to change
      the version of a given service.
    - The cookie notification now displays on top of other items.
    - >
      Major code-removals including several dispatch-related areas as well as
      our reliance on the Object.observe polyfill.
    - >
      Under the "mv" flag, work continues on the machine view and a deployer and
      an environment change-set which allows all changes to be queued up and
      then committed at once. Uncommitted indicators added to all juju
      primitives, and much styling work around getting the upcoming Machine View
      ready for daily use.
    - (FIX) Autocomplete search results are sorted in an expected fashion.
    - (FIX) Unit number 0 for each service now dispatches properly.
    - (FIX) Destroy Relation link in relations inspector works properly.
    - (FIX) Mocha timeout was increased for SauceLabs testing.
    - (FIX) Documentation updated for Precise.
- 1.1.0:
    - >
      The inspector's default rendering position is now in the left hand column
      to give you more room to view and work with your environment.
    - >
      A new uni-directional data flow state system was implemented which has
      dramatically simplified the data flow and execution of the GUI codebase.
    - >
      The various inspectors have had their rendering cycles refactored to
      simplify their execution.
    - Charm searching has been improved in the charm browser.
    - >
      Under the "mv" flag work continues on the machine view and a new deployer
      bar has been created which allows you to queue up changes to your
      environment and then commit those changes all at once.
    - (FIX) Disable potential iframing to avoid any possible click jacking.
    - (FIX) Environment export file name now defaults to "bundles.yaml".
    - (FIX) Relation icons getting reloaded on every delta.
    - (FIX) Service names with dashes get trimmed on closing the inspector.
    - (FIX) Subordinate relationship lines show green until moved.
    - Removed "il" flag support as it's now the default.
    - Currently available flags: mv
- 1.0.2:
    - >
      Safari is now a first class browser. You can use it without any notice
      about it being unsupported and it's built into our current CI testing.
    - >
      The GUI will now start to provide notifications of bundle deployments
      that were already in progress before you opened the GUI. This means that
      if you deply a bundle via quickstart, after you log into the GUI, you'll
      still get notifications of the bundles success or failure.
    - >
      The GUI will no longer export itself. This is to prevent issues in
      reusing your bundle file that is generated with juju-quickstart or
      getting the bundle into the charm store. If you do want to have a
      specific GUI instance in your bundle, make sure the service name is not
      "juju-gui".
    - Bundle deployment urls are now simplified and the deploy tab is updated.
    - (FIX) Allow local charms deployed to show their icon on service blocks.
    - (FIX) Update the header to show the environment name correctly.
    - (FIX) Only load the relation icons once.
    - (Fix) Improve d3 loading loading times by using a custom build of it.
    - Update Vagrant development image for easier hacking on the GUI.
    - >
      Add flag for "mv" for current machine view implementation work. This
      includes a new panel and tokens to represent machines and units of
      services to place on specific machines.
    - >
      Add flag "il" for moving the inspector into the left sidebar. This also
      brings in work for a deployer bar to allow users to build a collection
      of changes to deploy at one time.
- 1.0.1:
    - >
      Local charms may now be upgraded by dragging another zip file with the
      same service name onto the canvas.
    - Allow exporting environments in Safari.
    - Allow bundles to be recommended.
    - (FIX) constraints in bundles are space separated.
- 1.0.0:
    - >
      Local charm deploys are now supported. Drag-n-drop a zip file of your
      charm onto the canvas to deploy it.
    - >
      New relation line visualization. Multiple relations are now grouped into
      a single line. The line color helps indicate relation health and a popup
      is available to interact with the relations.
    - >
      Remove the bws prefixes from the tabs in the details view. Note this
      changes urls to specific tabs. The old urls are respected but are
      deprecated. Please update your bookmarks.
    - Notifier users when the window size is too small to work with effectively.
    - Auto open and close the browser when interacting with the inspector.
    - >
      Safari has been added to CI and the test suite. Local charm support is
      still be be completed in the next release. At that point it will become
      an officially supported browser.
    - (FIX) allow use of local web fonts to enable better offline support.
- 0.15.1:
    - Replace TabView with a new animating sliding tabs component.
    - (FIX) #1251426 unit counts in the bundle view are incorrect.
- 0.15.0:
    - >
      Fullscreen mode has been removed. Old urls are automatically mapped to
      their sidebar equivalents.
    - Inspector performance greatly improved for large numbers of units.
    - Update Features tab with new information from the current charm audit.
    - Inspector relations tab now shows the units involved in a relation error.
    - Add charm browser animations.
    - >
      This is out first release from our Github hosted repository. Docs have
      been updated throughout for working on the Juju Gui.
    - >
      The HACKING docs are updated for working on the Juju Gui with Vagrant. A
      Vagrantfile and provision script are provided.
    - >
      (FIX) Inspector height calculations are updated so the expose/destroy
      buttons always show in scroll.
- 0.14.0:
    - >
      Added support in the GUI to parse different agent states from Juju
      Core, providing more information on service status.  This includes both
      "pending" and "dying" states. Similarly, units are now divided up by
      error or status type. This is also now included in the simulator.
    - >
      Bundle deployments can now be observed within the GUI, both in sandbox
      mode and from a real deployer perspective.
    - On the relationships tab in the inspector, unit errors are now displayed.
    - Bundle deployment counts are now displayed.
    - >
      Automatic login support via a timed token was introduced in order to help
      the GUI work with the juju quickstart plugin.
    - Background grid to the canvas now pans with services.
    - (FIX) Reducing number of units from the inspector no longer causes error.
    - (FIX) Drag-and-drop now works with bundles from store or file.
    - (FIX) More robust checking of duplicate service names.
    - >
      (FIX) Relation status indicator for peer relations is now positioned
      correctly.
- 0.13.0:
    - >
      Added help and feedback menu to top right, replacing feedback link on
      side.
    - >
      (FIX) The inspector tries to get out of your way when you are making a
      relation.
    - >
      (CLEANUP) Bundle deployment instructions for using quickstart and juju
      deployer were clarified and brought up to date.
    - (FIX) Fix bundle visualization so that it does not occasionally clip.
    - (CHARM FIX) Charm now honors bundle deployment positioning.
    - >
      (FIX) Services without positioning are less likely to be automatically
      positioned on top of themselves.
    - (FIX) Make sandbox bundle deployment positioning more reliable.
    - (CLEANUP) Remove remaining old unused notifications code.
- 0.12.0:
    - >
      (BETA) In arguably the biggest single new feature of the GUI since its
      release, the GUI now supports importing, exporting, browsing and
      deploying "bundles". Bundles are collections of charms and their
      relations. You can export bundles using the export icon at the top of
      the GUI (an arrow pointing up out of a box) or shift-d. You can import
      them using the import icon (an arrow pointing into the box), by
      dragging yaml files from your computer and dropping then onto the
      environment, or by deploying bundles found in the store.

      The bundle functionality is based on the juju-deployer
      (https://launchpad.net/juju-deployer). Deploying a bundle using the GUI
      currently only support bundles that use charms from the charm store,
      rather than local charms. Some of the GUI functionality assembles
      previously-released functionality, and some of it is brand new, and only
      available before behind feature flags.
    - Add new build mode onboarding information for first time users.
    - Add the ability to deploy straight from quicksearch results.
    - Reduce the overall sprite and css sizes providing a significant improvement
    - >
      Remove footer from the UI and improve the header design providing more room
      for the environment.
    - >
      Improve the environment export to be a valid bundle file.
      in first page load times.
    - Update to the charmworld v3 api with support for bundles as well.
    - (FIX) Improve font rendering for OSX users.
    - (FIX) Correct the cookie warning layout.
    - (FIX) Fix IE10 reloading when upgrade charm is selected.

- 0.11.0:
    - >
      The inspector (and the GUI, for the first time) supports upgrading or
      downgrading a service's charm.
    - >
      The masthead's UX is improved, notably giving a bit more room for the
      rest of the application.
    - Relations now display the names of both endpoints in the environment.
    - >
      The GUI distribution is now about 1/9 the size it was before, speeding
      up deployment.
    - >
      Recommended charms (and bundles) are now marked with a red triangle,
      per results from UX tests.
    - >
      (FIX, CLEANUP) Service coordinates were being stored in three places,
      leading to confusion and bugs.  This code was refactored, introducing
      many fixes to our service positioning behavior.
    - >
      (FIX) If the charm browser were fully open to show charm details, and
      the browser was minimized and then reopened, the details page would be
      blank.
    - >
      (FIX) The Go implementation of the sandbox always lost the first delta
      from the AllWatcher's Next method.
    - >
      (FIX) Bundle export should not include the number of units for
      subordinates.
    - (FIX) Inspector scale up input was disabled forever after value change.
    - (FIX) Charm details link was not working correctly from inspector.
    - (FIX) Unit details did not display exposed URL links properly.
    - (FIX) Position annotations are once again included in exports.
    - (FIX) New units added to the canvas no longer overlap old ones.
    - >
      (FIX) The charm "code" tab in the charm browser now sorts filenames by
      directory and name, to make it easier to find a particular file.  It
      also excludes the svg files from the list, since the rendering was less
      than valuable.
    - >
      (CHARM FIX) This is actually a fix in the charm, but it is an important
      one that is worth calling out.  In some environments, the GUI would
      break, not allowing proper inspection, export, or other basic behavior.
      This turned out to be because the new server had an issue with non-ascii
      values in some cases.
    - >
      Behind the "charmworldv3" flag, bundle support is ready for
      demonstration, including browsing and deploying, in the sandbox and in a
      live environment.  Tweaks, bug fixes, and some approved bundles should
      take us the rest of the way soon.  This comprised a very large portion
      of the work behind this release.
    - >
      Behind the "onboard" flag, the GUI has work to show helpful onboarding
      for new users.
- 0.10.1:
    - Add icon for exporting a bundle.
    - (FIX) The GUI was unusable when cookies were turned off in your browser.
    - >
      (CLEANUP) Use service model in ghost inspector, rather than charm model.
      This is a nice cleanup and also enables a true environment-wide "save"
      button in the future.
    - (FIX) The GUI was unable to deploy charms without config options.
    - (FIX) Remove unit button did not work in Juju Core.
    - >
      (FIX) The inspector's unit view did not update when the unit's values
      changed.  Now everything except for the relations updates.  Relations
      have other issues that, in part, need in-progress changes in Juju Core
      to work.
    - (FIX) Changing settings did not work in Juju Core.
    - >
      (FIX) Removed broken and largely unnecessary "All Notifications" link.
      More, better changes will come there soon.
    - >
      (CLEANUP) As part of bundle work, clean up some browser templates for
      general improvements and for better re-use.
    - >
      (FIX) After saving a service config, old, unchanged values would seem
      to disappear, and then reappear a few seconds later.
    - >
      (CLEANUP) Remove the serviceInspector flag code and some of the
      now-irrelevant old view code.
    - >
      (FIX) if a service is destroyed in the command line, the inspector
      should close when the service disappears.
    - >
      (FIX) subordinate charms should not show constraints and should not
      seem to allow control of scaling.
    - >
      (FIX) destroying a service would hide it too soon, causing surprises if
      the destruction failed.  It now disappears when it is destroyed.
    - >
      Behind upgradeCharm feature flag, complete implementation of support for
      upgrading a charm in the GUI.  This will be released in 0.11, very soon.
    - >
      Behind charmworldv3 feature flag, add more support for bundles (model,
      search results, featured list, initial token, better sandbox support,
      etc.).
- 0.10.0:
    - Added new inspector view for deploying and configuring services.
    - Inspector allows viewing details in full environment context.
    - Inspector fixes problem losing edits when environment changes.
    - Inspector shows edit conflicts and allows resolution.
    - Inspector fixes previously broken per-service charm view.
    - Worked around fragility in Keystone charm (LP bug 1214087).
    - >
      Updated charm token (the token is the small charm visualization in
      browse and search) to show series and owner (or "Recommended") rather
      than summary.
    - Added missing support for removing units from services in Juju Core.
    - Added support for alternate Google Analytics keys.
    - >
      Removed filters from charm searches.  We will add them back when there is
      more to filter on.
    - >
      Added feature-flagged support for upgrading to a new version of
      a charm.
    - >
      Added internal support for new charm deployer integration (bundle
      support).
    - >
      Added internal support for sandbox version of deployer integration
      (bundle support).
    - Added internal support for charmworld APIv3 (bundle support).
    - Added internal support for rendering visual bundle summaries.
    - Refactored to unify internal charm implementations.
    - Switched to using Go sandbox by default.
    - Delivered other performance and bug fixes.
- 0.9.0:
    - Added autocomplete to the Charm Browser search input field.
    - Added support for Internet Explorer 10.
    - Added unit action buttons to the new inspector unitlist (feature-flagged).
    - >
      Added the ability to resolve user input configuration conflicts
      in the new inspector panel (feature-flagged).
    - Added Constraints and unit scaling to inspector panel (feature-flagged).
    - Added charm details to the new inspector panel (feature-flagged).
    - Finished juju-core sandbox implementation.
    - Significant progress on normalizing the charm models.
    - Updated YUI version to 3.11.0
    - Fixed outstanding Internet Explorer 10 bugs.
    - UI updates.
    - Performance and bug fixes.
- 0.8.2:
    - Fixed boolean data type export.
    - Fixed unit tests in IE10.
    - Updated providers UI in Charm Browser.
    - Fixed multiple routing issues in the Charm Browser.
    - Updated the included version of D3.
    - Many improvements to the inspector panel (feature-flagged).
    - Cleanup of the two different charm models used through the codebase.
- 0.8.1:
    - Fixed bug causing settings page to not scroll.
    - >
      Fixed bug causing the initial loading spinner to spin forever in Firefox
      with cookies disabled.
    - Fixed bug causing the scripts to load out of order.
    - Fixed subordinate interactions with juju-core.
    - Additional steps taken to remove reliance on old charm browser API.
    - Charm browser autocomplete search development started (feature-flagged).
    - Large steps towards feature parity for feature-flagged inspector.
    - Adding details panel to feature-flagged inspector.
- 0.8.0:
    - Update charm browser styling.
    - Add home link in charm browser.
    - Add provider test result data and links
    - >
      Update service block design. Use icons for service blocks and stop
      making block size dependent on unit count. Switch service block status
      summary from pie chart to bar chart.
    - Charm browser shows lifetime downloads and commit counts.
    - jujucharms.com can change logout button to "get juju" button.
    - >
      Fix deployment issues encountered for some charms, e.g. Marco Ceppi's
      discource charm.
    - Fix Juju deployer export.
    - More drag and drop deployment refinement and fixes.
    - >
      Many other small bugfixes.
    - >
      Incremental progress on service inspector behind
      serviceInspector feature flag.
    - Begin unifying old and new charm models.
- 0.7.2:
    - Easier Charm browser control with browse/build toggle.
    - UI tweaks and fixes.
- 0.7.1:
    - Added drag and drop deployment from charm browser.
    - >
      Export environment to Juju deployer YAML format from
      keyboard shortcut (shift-d).
    - Databinding and conflict resolution finalized (feature-flagged).
    - Start of new service inspector development (feature-flagged).
    - Added relations to Go sandbox (Go sandbox still in progress).
    - Cleaned up and improved unit tests.
    - Performance and memory improvements.
- 0.6.1:
    - >
      Fix critical jumping service bug (LP bug 1192596) and related drag
      problems on service creation.
    - Add feedback link.
    - Add prototype of data binding conflict resolution (feature-flagged).
    - >
      Add SetCharm to Go sandbox, in continuing preparation for supporting
      charm upgrades (not yet exposed to end-user).
    - Add incremental progress on charm sharing widget (feature-flagged).
    - Reduce test fragility and make other test improvements.
- 0.6.0:
    - New charm browser for finding available charms.
    - Visual styling changes.
    - The beginnings of a Go backend sandbox.
    - Bug fixes and improved CI reliability.
    - Automatic view portal zoom and centering.
    - Support for Google Analytics.
    - Linting of yuidoc comments.
    - Linting of copyright headers.
    - Linting of project documentation files.
    - Utility for recording and playback of websocket traffic for debugging.
    - Caching of search results.
    - Improved development HTTP server behavior.
    - Improved project documentation.
- 0.5.0:
    - Visual styling fixes.
    - Many small bugfixes.
    - Internal code reorganization and refactoring.
    - >
      Configuration values can now be multi-line.  The text entry widget
      automatically grows to accomodate multiple lines.
    - Mousewheel zoom now works in firefox.
    - The environment view now shows some help text when the canvas is empty.
    - Changes to support faster deplyoment of the GUI charm (make npm-cache).
    - >
      Experimental keyboard shortcuts.  These will certainly change in the
      future so don't train your fingers just yet.
    - Experimental import/output functionality.  Also sure to change.
    - >
      No longer reports trivial errors caused by being in restricted
      (read-only) mode.  E.g., moving a service does not generate an error.
    - Much nicer default layout of the services.
    - >
      Removed HTML5 application cache as it was causing more problems than it
      was solving.
    - Added licensing info to project (AGPL).
    - >
      Fixed a memory leak in the code that reacts to changes coming from the
      Juju environment.
- 0.4.0:
    - Support for Juju Core (Go Juju).
    - >
      New "sandbox" mode for in-browser-memory fake juju (set "sandbox" to
      "true" in config.js).
    - Support for Firefox.
    - Support for Landscape integration.
    - Many bug fixes.
    - Continuous integration support.
    - Progress towards new charm browser UX (hidden for now).
- 0.3.1:
    - Small fixes to release process.
- 0.3.0:
    - Improved browser support.
    - Beginnings of support for Go Juju.
    - Changes to the way the websocket URL are specified.
    - Movement toward continuous integration.
    - Added "ghost" services to indicate services that are being created.
    - Improved Landscape graphics.
    - Many bug fixes and refactorings.
- 0.2.2:
    - Initial support for in browser environment.
    - Subapp infrastructure.
    - Landscape integration support.
    - juju-core environment improvements.
- 0.2.1:
    - Initial support for source maps.
    - Browser tests infrastructure.
    - Browser compatibility CSS fixes.
    - Store credentials in sessionStorage.
    - Namespace aware routing.
    - Landscape integration helpers.
    - Go env: authentication and environment info.
    - Documentation improvements.
- 0.2.0:
    - Fix a number of bugs and UI misbehaviors.
    - Switch to a CSS minifier that does not require Java.
    - Remove login credentials from config.
    - Improve tests and testing infrastructure.
    - Improve project and code documentation.
- 0.1.5:
    - Add support for recess as a CSS linter.  Currently not enabled.
    - Allow login credentials to be placed in config.
    - Support read-only mode in the GUI.
    - Restore mouse wheel support for pan/zoom.
    - Prevent destruction of the Juju GUI service.
- 0.1.4:
    - Add login infrastructure
- 0.1.3:
    - Avoid loading external not secure resources
- 0.1.2:
    - Enable frontend TLS
- 0.1.1:
    - First tarball release
- 0.1.0:
    - OpenStack Summit 2012 demo
</details>
