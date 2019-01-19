#!/usr/bin/env node

// https://github.com/ljharb/istanbul-merge/blob/master/bin/istanbul-merge

'use strict';

const options = require('yargs')
  .string('out')
  .describe('out', 'output path for merged raw coverage report JSON file')
  .normalize('out')
  .require('out', 'output JSON path is required')
  .require(1, 'at least one path to raw coverage report JSON files is required')
  .string('_')
  .describe('_', 'paths to raw coverage report JSON files to merge')
  .help()
  .usage('Usage: $0 --out path/to/output.json "a/**.json" b/input.json')
  .version().argv;

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const istanbul = require('istanbul-lib-coverage');
const mkdirp = require('mkdirp');

const files = [];

options._.forEach(input => {
  const results = glob.sync(input, {
    mark: true,
    nosort: true,
    strict: true,
  });
  files.push.apply(files, results);
});

const map = istanbul.createCoverageMap({});

files.forEach(file => {
  const json = fs.readFileSync(file);
  map.merge(JSON.parse(json));
});

const output = path.resolve(options.out);
mkdirp.sync(path.dirname(output));
fs.writeFileSync(output, JSON.stringify(map));
