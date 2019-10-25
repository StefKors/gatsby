import React from "react"
import { StaticQuery, graphql } from "gatsby"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    console.log(data)

    return (
      <div>
        <h1>test</h1>
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { title: { ne: "" } } }
              ) {
                edges {
                  node {
                    excerpt
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      title
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <header>
              <h1> test</h1>
              {data.allMarkdownRemark.edges.forEach(post => {
                return (
                  <h2>{post.node.frontmatter.title}{console.log(post.node.frontmatter[0].title)}</h2>
                  )
              })}
            </header>
          )}
        />
      </div>
    )
  }
}

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { title: { ne: "" } } }
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `
