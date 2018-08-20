'use strict'

var visit = require('unist-util-visit')

module.exports = normalizeHeadings

var max = 6

function normalizeHeadings(tree) {
  var multiple
  var first
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

  function increase(node) {
    if (node !== title && node.depth < max) {
      node.depth++
    }
  }
}
