import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Dunchest from "../components/Dunches/Dunchest"
import SEO from "../components/SEO"

const dunches = ({ data }) => {
  return (
    <Layout>
      <SEO title="下午茶" />
      <StyledHero img={data.dunchesImage.childImageSharp.fluid} />
      <Dunchest />
    </Layout>
  )
}

export const query = graphql`
  {
    dunchesImage: file(relativePath: { eq: "dunches.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default dunches
