'use strict'

const test = require('ava')

const requestCountry = require('..')

test('from headers.cf-ipcountry', async t => {
  const country = await requestCountry({ headers: { 'cf-ipcountry': 'ES' } })
  t.is(country, 'ES')
})

test('from IPv4', async t => {
  const country = await requestCountry({ ipAddress: '83.52.63.194' })
  t.is(country, 'ES')
})

test.skip('from IPv6', async t => {
  const country = await requestCountry({
    ipAddress: '0:0:0:0:0:ffff:5334:3fc2'
  })
  t.is(country, 'ES')
})

test('returns `null` under no result', async t => {
  const country = await requestCountry()
  t.is(country, null)
})
