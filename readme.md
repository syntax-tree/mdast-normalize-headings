# mdast-normalize-headings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**mdast**][mdast] utility to make sure that there is only one top-level heading
in the document by adjusting headings depths accordingly.

Providing multiple top-level headings per single markdown document is confusing
for tools that assume that there is only a single top-level heading that
contains some meta-information (usually title) about the document.

## Install

[npm][]:

```sh
npm install mdast-normalize-headings
```

## Use

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

Modifies [tree][] in-place.
Returns `tree`.

## Security

Use of `mdast-normalize-headings` does not involve [**hast**][hast] so there are
no openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`remark-normalize-headings`][normalize-headings]
    — [**remark**][remark] plugin wrapper

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-normalize-headings.svg

[build]: https://travis-ci.org/syntax-tree/mdast-normalize-headings

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-normalize-headings.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/mdast-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/mdast-normalize-headings

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-normalize-headings.svg

[size]: https://bundlephobia.com/result?p=mdast-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[normalize-headings]: https://github.com/remarkjs/remark-normalize-headings

[tree]: https://github.com/syntax-tree/unist#tree

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast
