import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ShortHeader from '../components/ShortHeader'

export default ({ data, children, ...props}) => {
  console.log(data);
  const { allMarkdownRemark: { edges: posts } } = data;
  return (
    <div className="page">
      <ShortHeader title="News" />
      <div className="page__wrapper">
        <Helmet>
          <title>News</title>
        </Helmet>
        {posts.map(post => 
          <article className="page__content">
            <h1>{post.node.frontmatter.title}</h1>
            <p>{post.node.excerpt} <Link to={post.node.frontmatter.path}>Read more</Link></p>
            <p>Posted on: {post.node.frontmatter.date}</p>
          </article>
        )}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          path:{
            regex:"/blog/"
          }
        }
      }
    ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
  }
`