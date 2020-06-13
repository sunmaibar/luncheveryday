import React from "react"
import Lunch from "../lunches/lunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getLunches = graphql`
  query {
    featuredLunch: allContentfulLuncheveryday2020(
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

const Featuredlunch = () => {
  const response = useStaticQuery(getLunches)
  const lunches = response.featuredLunch.edges

  return (
    <section className={styles.tours}>
      <Title title="本週" subtitle="主打" />

      <div className={styles.center}>
        {lunches.map(({ node }) => {
          return <Lunch key={node.contentful_id} lunch={node} />
        })}
      </div>
      <AniLink fade to="/lunches" className="btn-primary">
        所有午餐
      </AniLink>
    </section>
  )
}

export default Featuredlunch
