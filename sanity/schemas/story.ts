import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
        name: 'author',
        title: 'Author',
        type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'fullPhoto',
      title: 'Full Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'definitions',
      title: 'Related Definitions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'definition'}}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
        name: 'draft',
        title: 'Draft',
        type: 'boolean',
        initialValue: true,
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'thumbnail',
    },
  },
})
