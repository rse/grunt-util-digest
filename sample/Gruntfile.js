
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-expand-include");
    grunt.loadTasks("../tasks");

    grunt.initConfig({
        digest: grunt.util.digest("src/**/*.js", { algorithm: "sha256" }),
        "expand-include": {
            "foo-js": {
                src: [ "src/foo.js" ],
                dest: "build/foo.js",
                options: {
                    directiveSyntax: "js",
                    globalDefines: {
                        digest: "<%= digest %>"
                    }
                }
            }
        },
        clean: {
            clean:     [ "build" ],
            distclean: [ "node_modules" ]
        }
    });

    grunt.registerTask("default", [ "expand-include" ]);
};

