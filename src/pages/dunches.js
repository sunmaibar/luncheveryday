import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Dunchest from "../components/Dunches/Dunchest"
import SEO from "../components/SEO"
import Banner from "../components/Banner"

const dunches = ({ data }) => {
  return (
    <Layout>
      <SEO title="防疫外送專區" />
      <StyledHero
        home="true"
        className="home"
        img={data.dunchesImage.childImageSharp.fluid}
      >
        <Banner
          title="防疫顧全島，呷奔顧八肚"
          info="想吃點什麼？這裡有上百家信義區的餐廳在跟你揮手👋"
        ></Banner>
      </StyledHero>
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
