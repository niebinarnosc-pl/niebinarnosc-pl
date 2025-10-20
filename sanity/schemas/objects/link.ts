import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The text to display for the link.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: ['Internal', 'External'],
        layout: 'radio',
      },
      initialValue: 'Internal',
    }),
    defineField({
      name: 'pageReference',
      title: 'Page Reference',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => parent?.linkType !== 'Internal',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.uri({
        allowRelative: true
      }),
      hidden: ({parent}) => parent?.linkType !== 'External',
    }),
  ],
  options: {
    collapsible: false,
  },
})
