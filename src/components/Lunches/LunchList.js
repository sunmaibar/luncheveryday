import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Lunch from "./Lunch"
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

export default class LunchList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lunches: [],
      sortedLunches: [],
      categories: getCategories(this.props.allLunches.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.lunches]
    if (category === "全部") {
      this.setState(() => {
        return { sortedLunches: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { sortedLunches: items }
      })
    }
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
          {this.state.sortedLunches.map(({ node }) => {
            return <Lunch key={node.contentful_id} lunch={node} />
          })}
        </div>
      </section>
    )
  }
}
