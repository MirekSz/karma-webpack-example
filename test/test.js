var testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(testsContext);

module.exports = context;

//require('core-js/es5');

