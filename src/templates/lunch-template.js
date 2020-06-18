import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyleHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const Template = ({ data }) => {
  const {
    location,
    cost,
    seatsNum,
    phoneNum,
    images,
    intro: { intro },
    title,
    slug,
    fbLinkTo: { fbLinkTo },
  } = data.lunch
  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <SEO title={title} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single lunch"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{title}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              平均消費為 ${cost} /人
            </p>
            <p>
              <FaMap className={styles.icon} />
              地址: {location}
            </p>
          </div>
          <h4>聯絡方式 {phoneNum}</h4>
          <h4>
            <a href={fbLinkTo} target="_blank" rel="noreferrer noopener">
              (看)給予評價
            </a>
          </h4>
          <p className={styles.desc}>{intro}</p>

          <Link to="/" className="btn-primary">
            回首頁
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    lunch: contentfulLuncheveryday2020(slug: { eq: $slug }) {
      location
      cost
      seatsNum
      phoneNum
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      intro {
        intro
      }
      road
      title
      slug
      fbLinkTo {
        fbLinkTo
      }
    }
  }
`

export default Template
