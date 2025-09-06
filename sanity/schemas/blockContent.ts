import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineArrayMember({
      name: 'columns',
      title: 'Columns',
      type: 'object',
      fields: [
        {
          name: 'left_content',
          title: 'Left Column',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'right_content',
          title: 'Right Column',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'reverse',
          title: 'Reverse column order on desktop',
          type: 'boolean',
          initialValue: false,
        },
      ],
    }),
  ],
})
