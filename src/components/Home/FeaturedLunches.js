import React from "react"
import Lunch from "../Lunches/Lunch"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FeaturedLunches = () => {
  return (
    <div>
      Hello from FeaturedLunches
      <Lunch />
    </div>
  )
}

export default FeaturedLunches
