import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default class lunches extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.lunchesImage.childImageSharp.fluid} />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    lunchesImage: file(relativePath: { eq: "邱記.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
