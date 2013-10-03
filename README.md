
# grunt-util-digest

Grunt Plugin for calculating Message Digest of Source Files.

<p/>
<img src="https://nodei.co/npm/grunt-util-digest.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/grunt-util-digest.png" alt=""/>

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/)
before, be sure to check out the [Getting
Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-util-digest --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-util-digest");
```

## Usage Example

```js
// [...]
grunt.initConfig({
    // [...]
    digest: grunt.util.digest([ "src/**/*.js" ], { algorithm: "md5" })
    "expand-include": {
        "app": {
            src: [ "src/*.js" ],
            dest: "build/app.js",
            options: {
                directiveSyntax: "js",
                globalDefines: {
                    digest: "<%= digest %>"
                }
            }
        }
    },
    // [...]
});
// [...]
```

