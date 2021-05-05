# req-country

![Last version](https://img.shields.io/github/tag/Kikobeats/req-country.svg?style=flat-square)
[![Dependency status](https://img.shields.io/david/Kikobeats/req-country.svg?style=flat-square)](https://david-dm.org/Kikobeats/req-country)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/req-country.svg?style=flat-square)](https://david-dm.org/Kikobeats/req-country#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/req-country.svg?style=flat-square)](https://www.npmjs.org/package/req-country)

> Given a request, get the country associated with it. ISO 3166-1 alpha-2 compliant.

## Install

```bash
$ npm install req-country --save
```

## Usage

```js
const requestCountry = require('req-country')

module.exports = (req, res) => {
  const country = requestCountry(req)

  console.log({ country })
  // => { country: 'ES' }
}
```

You can combine it with [`is-european`](https://github.com/Kikobeats/is-european) and [`country-vat`](https://github.com/Kikobeats/country-vat):


```js
const { eeaMember, euMember } = require('is-european')
const requestCountry = require('req-country')
const countryVat = require('country-vat')

module.exports = (req, res) => {
  const country = requestCountry(req)

  console.log({ eeaMember: eeaMember(country), euMember: euMember(country) })
  // => { eeaMember: true, euMember: true }

  console.log(countryVat(country))
  // => 0.21
}
```

## License

**req-country** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/req-country/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/req-country/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
