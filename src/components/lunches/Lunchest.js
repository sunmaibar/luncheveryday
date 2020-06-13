import React from "react"
import LunchList from "./LunchList"
import { useStaticQuery, graphql } from "gatsby"

const getalllunches = graphql`
  {
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
              src
            }
          }
        }
      }
    }
  }
`

const Lunchest = () => {
  return (
    <div>
      hello from Lunchest
      <LunchList />
    </div>
  )
}

export default Lunchest
