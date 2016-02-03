var testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(testsContext);

module.exports = context;

$(document.body).append('<div id="samil"></div>');
//
////require('core-js/es5');

