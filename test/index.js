'use strict'

var fs = require('fs')
var path = require('path')
var test = require('tape')
var remark = require('remark')
var remove = require('unist-util-remove-position')
var normalizeHeadings = require('..')

test('Multiple top-level headings', function (t) {
  check(t, 'no-headings', 'No-op if there is no headings')
  check(t, 'no-titles', 'No-op if there is no top-level headings')
  check(t, 'one-title', 'No-op if there is a single top-level heading')
  check(t, 'two-titles', 'Makes the second header one level deeper')
  check(t, 'more-titles', 'Shifts all other headings one level deeper')
  t.end()
})

test('Level 7', function (t) {
  check(t, 'hierarchy', 'There is no depth level 7')
  t.end()
})

function check(t, test, message) {
  var input = fs.readFileSync(path.join(__dirname, 'fixture', test + '.in'))
  var output = fs.readFileSync(path.join(__dirname, 'fixture', test + '.out'))

  t.deepEqual(
    remove(normalizeHeadings(remark().parse(input)), true),
    remove(remark().parse(output), true),
    message
  )
}
