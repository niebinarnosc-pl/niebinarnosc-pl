import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeNavRow',
  title: 'Home Nav Row',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'homeNavLink'}],
    }),
  ],
})
