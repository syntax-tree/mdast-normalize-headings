/**
 * @typedef {import('mdast').Content} Content
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').Root} Root
 */

// To do: when `mdast` is released, use `Nodes`.
/**
 * @typedef {Content | Root} Node
 */

import {visit} from 'unist-util-visit'

const max = 6

/**
 * Make sure that there is only one top-level heading in the document by
 * adjusting headings depths accordingly.
 *
 * @template {Node} Tree
 *   Node type.
 * @param {Tree} tree
 *   Tree to change.
 * @returns {Tree}
 *   Given, modified, `tree`.
 */
// To do: next major: don’t return `tree`.
export function normalizeHeadings(tree) {
  /** @type {Array<Heading>} */
  const all = []
  /** @type {boolean | undefined} */
  let multiple
  /** @type {Heading | undefined} */
  let first
  /** @type {Heading | undefined} */
  let title

  visit(tree, 'heading', function (node) {
    all.push(node)

    if (!first) {
      first = node
    }

    if (node.depth === 1) {
      if (title) {
        multiple = true
      } else {
        title = node
      }
    }
  })

  // If there are no titles, but there is a first heading.
  if (!title && first) {
    first.depth = 1
  }

  // If there are multiple titles.
  if (multiple) {
    let index = -1
    while (++index < all.length) {
      const heading = all[index]
      if (heading !== title && heading.depth < max) {
        heading.depth++
      }
    }
  }

  return tree
}
