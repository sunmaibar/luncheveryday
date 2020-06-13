import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getdata = graphql`
  {
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

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getdata}
      render={data => {
        console.log(data)
        return (
          <div>
            <h2>Hello people</h2>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
