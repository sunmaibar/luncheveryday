import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Lunch = ({ lunch }) => {
  const { title, cost, slug, road, seatsNum, images } = lunch
  return <div>this is a single Lunch</div>
}

export default Lunch
