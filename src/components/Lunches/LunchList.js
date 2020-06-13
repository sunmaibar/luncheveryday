import React, { Component } from "react"

export default class LunchList extends Component {
  state = {
    lunches: [],
    sortedLunches: [],
  }

  componentDidMount() {
    this.setState({
      lunches: this.props.lunches.edges,
      sortedLunches: this.props.lunches.edges,
    })
  }
  render() {
    return <div>hello from LUNCHLIST</div>
  }
}
