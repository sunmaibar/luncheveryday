/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "中午吃什麼",
    description: "信義區內的巷弄美食，好吃的午餐都在這裡，別再問中午要吃什麼了",
    author: "@信義區大仁哥aka中二大叔",
    keywords: "信義區,中午吃什麼,巷弄美食,在地推薦,下午茶,餅乾",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
