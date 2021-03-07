'use strict'

const requestIp = require('request-ip')
const geoip = require('fast-geoip')

const pickHeader = name => ({ headers = {} }) => headers[name]

const providers = [
  // Getting from Cloudflare
  // https://support.cloudflare.com/hc/en-us/articles/200168236-What-does-Cloudflare-IP-Geolocation-do-
  pickHeader('cf-ipcountry'),
  // Getting from Vercel
  // https://vercel.com/changelog/ip-geolocation-for-serverless-functions
  pickHeader('x-vercel-ip-country'),
  // Getting from Google App Engine
  // https://cloud.google.com/appengine/docs/standard/java11/reference/request-response-headers
  pickHeader('x-appengine-country')
]

const fromProvider = req => {
  let provider
  providers.find(fromProvider => (provider = fromProvider(req)))
  return provider
}

const fromIpAddress = async req => {
  const ipAddress = req.ipAddress || req.ip || requestIp.getClientIp(req)

  if (ipAddress) {
    const geo = await geoip.lookup(ipAddress)
    if (geo) return geo.country
  }
}

module.exports = async (req = {}) =>
  fromProvider(req) || (await fromIpAddress(req)) || null
