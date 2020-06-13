import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query Firstquery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>title: {data.site.siteMetadata.title}</h1>
      <h1>name:{data.site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header
