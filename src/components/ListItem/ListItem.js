import React, { Component } from "react"
import styles from "./ListItem.module.css"

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  getHostName(url) {
    if (url === undefined) return null
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
    if (
      match != null &&
      match.length > 2 &&
      typeof match[2] === "string" &&
      match[2].length > 0
    ) {
      return match[2]
    } else {
      return null
    }
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    const url = this.props.data.Url
    if (url) {
      return (
        <a
            href={this.props.data.Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.getHostName(this.props.data.Url)}
          </a>
      )
    } 
    return <div>{this.props.data.Project}</div>
  }
}

export default ListItem
