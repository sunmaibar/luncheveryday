import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import { Link } from "gatsby"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="對不起，這頁沒有吃的" info="如果你真的很餓，回首頁看看">
          <Link to="/" className="btn-white">
            回首頁
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
