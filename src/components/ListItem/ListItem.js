import React from "react"
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
      if (match[2].length > 25) {
        
        return match[2].slice(0, 25) + "..."
      }
      return match[2]
    } else {
      return null
    }
  }

  render() {
    if (this.props.data.Url) {
      var label = (
        <a
          href={this.props.data.Url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.url}
        >
        {this.getHostName(this.props.data.Url)}
        </a>
      )
    } else {
      var label = this.props.data.Project
    }

    return (
      <React.Fragment>
        <td> {this.props.data.Number} </td>
        <td> {label} </td>
        <td className={styles.description}> {this.props.data.Description} </td>
        <td> {this.props.data.Collaborators} </td>
      </React.Fragment>
    )
  }
}

export default ListItem
