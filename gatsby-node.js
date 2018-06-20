const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const pageTpl = path.resolve('./src/templates/page.js');

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              title
              topLevel
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    const nav = result.data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.topLevel)
    console.log("Nav", result.data.allMarkdownRemark.edges[0].node.frontmatter)
    console.log(nav)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: /*pageTpl, */path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: {
          nav: nav
        } // additional data can be passed via context
      });
    });
  });
};