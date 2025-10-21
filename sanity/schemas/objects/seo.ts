import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides the page title. Appears in browser tabs and search results.',
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Overrides the default meta description for search engines.',
    }),
    defineField({
      name: 'image',
      title: 'Social Sharing Image',
      type: 'image',
      description: 'Overrides the default image used when sharing on social media.',
    }),
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
})
