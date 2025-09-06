require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    fullName: `niebinarnosc.pl`,
    title: `niebinarnosc.pl - polska strona o niebinarności, tworzona przez osoby niebinarne`,
    titleTemplate: "%s - niebinarnosc.pl",
    description: "Dowiedz się, czym są niebinarne tożsamości płciowe. Poznaj historię niebinarności oraz opowieści osób niebinarnych.",
    siteUrl: `https://niebinarnosc.pl`,
    contactFormUrl: "https://forms.gle/TtUto7L4xXnts4Lg6",
    sameAs: [
      {name: "facebook", url: "https://www.facebook.com/niebinarnoscpl"},
      {name: "instagram", url: "https://www.instagram.com/niebinarnosc.pl/"},
    ]
  },
  plugins: [
    "gatsby-adapter-netlify",
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: `niebinarnosc.pl Content Manager`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_MEASUREMENT_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true
        },
      },
    },
    "gatsby-plugin-image", 
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `niebinarnosc.pl`,
        short_name: `niebinarnosc.pl`,
        description: `Polska strona o niebinarności, tworzona przez osoby niebinarne.`,
        lang: 'pl',
        start_url: `/`,
        background_color: `#f7f2f9`,
        theme_color: `#61008f`,
        display: `standalone`,
        icons: [
          {
            "src": "icons/icon-maskable-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-256x256.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "icons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        cache_busting_mode: `none`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/icons*`]
        }
      }
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              removeAccents: true
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "definitions",
        "path": "./content/definitions/"
      },
      __key: "definitions"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "stories",
        "path": "./content/stories/"
      },
      __key: "stories"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "history",
        "path": "./content/history/"
      },
      __key: "history"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "representation",
        "path": "./content/representation/"
      },
      __key: "representation"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "guide",
        "path": "./content/guide/"
      },
      __key: "guide"
    }
  ]
};