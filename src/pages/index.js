import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedLunches from "../components/Home/FeaturedLunches"
import FeaturedDunches from "../components/Home/FeaturedDunches"
import SEO from "../components/SEO"
export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero
        home="true"
        className="home"
        img={data.HeroImage.childImageSharp.fluid}
      >
        <Banner
          title="信義區巷弄美食情報"
          info="微型私廚在這裏，地方上的媽媽已經準備好了，網站只提供店家查詢"
        >
          <AniLink fade to="/lunches" className="btn-white">
            看看有什麼好料的
          </AniLink>
        </Banner>
      </StyledHero>
      <FeaturedLunches />
      <hr />
      <FeaturedDunches />
      <hr />
      <About />
      <Services />
    </Layout>
  )
}

export const getImg = graphql`
  {
    HeroImage: file(relativePath: { eq: "heroBcg.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
