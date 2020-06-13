import React from "react"
import LunchList from "./LunchList"
import { useStaticQuery, graphql } from "gatsby"

const getAlllunches = graphql`
  query {
    allLunches: allContentfulLuncheveryday2020 {
      edges {
        node {
          title
          cost
          slug
          road
          seatsNum
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
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
