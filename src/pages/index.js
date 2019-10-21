import React from "react"
// import { Link } from "gatsby"
// import styles from "./index.module.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Introduction from "../components/Introduction/Introduction"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import Vertical from "../components/Vertical/Vertical"
import List from "../components/List/List"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <Vertical />
      <Introduction />
      <List />
    </PageWrapper>
  </Layout>
)

export default IndexPage
