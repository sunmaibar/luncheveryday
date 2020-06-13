import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Lunch = ({ lunch }) => {
  const { title, cost, slug, road, seatsNum, images } = lunch

  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single" />
        <AniLink fade className={styles.link} to={`/lunches/${slug}`}>
          更多介紹
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default Lunch
