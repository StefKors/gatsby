import React from "react"
import styles from "./Teaser.module.css"
import { Link } from "gatsby"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div className={styles.blogposts} key={data.frontmatter.title}>
        <Link to={data.frontmatter.path}>
        <h2>{data.frontmatter.title}</h2>
        <p>{data.excerpt}</p>
        </Link>
      </div>
    )
  }
}

export default BlogIndex
