import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'headerNavLink',
  title: 'Header Nav Link',
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
      description: 'Icon for the mobile navigation drawer.',
      options: {
        list: [
            'arrow-right', 'chart-relationship', 'close', 'email', 'identification',
            'logo-facebook', 'logo-instagram', 'logo-twitter', 'menu', 'notebook',
            'user-simulation', 'voice-activate'
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
