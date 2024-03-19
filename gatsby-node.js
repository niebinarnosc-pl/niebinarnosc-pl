exports.onCreateNode = ({ node, getNode, actions: {createNodeField} }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }
  createNodeField({
    node,
    name: 'sourceName',
    value: getNode(node.parent).sourceInstanceName,
  });
  createNodeField({
    node,
    name: 'filename',
    value: getNode(node.parent).name,
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
      definitionsRemark: {
        type: "[MarkdownRemark]!",
        resolve: async (source, args, context, info) => (await context.nodeModel.findAll({
          type: "MarkdownRemark",
          query: {
            filter: {
              fields: {sourceName: {eq: "definitions"}, filename: {in: source.definitions || []}},
              frontmatter: {draft: {eq: false}}
            },
            sort: {frontmatter: {priority: "DESC"}}
          }
        })).entries
      }
    },
  })]
  createTypes(typeDefs);
};

const createDefinitions = async (graphql, createPage, reporter) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: {fields: {sourceName: {eq: "definitions"}}, frontmatter: {draft: {eq: false}}}) {
        nodes {
          fields {
            filename
          }
          frontmatter {
            slug
            title
            titleEn
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
  result.data.allMarkdownRemark.nodes.forEach(({fields: {filename}, frontmatter: {slug, title, titleEn}}) => {
    createPage({
      path: `/${slug}`,
      component: definitionTemplate,
      context: {
        filename,
        slug,
        title: title + (titleEn ? ` (${titleEn.toLowerCase()})` : "")
      }
    })
  })
}

exports.createPages = async ({ graphql, actions: {createPage}, reporter }) => {
  await createDefinitions(graphql, createPage, reporter)
}