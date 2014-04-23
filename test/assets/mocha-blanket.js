(function() {
console.log('adapter loaded');
    if(!mocha) {
        throw new Exception("mocha library does not exist in global namespace!");
    }


    /*
     * Mocha Events:
     *
     *   - `start`  execution started
     *   - `end`  execution complete
     *   - `suite`  (suite) test suite execution started
     *   - `suite end`  (suite) all tests (and sub-suites) have finished
     *   - `test`  (test) test execution started
     *   - `test end`  (test) test completed
     *   - `hook`  (hook) hook execution started
     *   - `hook end`  (hook) hook complete
     *   - `pass`  (test) test passed
     *   - `fail`  (test, err) test failed
     *
     */

    var OriginalReporter = mocha._reporter;

    var BlanketReporter = function(runner) {
            runner.on('start', function() {
                blanket.setupCoverage();
                console.log('blanket-start');
            });

            runner.on('end', function() {
                blanket.onTestsDone();
                console.log('blanket-end');
            });

            runner.on('suite', function() {
                blanket.onModuleStart();
                console.log('blanket-suite');
            });

            runner.on('test', function() {
                blanket.onTestStart();
                console.log('blanket-test');
            });

            runner.on('test end', function(test) {
                blanket.onTestDone(test.parent.tests.length, test.state === 'passed');
                console.log('blanket-test-end');
            });

            // NOTE: this is an instance of BlanketReporter
            OriginalReporter.apply(this, arguments);
        };

    mocha.reporter(BlanketReporter);

    var oldRun = mocha.run,
        oldCallback = null;

    mocha.run = function (finishCallback) {
      oldCallback = finishCallback;
      console.log("waiting for blanket...");
    };
    blanket.beforeStartTestRunner({
        callback: function(){
            if (!blanket.options("existingRequireJS")){
                oldRun(oldCallback);
            }
            mocha.run = oldRun;
        }
    });
})();
