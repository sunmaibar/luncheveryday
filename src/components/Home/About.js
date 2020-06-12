import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/aboutme.jpg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="關於" subtitle="站長" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="關於信義區中午吃什麼" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>在信義區長大的中年大叔</h4>
          <p>
            時代的演變信義區變成了金融重鎮，希望藉由一己之力，能讓外地來信義區上班打拼的民眾，肚子餓時能有多樣化的選擇。
          </p>
          <p>
            網站只是單純想替在地的民眾做服務，是站長一個人用程式寫出來的，規劃不夠周詳的地方還請見諒。
          </p>
          <button type="button" className="btn-primary">
            更多關於
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
