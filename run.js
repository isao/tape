#!/usr/bin/env node
// `require` all files passed via command line
var rel = require('path').relative;

process.argv.slice(2).map(function(file) {
    require('./' + rel(__dirname, file));
});
