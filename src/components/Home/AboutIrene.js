import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/aboutirene.jpg"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { FaFacebook, FaInstagram } from "react-icons/fa"

const getImg = graphql`
  query aboutireneImage {
    aboutireneImage: file(relativePath: { eq: "aboutirene.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutIrene = () => {
  const { aboutireneImage } = useStaticQuery(getImg)
  return (
    <section className={styles.about}>
      <Title title="鹹牙齒" subtitle="特派員" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="關於信義區中午吃什麼" /> */}
            <Img
              fluid={aboutireneImage.childImageSharp.fluid}
              alt="信義區中午吃什麼"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>文字挑逗您的味蕾</h4>
          <p>艾琳・用美食和文字滋養美好是人生最大樂趣。 </p>
          <p>
            時常在信義區出沒尋訪美饌，熱愛各種亞洲菜與無糖手搖杯，
            期待能用美食和文字和大家一起暫時拋卻生活的無力。
          </p>

          <a target="blank" href="https://www.instagram.com/grin1624/">
            <button type="button" className="btn-primary">
              Instagram
            </button>
          </a>
        </article>
      </div>
    </section>
  )
}

export default AboutIrene
