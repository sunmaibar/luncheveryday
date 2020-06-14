import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const dunches = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.dunchesImage.childImageSharp.fluid} />
      <h1>目前尚未完工，請耐心等候 </h1>
    </Layout>
  )
}

export const query = graphql`
  {
    dunchesImage: file(relativePath: { eq: "dunches.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default dunches
