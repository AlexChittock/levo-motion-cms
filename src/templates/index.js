import React from 'react'
import Helmet from 'react-helmet'

export default ({ data, ...props}) => {
  const { markdownRemark: post } = data;
  // console.log(props)
  return (
    <div className="wrapper">
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

// export const pageQuery = graphql`
//   query PageByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       id
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;