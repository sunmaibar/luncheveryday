import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const error = () => {
  return (
    <Layout>
      <SEO title="關於我" />
      <header className={styles.error}>
        <Banner title="關於" info="網站作者">
          <p>
            長期居住於信義區，看著信義區的變化，從早期的到處都是荒野池塘，到現在滿滿的白領階層，白天時外地來上班的人口變多，在地方上也隱藏著許多美食，想要一一的介紹給大家。
          </p>
          <p>
            我的網站都是自己開發寫程式，自己當業務挨家拜訪得來的，我沒有辦法去滿足所有人的胃口，但是我會盡力去做好，幫各位去探路探索開箱，謝謝你來參觀我的網站。
          </p>
          <Link fade to="/" className="btn-white">
            回首頁
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
