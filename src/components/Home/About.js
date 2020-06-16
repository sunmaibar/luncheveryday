import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/aboutme.jpg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <p>
            從小到大都在信義區居住著，會設計，攝影，寫程式做網頁，還會電腦動畫
          </p>
          <p>
            網站資料都是自己慢慢搜集來的，是希望能推廣更多在信義區的隱藏美食，不足之處還請見諒
          </p>

          <AniLink fade to="/moreAbout">
            <button type="button" className="btn-primary">
              更多關於
            </button>
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
