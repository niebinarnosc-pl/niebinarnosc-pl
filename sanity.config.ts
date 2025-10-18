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
import siteSettings from './sanity/schemas/siteSettings'
import link from './sanity/schemas/objects/link'
import socialLink from './sanity/schemas/objects/socialLink'
import headerNavLink from './sanity/schemas/objects/headerNavLink'
import homeNavLink from './sanity/schemas/objects/homeNavLink'
import homeNavRow from './sanity/schemas/objects/homeNavRow'
import contactCardWidget from './sanity/schemas/objects/contactCardWidget'
import representationHeaderWidget from './sanity/schemas/objects/representationHeaderWidget'
import contentListing from './sanity/schemas/objects/contentListing'

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
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              listItem => !['siteSettings'].includes(listItem.getId() || '')
            )
          ])
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
      // singletons
      siteSettings,
      // documents
      page,
      story,
      definition,
      representation,
      author,
      // objects
      blockContent,
      link,
      socialLink,
      headerNavLink,
      homeNavLink,
      homeNavRow,
      contactCardWidget,
      representationHeaderWidget,
      contentListing,
    ],
  },
})
