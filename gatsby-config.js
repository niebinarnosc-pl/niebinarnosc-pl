require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `niebinarnosc.pl - polska strona o niebinarności, tworzona przez osoby niebinarne`,
    titleTemplate: "%s - niebinarnosc.pl",
    description: "",
    siteUrl: `https://niebinarnosc-pl.netlify.app`
  },
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-netlify-cms`,
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
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
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
    }
  ]
};