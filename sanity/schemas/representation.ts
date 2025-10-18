import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'representation',
  title: 'Representation',
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
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'author'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Serial', 'Książka', 'Film', 'Inne'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'storyDescription',
      title: 'Story Description',
      type: 'text',
    }),
    defineField({
      name: 'representationDescription',
      title: 'Representation Description',
      type: 'text',
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo',
    },
  },
})
