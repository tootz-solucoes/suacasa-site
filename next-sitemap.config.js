/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.SITE_URL || 'http://www.suacasanatal.com.br/',
  generateRobotsTxt: true
}

module.exports = nextSitemapConfig
