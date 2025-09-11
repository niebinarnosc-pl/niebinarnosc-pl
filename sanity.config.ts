import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

import blockContent from './sanity/schemas/blockContent'
import story from './sanity/schemas/story'
import definition from './sanity/schemas/definition'
import representation from './sanity/schemas/representation'
import author from './sanity/schemas/author'
import page from './sanity/schemas/page'

const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET;
const netlifyId = import.meta.env.PUBLIC_SANITY_STUDIO_NETLIFY_ID;
const buildHookId = import.meta.env.PUBLIC_SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID;

if (!projectId || !dataset) {
  throw new Error(
    "Missing PUBLIC_SANITY_STUDIO_PROJECT_ID or PUBLIC_SANITY_STUDIO_DATASET environment variables. " +
    "Make sure to set them in your .env file or environment."
  );
}

export default defineConfig({
  name: 'default',
  title: 'niebinarnosc.pl',

  projectId,
  dataset,

  plugins: [
    structureTool({
    }),
    visionTool(),
    media(),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'Netlify deploys',
            sites: [
              {
                title: 'niebinarnosc.pl',
                apiId: netlifyId,
                buildHookId: buildHookId,
                name: 'niebinarnosc-pl',
                url: 'https://niebinarnosc.pl',
              }
            ]
        })
      ]
    })
  ],

  schema: {
    types: [
      page,
      story,
      definition,
      representation,
      author,
      blockContent,
    ],
  },
})
