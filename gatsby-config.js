/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "信義區中午吃什麼",
    description:
      "信義區內的巷弄美食，好吃的都在這裡，從巷弄到百貨有著上百家餐廳，下午茶，不斷的繼續探索信義區內的美食，想吃什麼，不如先來這找看看，信義區的美食好吃到爆。",
    author: "@信義區大仁哥aka中二大叔",
    keywords: "信義區,中午吃什麼,巷弄美食,在地推薦,下午茶,餅乾,咖啡",
    twitterUsername: "@jajalaba",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://www.luncheveryday.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169599061-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.luncheveryday.com",
        sitemap: "https://www.luncheveryday.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
  ],
}
