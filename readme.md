# mdast-normalize-headings [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

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

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-normalize-headings.svg

[build]: https://travis-ci.org/syntax-tree/mdast-normalize-headings

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-normalize-headings.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/mdast-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/mdast-normalize-headings

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/unist/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/unist/blob/master/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[man]: https://github.com/remarkjs/remark-man

[normalize-headings]: https://github.com/remarkjs/remark-normalize-headings
