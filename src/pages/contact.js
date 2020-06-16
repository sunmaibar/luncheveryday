import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="聯絡" />
      <StyledHero img={data.contactmeImage.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}
export const getImg = graphql`
  {
    contactmeImage: file(relativePath: { eq: "contactme.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default contact
