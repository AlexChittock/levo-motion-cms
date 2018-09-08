import React from 'react'
import Helmet from 'react-helmet'

import ShortHeader from '../components/ShortHeader'

export default ({ data, children, ...props}) => {
  console.log(pageQuery)
  const { markdownRemark: post } = data
  return (
    <div className="page">
      <ShortHeader title={post.frontmatter.title} />
      <div className="page__wrapper">
        <Helmet>
          <title>{post.frontmatter.title}</title>
        </Helmet>
        <article className="page__content" dangerouslySetInnerHTML={{ __html: post.html }} />
        {children}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        title
      }
    }
  }
`;