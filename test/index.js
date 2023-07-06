/**
 * @typedef {import('mdast').Root} Root
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import test from 'node:test'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {removePosition} from 'unist-util-remove-position'
import {normalizeHeadings} from '../index.js'

test('normalizeHeadings', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('../index.js')).sort(), [
      'normalizeHeadings'
    ])
  })

  /** @type {Record<string, string>} */
  const cases = {
    'no-headings': 'should be a no-op if there are no headings',
    'no-titles': 'should be a no-op if there are no top-level headings',
    'one-title': 'should be a no-op if there is a single top-level heading',
    'two-titles': 'should make the second header one level deeper',
    'more-titles': 'should shift all other headings one level deeper',
    hierarchy: 'should be create a depth level 7'
  }

  for (const [name, message] of Object.entries(cases)) {
    await t.test(message, async function () {
      const input = await fs.readFile(
        new URL('fixture/' + name + '.in', import.meta.url)
      )
      const output = await fs.readFile(
        new URL('fixture/' + name + '.out', import.meta.url)
      )
      const actual = fromMarkdown(input)
      const expected = fromMarkdown(output)

      normalizeHeadings(actual)
      removePosition(actual, true)
      removePosition(expected, true)

      assert.deepEqual(actual, expected)
    })
  }
})
