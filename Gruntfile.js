"use strict";

module.exports = function (grunt) {

    grunt.initConfig({

        clean: ["dist"],

        copy: {
            all: {
                expand: true,
                cwd: "src",
                src: ["**", "!modules/**", "!views/**"],
                dest: "dist"
            }
        },

        requirejs: {
            minifyJs: {
                options: {
                    include: ["modules/app", "modules/home", "modules/alert"],
                    baseUrl: "src",
                    mainConfigFile: "src/main.js",
                    out: "dist/main.js"
                }
            },
            minifyCss: {
                options: {
                    baseUrl: "src",
                    optimizeCss: "standard.keepLines.keepWhitespace",
                    cssIn: "src/main.css",
                    out: "dist/main.css"
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("default", ["clean", "copy", "requirejs"]);

};