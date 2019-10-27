import React from "react"
import { Link, graphql } from "gatsby"
// import styles from "./index.module.css";

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

import Introduction from "../components/Introduction/Introduction"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import ProjectList from "../components/List/List"
import Teaser from "../components/Blog/Teaser"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <Introduction />
    </PageWrapper>

    <div className={styles.list}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Teaser data={node} />
      ))}
    </div>
    <PageWrapper>
      <ProjectList />
    </PageWrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
query getBlogList {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {title: {ne: ""}}}, limit: 3) {
    edges {
      node {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          path
        }
      }
    }
  }
}
`
