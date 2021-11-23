import React from "react"
import Dunch from "../Dunches/Dunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import styled from "styled-components"
import { Link } from "gatsby"

const getDunches = graphql`
  query {
    featuredDunches: allContentfulDunches(filter: { featured: { eq: true } }) {
      edges {
        node {
          phoneNum
          slogan
          title
          slug
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

const FeaturedDunches = () => {
  const response = useStaticQuery(getDunches)
  const dunches = response.featuredDunches.edges

  return (
    <section className={styles.tours}>
      <div classname="My-index-BackGround">
        <Title title="商家" subtitle="廣告專區" />
        <div className={styles.center}>
          {dunches.map(({ node }) => {
            return <Dunch key={node.contentful_id} dunch={node} />
          })}
        </div>
        <Link fade to="/dunches" className="btn-primary">
          更多餐點
        </Link>
      </div>
    </section>
  )
}

export default FeaturedDunches
