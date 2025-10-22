import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'niebinarnosc.pl',
    }),
    defineField({
      name: 'logo',
      title: 'Logo (Small)',
      type: 'image',
    }),
    defineField({
      name: 'logoFull',
      title: 'Logo (Full)',
      type: 'image',
    }),
    defineField({
      name: 'placeholderImage',
      title: 'Default Placeholder Image',
      type: 'image',
      description: 'Default image for content that does not have its own image.',
    }),
    defineField({
      name: 'defaultSocialImage',
      title: 'Default Social Sharing Image',
      type: 'image',
      description: 'Default image for social sharing (Open Graph), if a page does not have its own.',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    defineField({
      name: 'headerNavLinks',
      title: 'Header Navigation Links',
      type: 'array',
      of: [{type: 'headerNavLink'}],
    }),
    defineField({
      name: 'homeNavRows',
      title: 'Home Page Navigation Rows',
      type: 'array',
      of: [{type: 'homeNavRow'}],
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Site Settings',
      }
    },
  },
})
