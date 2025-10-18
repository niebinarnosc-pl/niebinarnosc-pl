import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'representationHeaderWidget',
  title: 'Representation Page Header Widget',
  type: 'object',
  fields: [
    defineField({
      name: 'suggestionFormUrl',
      title: 'Suggestion Form URL',
      type: 'url',
      description: 'URL to the Google Form for suggesting articles.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Representation Page Header Widget',
      }
    },
  },
})
