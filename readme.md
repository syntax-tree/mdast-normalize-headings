# mdast-normalize-headings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[mdast][] utility to normalize heading depths.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`normalizeHeadings(tree)`](#normalizeheadingstree)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that normalizes the heading structure of documents.
It makes sure one top-level heading is used by adjusting headings depths
accordingly.

## When should I use this?

This utility can be useful when working with tools that assume that there is a
single top-level heading that contains some meta-information (usually a title)
about the document.

A plugin, [`remark-normalize-headings`][remark-normalize-headings], exists that
does the same but for [remark][].

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install mdast-util-normalize-headings
```

In Deno with [`esm.sh`][esmsh]:

```js
import {normalizeHeadings} from 'https://esm.sh/mdast-util-normalize-headings@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {normalizeHeadings} from 'https://esm.sh/mdast-util-normalize-headings@3?bundle'
</script>
```

## Use

```js
import {u} from 'unist-builder'
import {normalizeHeadings} from 'mdast-normalize-headings'

const tree = u('root', [
  u('heading', {depth: 1}, [u('text', 'title')]),
  u('heading', {depth: 2}, [u('text', 'description')]),
  u('heading', {depth: 1}, [u('text', 'example')])
])

normalizeHeadings(tree)

console.log(tree)
```

Yields:

```js
{
  type: 'root',
  children: [
    {type: 'heading', depth: 1, children: [Array]},
    {type: 'heading', depth: 3, children: [Array]},
    {type: 'heading', depth: 2, children: [Array]}
  ]
}
```

## API

This package exports the identifier
[`normalizeHeadings`][api-normalizeheadings].
There is no default export.

### `normalizeHeadings(tree)`

Make sure that there is only one top-level heading in the document by adjusting
headings depths accordingly.

###### Parameters

*   `tree` ([`Node`][node])
    — tree to change

###### Returns

Given, modified, `tree` ([`Node`][node]).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`mdast-normalize-headings@^3`, compatible with Node.js 12.

## Security

Use of `mdast-normalize-headings` does not involve **[hast][]** so there are no
openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`remark-normalize-headings`][remark-normalize-headings]
    — remark plugin

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/mdast-normalize-headings/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-normalize-headings/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-normalize-headings.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/mdast-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/mdast-normalize-headings

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=mdast-normalize-headings

[size]: https://bundlejs.com/?q=mdast-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast

[mdast]: https://github.com/syntax-tree/mdast

[node]: https://github.com/syntax-tree/mdast#node

[remark]: https://github.com/remarkjs/remark

[remark-normalize-headings]: https://github.com/remarkjs/remark-normalize-headings

[api-normalizeheadings]: #normalizeheadingstree
