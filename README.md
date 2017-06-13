[![npm](https://nodei.co/npm/mdast-normalize-headings.png)](https://npmjs.com/package/mdast-normalize-headings)

# mdast-normalize-headings

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

> :warning:
>
> This is an AST transformer for [mdast][] syntax trees. A [remark][] plugin has been split off into [a different project][remark-normalize-headings][].

Providing multiple top-level headings per single Markdown document is confusing for tools that assume that there is only a single top-level heading that contains some meta-information (usually title) about the document.

This [mdast][] transformer makes sure that there is only one top-level heading in the document by adjusting headings depths accordingly.

Originally extracted from [remark-man][].

[mdast]: https://github.com/syntax-tree/mdast
[remark]: https://github.com/wooorm/remark
[remark-man]: https://github.com/wooorm/remark-man
[remark-normalize-headings]: https://github.com/eush77/remark-normalize-headings

[travis]: https://travis-ci.org/eush77/mdast-normalize-headings
[travis-badge]: https://travis-ci.org/eush77/mdast-normalize-headings.svg
[david]: https://david-dm.org/eush77/mdast-normalize-headings
[david-badge]: https://david-dm.org/eush77/mdast-normalize-headings.png

## Example

```js
var normalizeHeadings = require('mdast-normalize-headings');

ast
//=> {
//     "type": "root",
//     "children": [
//       {
//         "type": "heading",
//         "depth": 1,
//         "children": [
//           {
//             "type": "text",
//             "value": "title"
//           }
//         ]
//       },
//       {
//         "type": "heading",
//         "depth": 2,
//         "children": [
//           {
//             "type": "text",
//             "value": "description"
//           }
//         ]
//       },
//       {
//         "type": "heading",
//         "depth": 1,
//         "children": [
//           {
//             "type": "text",
//             "value": "example"
//           }
//         ]
//       }
//     ]
//   }

normalizeHeadings(ast)
//=> {
//     "type": "root",
//     "children": [
//       {
//         "type": "heading",
//         "depth": 1,
//         "children": [
//           {
//             "type": "text",
//             "value": "title"
//           }
//         ]
//       },
//       {
//         "type": "heading",
//         "depth": 3,
//         "children": [
//           {
//             "type": "text",
//             "value": "description"
//           }
//         ]
//       },
//       {
//         "type": "heading",
//         "depth": 2,
//         "children": [
//           {
//             "type": "text",
//             "value": "example"
//           }
//         ]
//       }
//     ]
//   }
```

## API

#### `normalizeHeadings(ast)`

Modifies AST in-place. Returns `ast`.

## Related

-   [remark-normalize-headings][] — [remark][] plugin wrapper.

## Install

```
npm install mdast-normalize-headings
```

## License

MIT
