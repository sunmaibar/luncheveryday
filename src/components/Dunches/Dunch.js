import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

const Dunch = ({ dunch }) => {
  const { title, cost, slug, road, seatsNum, images } = dunch
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single" />
        <Link fade className={styles.link} to={`/dunches/${slug}`}>
          更多介紹
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
            <h6>{seatsNum ? `共有${seatsNum}座位` : "不提供內用"}</h6>
            <h6>{cost ? `平均消費約${cost}元` : "未能提供平均消費"}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Dunch
