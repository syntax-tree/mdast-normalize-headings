'use strict';

var normalizeHeadings = require('..');

var test = require('tape'),
    remark = require('remark');

var fs = require('fs'),
    path = require('path');


var load = function (filename) {
  var markdown = fs.readFileSync(path.join(__dirname, filename));
  return remark()
    .use({settings: {position: false}})
    .parse(markdown);
};


test.Test.prototype.check = function (test, message) {
  var input = load(test + '.in');
  var output = load(test + '.out');

  this.deepEqual(normalizeHeadings(input), output, message);
};


test('Multiple top-level headings', function (t) {
  t.check('no-headings', 'No-op if there is no top-level headings');
  t.check('one-heading', 'No-op if there is a single top-level heading');
  t.check('two-headings', 'Makes the second header one level deeper');
  t.check('more-headings', 'Shifts all other headings one level deeper');
  t.end();
});


test('Level 7', function (t) {
  t.check('hierarchy', 'There is no depth level 7');
  t.end();
});
