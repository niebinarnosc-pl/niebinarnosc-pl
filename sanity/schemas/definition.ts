import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'definition',
  title: 'Definition',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'English Title',
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
      name: 'fullPhoto',
      title: 'Full Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'A higher number means it appears first in the list.',
      initialValue: 0,
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
      subtitle: 'titleEn',
    },
  },
})
