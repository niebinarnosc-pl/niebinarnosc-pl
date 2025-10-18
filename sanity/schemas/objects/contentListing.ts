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
    defineField({
      name: 'sortBy',
      title: 'Sort by',
      type: 'string',
      options: {
        list: [
          {title: 'Date', value: 'date'},
          {title: 'Title (alphabetical)', value: 'title'},
        ],
        layout: 'radio',
      },
      initialValue: 'date',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'string',
      options: {
        list: [
          {title: 'Descending', value: 'desc'},
          {title: 'Ascending', value: 'asc'},
        ],
        layout: 'radio',
      },
      initialValue: 'desc',
    }),
    defineField({
      name: 'pinnedItems',
      title: 'List on top',
      type: 'array',
      description: 'These items will be shown at the top of the list, ignoring sorting.',
      of: [
        {
          type: 'reference',
          to: [{type: 'story'}, {type: 'definition'}, {type: 'representation'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      contentType: 'contentType',
    },
    prepare({contentType}) {
      const title = contentType
        ? `List of: ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}s`
        : 'Content Listing'
      return {
        title: title,
      }
    },
  },
})
