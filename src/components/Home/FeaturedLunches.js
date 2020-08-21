import React from "react"
import Lunch from "../Lunches/Lunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import styled from "styled-components"
import { Link } from "gatsby"

const getLunches = graphql`
  query {
    featuredLunches: allContentfulLuncheveryday2020(
      filter: { featured: { eq: true } }
    ) {
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedLunches = () => {
  const response = useStaticQuery(getLunches)
  const lunches = response.featuredLunches.edges

  return (
    <section className={styles.tours}>
      <Title title="午餐" subtitle="推薦" />
      <div className={styles.center}>
        {lunches.map(({ node }) => {
          return <Lunch key={node.contentful_id} lunch={node} />
        })}
      </div>
      <Link fade to="/lunches" className="btn-primary">
        更多餐點
      </Link>
    </section>
  )
}

export default FeaturedLunches
