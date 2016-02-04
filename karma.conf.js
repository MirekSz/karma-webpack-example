var webpack = require("webpack");
module.exports = function (config) {
    config.set({

        files: [
            // all files ending in "test"
            './node_modules/jquery/dist/jquery.js',
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'node_modules/babel-polyfill/dist/polyfill.js',
            './test/test.js'
            // each file acts as entry point for the webpack configuration
        ],

        // frameworks to use
        frameworks: ['source-map-support', 'mocha'],

        preprocessors: {
            // only specify one entry point
            // and require all tests in there
            './test/**/*.js': ['webpack'],
            './test/**/*.es6': ['webpack']
        },

        reporters: ['spec', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'test-results.xml'
        },
        singleRun: true,
        coverageReporter: {
            type: 'cobertura',
            dir: 'coverage/'
        },

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.css$/, loader: "style!css"},
                    {
                        test: /\.es6$/, loader: "babel", query: {
                        presets: ['es2015']
                    },
                        exclude: /node_modules/
                    },
                    {
                        test: /\.js$/, loader: "babel", query: {
                        presets: ['es2015']
                    },
                        exclude: /node_modules/
                    },
                    {test: /\.less$/, loader: "style!css!less"},
                    {
                        test: /\.hbs/,
                        loader: "handlebars-loader"
                    }
                ],
                postLoaders: [{
                    test: /\.js/,
                    exclude: /(test|node_modules|bower_components)/,
                    loader: 'istanbul-instrumenter'
                }]
            },
            resolve: {
                extensions: ['', '.js', '.es6'],
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
            require("karma-chrome-launcher"),
            require("karma-spec-reporter"),
            require("karma-junit-reporter"),
            require("karma-sourcemap-loader")
        ],

        browsers: ['PhantomJS']
    });
};
