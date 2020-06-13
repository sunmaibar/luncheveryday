import React from "react"
import Lunch from "../Lunches/Lunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getLunches = graphql`
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
              src
            }
          }
        }
      }
    }
  }
`

const FeaturedLunches = () => {
  const response = useStaticQuery(getLunches)
  console.log(response)
  return (
    <section className={styles.tours}>
      <Title title="本週" subtitle="主打" />
      <AniLink fade to="/lunches" className="btn-primary">
        更多餐點
      </AniLink>
    </section>
  )
}

export default FeaturedLunches
