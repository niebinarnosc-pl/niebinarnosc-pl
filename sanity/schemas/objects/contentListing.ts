import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contentListing',
  title: 'Content Listing',
  type: 'object',
  fields: [
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Stories', value: 'story'},
          {title: 'Definitions', value: 'definition'},
          {title: 'Representations', value: 'representation'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      contentType: 'contentType',
    },
    prepare({contentType}) {
      const title = contentType ? `List of: ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}s` : 'Content Listing';
      return {
        title: title,
      }
    },
  },
})
