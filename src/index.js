'use strict'

const requestIp = require('request-ip')
const geoip = require('fast-geoip')

module.exports = async (req = {}) => {
  if (req.headers) {
    // Getting from Cloudflare
    // https://support.cloudflare.com/hc/en-us/articles/200168236-What-does-Cloudflare-IP-Geolocation-do-
    if (req.headers['cf-ipcountry']) {
      return req.headers['cf-ipcountry']
    }
  }

  const ipAddress = req.ipAddress || req.ip || requestIp.getClientIp(req)

  if (ipAddress) {
    const geo = await geoip.lookup(ipAddress)
    if (geo) return geo.country
  }

  return null
}
