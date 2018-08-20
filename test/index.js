'use strict'

var fs = require('fs')
var path = require('path')
var test = require('tape')
var remark = require('remark')
var normalizeHeadings = require('..')

var proc = remark().use({settings: {position: false}})

test.Test.prototype.check = check

test('Multiple top-level headings', function(t) {
  t.check('no-headings', 'No-op if there is no headings')
  t.check('no-titles', 'No-op if there is no top-level headings')
  t.check('one-title', 'No-op if there is a single top-level heading')
  t.check('two-titles', 'Makes the second header one level deeper')
  t.check('more-titles', 'Shifts all other headings one level deeper')
  t.end()
})

test('Level 7', function(t) {
  t.check('hierarchy', 'There is no depth level 7')
  t.end()
})

function check(test, message) {
  this.deepEqual(
    normalizeHeadings(load(test + '.in')),
    load(test + '.out'),
    message
  )
}

function load(basename) {
  return proc.parse(fs.readFileSync(path.join(__dirname, 'fixture', basename)))
}
