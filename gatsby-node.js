exports.onCreateNode = ({ node, getNode, actions: {createNodeField} }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }
  createNodeField({
    node,
    name: 'sourceName',
    value: getNode(node.parent).sourceInstanceName,
  });
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
  `,
  schema.buildObjectType({
    name: "Frontmatter",
    fields: {
      definitionIds: {
        type: "[String]!",
        resolve: source => source.definitionIds || []
      },
      definitions: {
        type: "[MarkdownRemark]",
        resolve: async (source, args, context, info) => (await context.nodeModel.findAll({
          type: "MarkdownRemark",
          query: {
            filter: { frontmatter: { definitionId: { in: source.definitionIds || [] }, draft: { eq: false } } },
            sort: { frontmatter: { priority: "DESC" } }
          }
        })).entries
      },
      stories: {
        type: "[MarkdownRemark]",
        resolve: async (source, args, context, info) => (await context.nodeModel.findAll({
          type: "MarkdownRemark",
          query: {
            filter: { frontmatter: { definitionIds: { eq: source.definitionId }, draft: { eq: false } } }
          }
        })).entries
      },
    },
  })]
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(filter: {fields: {sourceName: {eq: "definitions"}}, frontmatter: {draft: {eq: false}}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const definitionTemplate = require.resolve(`./src/templates/Definition/index.js`)
  result.data.allMarkdownRemark.nodes.forEach(({frontmatter: {slug}}) => {
    createPage({
      path: `/${slug}`,
      component: definitionTemplate,
      context: {
        slug
      }
    })
  })
}