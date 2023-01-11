const siteUrl = "https://cinematics.vercel.app/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://cinematics.vercel.app/server-sitemap-index.xml', // <==== Add here
    ],
  },
}