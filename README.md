# request-country

![Last version](https://img.shields.io/github/tag/Kikobeats/request-country.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/Kikobeats/request-country/master.svg?style=flat-square)](https://travis-ci.com/Kikobeats/request-country)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/request-country.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/request-country)
[![Dependency status](https://img.shields.io/david/Kikobeats/request-country.svg?style=flat-square)](https://david-dm.org/Kikobeats/request-country)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/request-country.svg?style=flat-square)](https://david-dm.org/Kikobeats/request-country#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/request-country.svg?style=flat-square)](https://www.npmjs.org/package/request-country)

> Given a request, get the country associated with it. ISO 3166-1 alpha-2 compliant.

## Install

```bash
$ npm install request-country --save
```

## Usage

```js
const requestCountry = require('request-country')

const country = requestCountry(req)

console.log({ country })
// => { country: 'ES' }
```

You can combine it with [`is-european`](https://github.com/Kikobeats/is-european):

```js
const requestCountry = require('request-country')
const { eeaMember, euMember } = require('is-european')

const country = requestCountry(req)

console.log({eeaMember: eeaMember(country), euMember: euMember(country) })
// => { eeaMember: true, euMember: true }
```

## License

**request-country** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/request-country/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/request-country/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
