import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const postTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      <section className={styles.template}>
        <Link to="/blog/" className={styles.link}>
          Back
        </Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span>/ <span>{date}</span>
          </h4>
        </div>

        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default postTemplate
