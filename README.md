![actions][actions-badge]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Code Coverage][coverage-badge]][coverage]

# @jimmy-guzman/utils

> 🗄️ Collection of utilities used throughout personal projects

## ➕ Install

```shell
npm i @jimmy-guzman/utils
```

Or with yarn

```shell
yarn add @jimmy-guzman/utils
```

Or with pnpm

```shell
pnpm add @jimmy-guzman/utils
```

## 📝 Usage

```ts
import { asyncFilter } from '@jimmy-guzman/utils'

const isDivisibleBy2 = async (num: number) => Promise.resolve(num % 2 === 0)

await asyncFilter([2, 4, 1, 8, 3], isDivisibleBy2)
```

See [docs](https://jimmy-guzman.github.io/utils/modules.html) for available utils

<!-- badges links start -->

[actions-badge]: https://img.shields.io/github/workflow/status/jimmy-guzman/utils/release?label=actions&logo=github-actions&style=flat-square
[version-badge]: https://img.shields.io/npm/v/utils.svg?logo=npm&style=flat-square
[package]: https://www.npmjs.com/package/@jimmy-guzman/utils
[downloads-badge]: https://img.shields.io/npm/dm/@jimmy-guzman/utils.svg?logo=npm&style=flat-square
[npmtrends]: http://www.npmtrends.com/@jimmy-guzman
[coverage-badge]: https://img.shields.io/codecov/c/github/jimmy-guzman/utils.svg?style=flat-square
[coverage]: https://codecov.io/github/jimmy-guzman/utils

<!-- badges links end -->
