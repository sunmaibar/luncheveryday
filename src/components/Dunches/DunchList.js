import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Dunch from "./Dunch"
import Title from "../Title"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["全部", ...categories]
  return categories
}

export default class DunchList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dunches: [],
      sortedDunches: [],
      categories: getCategories(this.props.allDunches.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.dunches]
    if (category === "全部") {
      this.setState(() => {
        return { sortedDunches: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { sortedDunches: items }
      })
    }
  }

  componentDidMount() {
    this.setState({
      dunches: this.props.allDunches.edges,
      sortedDunches: this.props.allDunches.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="防疫" subtitle="外送專區" />
        <p>請擅用分類按鈕👇</p>
        {/* categories */}
        <div className={styles.Mycenter}>
          {this.state.categories.map((category, index) => {
            return (
              <button
                className={styles.btnMyStyled}
                onClick={() => this.handleItems(category)}
                type="button"
                key={index}
              >
                {category}
              </button>
            )
          })}
        </div>
        {/* items */}
        <div className={styles.center}>
          {this.state.sortedDunches.map(({ node }) => {
            return <Dunch key={node.contentful_id} dunch={node} />
          })}
        </div>
      </section>
    )
  }
}
