import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactCardWidget',
  title: 'Contact Card Widget',
  type: 'object',
  fields: [
    defineField({
      name: 'placeholder',
      type: 'string',
      hidden: true,
      description: 'This widget just displays the contact card. No configuration needed.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Card Widget',
      }
    },
  },
})
