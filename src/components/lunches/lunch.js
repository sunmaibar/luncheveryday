import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Lunch = ({ lunch }) => {
  const { title, cost, slug, road, seatsNum, images } = lunch

  let mainImage = images[0].fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single" />
        <Link fade className={styles.link} to={`/lunches/${slug}`}>
          更多細節
        </Link>
      </div>

      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {road}
          </h4>
          <div className={styles.details}>
            <h6>共有{seatsNum}座位 </h6>
            <h6>平均消費約 ${cost}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Lunch
