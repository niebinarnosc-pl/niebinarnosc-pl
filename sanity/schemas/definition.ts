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
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo',
      subtitle: 'titleEn',
    },
  },
})
