import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, coverimage }) => {
  const { site } = useStaticQuery(getData)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: "zh-TW" }}
      title={`${title} | ${siteTitle}`}
    >
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={coverimage || image} />

      {/* faceBook card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={coverimage || `${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      {/* twitter Card */}
      <meta name="twitter:card" content={coverimage} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta
        name="keywords"
        content={`${description} || "信義區,中午吃什麼,巷弄美食,在地推薦,下午茶,餅乾,咖啡,信義區美食,餐廳,小吃,古早味,叫便當,有什麼好吃的,探索美食,美食部落客,美食網站,永吉路30巷,莊敬路,松山路,信義區周邊,有什麼好吃的"`}
      />
    </Helmet>
  )
}

export default SEO
