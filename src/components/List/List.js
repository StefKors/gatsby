import React from "react"
import styles from "./List.module.css"
import data from "../../data/db.json"
import ListItem from "../ListItem/ListItem"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.projectList}>
          {data.map((post, index) => (
            <div key={index}>
              <ListItem
                data={post}
                index={index}
                key={index}
                isOpen={"open"}
                className={styles.item}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default List
