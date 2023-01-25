/**
 * @typedef {import('mdast').Root} Root
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import test from 'node:test'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {removePosition} from 'unist-util-remove-position'
import {normalizeHeadings} from '../index.js'

test('Multiple top-level headings', async () => {
  await check('no-headings', 'No-op if there is no headings')
  await check('no-titles', 'No-op if there is no top-level headings')
  await check('one-title', 'No-op if there is a single top-level heading')
  await check('two-titles', 'Makes the second header one level deeper')
  await check('more-titles', 'Shifts all other headings one level deeper')
})

test('Level 7', async () => {
  await check('hierarchy', 'There is no depth level 7')
})

/**
 * @param {string} test
 * @param {string} message
 * @returns {Promise<void>}
 */
async function check(test, message) {
  const input = await fs.readFile(
    new URL('fixture/' + test + '.in', import.meta.url)
  )
  const output = await fs.readFile(
    new URL('fixture/' + test + '.out', import.meta.url)
  )
  const actual = fromMarkdown(input)
  const expected = fromMarkdown(output)
  normalizeHeadings(actual)

  assert.deepEqual(
    removePosition(actual, true),
    removePosition(expected, true),
    message
  )
}
