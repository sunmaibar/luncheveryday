import React from "react"
import DunchList from "./DunchList"
import { useStaticQuery, graphql } from "gatsby"

const getAllDunches = graphql`
  query {
    allDunches: allContentfulDunches(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          title
          category
          cost
          slug
          road
          seatsNum
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Dunchest = () => {
  const { allDunches } = useStaticQuery(getAllDunches)
  return <DunchList allDunches={allDunches} />
}

export default Dunchest
