import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/aboutme.jpg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

const getImg = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "aboutme.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getImg)
  return (
    <section className={styles.about}>
      <Title title="關於" subtitle="站長" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="關於信義區中午吃什麼" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="信義區中午吃什麼"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>在地信義人</h4>
          <p>會設計，攝影，電腦動畫寫程式做網頁。</p>
          <p> 有些事情不做不會怎樣，做了會很不一樣。</p>
          <p>所以我開始做了這個網站，幫助地方商家發展，助人助己。</p>

          <Link fade to="/moreAbout">
            <button type="button" className="btn-primary">
              更多關於
            </button>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default About
