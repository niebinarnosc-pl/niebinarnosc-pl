import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeNavLink',
  title: 'Home Nav Link',
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
            'arrow-right', 'chart-relationship', 'close', 'email', 'identification',
            'logo-facebook', 'logo-instagram', 'logo-twitter', 'menu', 'notebook',
            'user-simulation', 'voice-activate'
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: ['yellow', 'purple', 'black'],
        layout: 'radio',
      },
      initialValue: 'yellow',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
