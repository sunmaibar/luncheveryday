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
          title="同島一命，共同防疫"
          info="彼此盡心力，努力度過世紀難關"
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
