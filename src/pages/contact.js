import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

const contact = ({ data }) => {
  return (
    <Layout>
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
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default contact
