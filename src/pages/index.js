import React from "react"
// import { Link } from "gatsby"
// import styles from "./index.module.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Introduction from "../components/Introduction/Introduction"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import ProjectList from "../components/List/List"
import BlogList from "../components/Blog/List"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <Introduction />
      <BlogList />
      <ProjectList />
    </PageWrapper>
  </Layout>
)

export default IndexPage
