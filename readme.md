# mdast-normalize-headings [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Providing multiple top-level headings per single markdown document is confusing
for tools that assume that there is only a single top-level heading that
contains some meta-information (usually title) about the document.

This [**mdast**][mdast] utility makes sure that there is only one top-level
heading in the document by adjusting headings depths accordingly.

Originally extracted from [`remark-man`][man].

## Installation

[npm][]:

```bash
npm install mdast-normalize-headings
```

## Usage

```js
var u = require('unist-builder')
var normalizeHeadings = require('mdast-normalize-headings')

var tree = u('root', [
  u('heading', {depth: 1}, [u('text', 'title')]),
  u('heading', {depth: 2}, [u('text', 'description')]),
  u('heading', {depth: 1}, [u('text', 'example')])
])

console.log(tree)

normalizeHeadings(tree)

console.log(tree)
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'heading', depth: 1, children: [Array] },
     { type: 'heading', depth: 2, children: [Array] },
     { type: 'heading', depth: 1, children: [Array] } ] }
{ type: 'root',
  children:
   [ { type: 'heading', depth: 1, children: [Array] },
     { type: 'heading', depth: 3, children: [Array] },
     { type: 'heading', depth: 2, children: [Array] } ] }
```

## API

### `normalizeHeadings(tree)`

Modifies tree in-place.  Returns `tree`.

## Related

*   [`remark-normalize-headings`][normalize-headings]
    — [**remark**][remark] plugin wrapper

## Contribute

See [`contributing.md` in `syntax-tree/unist`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/syntax-tree/mdast-normalize-headings.svg

[travis]: https://travis-ci.org/syntax-tree/mdast-normalize-headings

[codecov-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-normalize-headings.svg

[codecov]: https://codecov.io/github/syntax-tree/mdast-normalize-headings

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/unist/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/unist/blob/master/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[man]: https://github.com/remarkjs/remark-man

[normalize-headings]: https://github.com/remarkjs/remark-normalize-headings
