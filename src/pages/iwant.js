import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Iwant_detaile from "../components/Home/Iwant_detail"
const iwant = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.manyPeopleImage.childImageSharp.fluid} />

      <Iwant_detaile />
    </Layout>
  )
}

export const query = graphql`
  {
    manyPeopleImage: file(relativePath: { eq: "manyPeople.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default iwant
