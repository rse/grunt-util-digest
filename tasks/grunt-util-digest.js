/*
**  grunt-util-digest -- Grunt Plugin for calculating Message Digest of Source Files
**  Copyright (c) 2013-2015 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  some standaerd Node requirements  */
var crypto = require("crypto");

/* global module: false */
module.exports = function (grunt) {

    /*  inject us directly into the Grunt Utility API  */
    grunt.util.digest = function (patterns, options) {

        /*  allow some settings to be provided  */
        var settings = {
            algorithm: "sha1"
        };
        if (typeof options === "object")
            grunt.util._.extend(settings, options);

        /*  initialize the Message Digest  */
        var md = crypto.createHash(settings.algorithm);

        /*  expand all input files  */
        var files = grunt.file.expand(patterns).sort();

        /*  iterate over all input files and update Message Digest  */
        grunt.util._.forEach(files, function (file) {
            var data = grunt.file.read(file, { encoding: null });
            md.update(data);
        });

        /*  retrieve and return the message digest as a hex-encoding  */
        var hex = md.digest("hex");
        return hex;
    };
};

