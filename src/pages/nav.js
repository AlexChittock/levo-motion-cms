import React from 'react'

const Nav = (props) =>
  <div>{console.log(props)}Nav</div>

export default Nav

export const pageQuery = () =>
  graphql`
    query NavQuery {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
              topLevel
            }
          }
        }
      }
    }
  `