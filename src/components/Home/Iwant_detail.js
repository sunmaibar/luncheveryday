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
          <h4>商家刊登</h4>
          <p>
            只需要給我些商家基本資訊，我就可以幫你這網站上廣告，是沒有期限的，可以大大增加曝光機率
          </p>
          <p>是佛心不收錢的</p>

          <a
            href="https://forms.gle/uSunWnd6NwP5g8Hz9"
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
