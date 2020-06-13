import React from "react"
import Lunch from "../Lunches/Lunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

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
              ...GatsbyContentfulFluid_tracedSVG
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
      <Title title="本週" subtitle="主打" />
      <div className={styled.center}>
        {lunches.map(({ node }) => {
          return <Lunch key={node.contentful_id} lunch={node} />
        })}
      </div>
      <AniLink fade to="/lunches" className="btn-primary">
        更多餐點
      </AniLink>
    </section>
  )
}

export default FeaturedLunches
