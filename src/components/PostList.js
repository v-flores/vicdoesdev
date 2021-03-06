import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Blog</h1>
      <h3>My journey in the web development world alongside tutorials and other new tech findings.</h3>
      <br>
      </br>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
