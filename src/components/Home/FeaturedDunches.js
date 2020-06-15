import React from "react"
import Dunch from "../Dunches/Dunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import styled from "styled-components"

const getDunches = graphql`
  query {
    featuredDunches: allContentfulDunches(filter: { featured: { eq: true } }) {
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

const FeaturedDunches = () => {
  const response = useStaticQuery(getDunches)
  const dunches = response.featuredDunches.edges

  return (
    <section className={styles.tours}>
      <div classname="My-index-BackGround">
        <Title title="下午茶" subtitle="推薦" />
        <div className={styles.center}>
          {dunches.map(({ node }) => {
            return <Dunch key={node.contentful_id} dunch={node} />
          })}
        </div>
        <AniLink fade to="/dunches" className="btn-primary">
          更多餐點
        </AniLink>
      </div>
    </section>
  )
}

export default FeaturedDunches
