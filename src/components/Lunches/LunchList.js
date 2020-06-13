import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Lunch from "./Lunch"
import Title from "../Title"

export default class LunchList extends Component {
  state = {
    lunches: [],
    sortedLunches: [],
  }

  componentDidMount() {
    this.setState({
      lunches: this.props.allLunches.edges,
      sortedLunches: this.props.allLunches.edges,
    })
  }
  render() {
    return (
      <section className={styles.tours}>
        <Title title="所有" subtitle="餐點" />
      </section>
    )
  }
}
