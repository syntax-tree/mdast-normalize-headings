import fs from 'fs'
import path from 'path'
import test from 'tape'
import remark from 'remark'
import {removePosition} from 'unist-util-remove-position'
import {normalizeHeadings} from '../index.js'

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

/**
 * @param {import('tape').Test} t
 * @param {string} test
 * @param {string} message
 */
function check(t, test, message) {
  var input = fs.readFileSync(path.join('test', 'fixture', test + '.in'))
  var output = fs.readFileSync(path.join('test', 'fixture', test + '.out'))

  t.deepEqual(
    removePosition(normalizeHeadings(remark().parse(input)), true),
    removePosition(remark().parse(output), true),
    message
  )
}
