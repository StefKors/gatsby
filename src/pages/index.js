import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Introduction from "../components/Introduction/Introduction"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import ProjectList from "../components/List/List"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <PageWrapper>
      <Introduction />
    </PageWrapper>

    <PageWrapper>
      <ProjectList />
    </PageWrapper>
  </Layout>
)

export default IndexPage
