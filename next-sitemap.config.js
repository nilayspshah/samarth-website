/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.docfootandankle.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'weekly',
}
