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
    return (
      <React.Fragment>
        <div key={this.props.index} className={styles.slide}>
          <div>
            <div className={styles.url}>
              <span className={styles.date}>{this.props.data.Date}</span>
            </div>
            <div className={styles.title}>{this.props.data.Project}</div>
          </div>
          <div className={styles.types}>{this.props.data.Tech}</div>
          <p className={styles.description}>{this.props.data.Description}</p>

          {this.props.data.Collaborators && (
            <p className={styles.description}>
              <span>Collaborators:</span> <br /> {this.props.data.Collaborators}
            </p>
          )}

          {this.props.data.Url && (
            <p className={styles.description}>
              <span>Visit:</span> <br />
              {/* {this.props.data.Collaborators} */}
              <a
                href={this.props.data.Url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.getHostName(this.props.data.Url)}
              </a>
            </p>
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default ListItem
