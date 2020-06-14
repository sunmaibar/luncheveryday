const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      lunches: allContentfulLuncheveryday2020 {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.lunches.edges.forEach(({ node }) => {
    createPage({
      path: `lunches/${node.slug}`,
      component: path.resolve("./src/templates/lunch-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
