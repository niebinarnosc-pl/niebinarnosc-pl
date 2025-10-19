import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alertCardWidget',
  title: 'Alert Card Widget',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
    defineField({
      name: 'buttonTitle',
      title: 'Button Title',
      type: 'string',
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Alert Card Widget',
      }
    },
  },
})
