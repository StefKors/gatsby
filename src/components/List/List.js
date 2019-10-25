import React from "react"
import styles from "./List.module.css"
import data from "../../data/db.json"
import ListItem from "../ListItem/ListItem"
import { motion } from "framer-motion"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    const list = {
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
      hidden: {
        opacity: 0.5,
        transition: {
          when: "afterChildren",
        },
      },
    }

    const items = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 30 },
    }

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ ease: [0.165, 0.84, 0.44, 1] }}
        variants={list}
        className={styles.wrapper}
      >
        <div className={styles.projectList}>
          {data.map((post, index) => (
            <motion.div
              variants={items}
              transition={{ ease: [0.165, 0.84, 0.44, 1] }}
              key={index}
            >
              <ListItem
                data={post}
                index={index}
                key={index}
                isOpen={"open"}
                className={styles.item}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }
}

export default List
