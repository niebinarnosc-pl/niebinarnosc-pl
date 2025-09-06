import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
