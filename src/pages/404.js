import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="對不起，這頁沒有吃的" info="如果你真的很餓，回首頁看看">
          <AniLink fade to="/" className="btn-white">
            回首頁
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
