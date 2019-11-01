// import React from "react"
// import { graphql } from "gatsby"
// import styles from "./blogTemplate.module.css"

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds our post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <div className={styles.container}>
//       <article className={styles.article}>
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div
//           className={styles.content}
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </article>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `