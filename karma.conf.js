var webpack = require("webpack");
module.exports = function (config) {
    config.set({

        files: [
            // all files ending in "test"
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './test/**/*.js'
            // each file acts as entry point for the webpack configuration
        ],

        // frameworks to use
        frameworks: ['source-map-support', 'mocha'],

        preprocessors: {
            // only specify one entry point
            // and require all tests in there
            './test/**/*.js': ['webpack']
        },

        reporters: ['spec', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'test-results.xml'
        },
        singleRun: true,
        coverageReporter: {
            type: 'html',
            dir: 'build/coverage/'
        },

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.css$/, loader: "style!css"},
                    {test: /\.less$/, loader: "style!css!less"}
                ],
                postLoaders: [{
                    test: /\.js/,
                    exclude: /(test|node_modules|bower_components)/,
                    loader: 'istanbul-instrumenter'
                }]
            },
            resolve: {
                modulesDirectories: [
                    "",
                    "src",
                    "node_modules"
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            require("karma-webpack"),
            require("istanbul-instrumenter-loader"),
            require("karma-mocha"),
            require("karma-source-map-support"),
            require("karma-coverage"),
            require("karma-phantomjs-launcher"),
            require("karma-spec-reporter"),
            require("karma-junit-reporter"),
            require("karma-sourcemap-loader")
        ],

        browsers: ['PhantomJS']
    });
};
