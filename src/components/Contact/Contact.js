import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="聯絡" subtitle="站長" />
      <div className={styles.center}>
        <form
          method="POST"
          className={styles.form}
          action="https://formspree.io/xpzyrydd"
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="請輸入姓名"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="請輸入你的電子郵件帳號email"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              className={styles.formControl}
              rows="10"
              placeholder="寫下要給站長的話，但是站長不一定會回"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="送出" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
