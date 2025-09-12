import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. Facebook',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'logo-facebook'},
          {title: 'Instagram', value: 'logo-instagram'},
          {title: 'Twitter', value: 'logo-twitter'},
          {title: 'Email', value: 'email'},
        ],
      },
    }),
  ],
})
