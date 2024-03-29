import React from "react"
import LunchList from "./LunchList"
import { useStaticQuery, graphql } from "gatsby"

const getAlllunches = graphql`
  query {
    allLunches: allContentfulLuncheveryday2020(
      sort: { order: DESC, fields: createdAt }
    ) {
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

const Lunchest = () => {
  const { allLunches } = useStaticQuery(getAlllunches)
  return <LunchList allLunches={allLunches} />
}

export default Lunchest
