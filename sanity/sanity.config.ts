import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schema'

export default defineConfig({
  name: 'default',
  title: 'niebinarnosc.pl',

  projectId: 'YOUR_PROJECT_ID', // Replace with your project ID
  dataset: 'production', // Or your desired dataset

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
