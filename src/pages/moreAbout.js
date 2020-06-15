import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="關於" info="網站作者">
          <p>
            長期居住於信義區，看著信義區的變化，從早期的到處都是荒野池塘，到現在滿滿的白領階層，白天時外地來上班的人口變多，感覺似乎可以為地方上做些什麼，於是起了這個念頭;沒動手做永遠沒結果，於是便動手架起了網站。
          </p>
          <p>
            要特別感謝協助我做這個網站的朋友給予的建議，一些細節的地方，也要感謝我的"前東家"金色三麥集團Robin副總，與我最尊敬的Shirley，沒有他們給予的養分栽培，不會有今日這個網站。{" "}
          </p>
          <AniLink fade to="/" className="btn-white">
            回首頁
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error