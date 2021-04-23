/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('mdast').Heading} Heading
 */

import {visit} from 'unist-util-visit'

var max = 6

/**
 * Make sure that there is only one top-level heading in the document by
 * adjusting headings depths accordingly.
 *
 * @template {Node} T
 * @param {T} tree
 * @returns {T}
 */
export function normalizeHeadings(tree) {
  /** @type {boolean} */
  var multiple
  /** @type {Heading} */
  var first
  /** @type {Heading} */
  var title

  visit(tree, 'heading', infer)

  // If there are no titles, but there is a first heading.
  if (!title && first) {
    first.depth = 1
  }

  // If there are multiple titles.
  if (multiple) {
    visit(tree, 'heading', increase)
  }

  return tree

  /**
   * @param {Heading} node
   */
  function infer(node) {
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
  }

  /**
   * @param {Heading} node
   */
  function increase(node) {
    if (node !== title && node.depth < max) {
      node.depth++
    }
  }
}
