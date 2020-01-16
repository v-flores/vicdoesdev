import React, {useEffect, useContext} from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import {GlobalDispatchContext, GlobalStateContext} from '../context/GlobalContextProvider';
import { graphql, useStaticQuery } from "gatsby"
import {Helmet} from "react-helmet";



const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
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
          excerpt
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Victor F - Blog</title>
    <link rel="canonical" href="http://www.victordoes.dev/blog" />
    </Helmet>
      <PostList posts={posts} />
    </Layout>
  )
}
