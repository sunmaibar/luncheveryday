import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/aboutme.jpg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const getImge = graphql`
  query office {
    office: file(relativePath: { eq: "office.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Iwant_detail = () => {
  const { office } = useStaticQuery(getImge)
  return (
    <section className={styles.about}>
      <Title title="在地" subtitle="推薦" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="關於信義區中午吃什麼" /> */}
            <Img fluid={office.childImageSharp.fluid} alt="信義區中午吃什麼" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>歡迎推薦</h4>
          <p>信義區中的在地美食</p>
          <p>在你心目中，什麼是你的第一名，歡迎推薦給我</p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSep0zBpMG94EQ8mMuXrR_pCJpOFYDs-0BSB5PkUZPGVckBKpg/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button type="button" className="btn-primary">
              前往填寫表單
            </button>
          </a>
        </article>
      </div>
    </section>
  )
}

export default Iwant_detail
