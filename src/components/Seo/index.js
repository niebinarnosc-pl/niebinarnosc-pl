import React from "react";
import {graphql, useStaticQuery} from "gatsby";

export default function Seo({title, description, ogImage, addTitleTemplate = false, landingPage = false, location: {pathname}, pageContext}) {
    const data = useStaticQuery(query)
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        fullName,
        sameAs
    } = {...data.site.siteMetadata}
    if (title && addTitleTemplate)
      title = titleTemplate.replace("%s", title)
    const seo = {
        fullName,
        title: title || defaultTitle,
        defaultTitle: defaultTitle,
        description: description || defaultDescription,
        defaultDescription: defaultDescription,
        siteUrl: siteUrl,
        url: `${siteUrl}${pathname}`,
        logo: `${siteUrl}/images/logo.svg`,
        locale: 'pl-PL',
        siteLanguage: 'pl',
        ogLanguage: 'pl_PL',
        ogImage: ogImage ? `${siteUrl}/og-images/${ogImage}` : `${siteUrl}/og-images/default.png`,
        sameAs: sameAs.map(link => link.url)
    }

    const schemaOrgLandingPage = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: seo.fullName,
      url: seo.siteUrl,
    }

    return (
        <>
            {seo.siteLanguage && <html lang={seo.siteLanguage}/>}
            <link rel="icon" href="/favicon-32x32.png" type="image/png"/>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
            {seo.locale && <meta httpEquiv="Content-Language" content={seo.locale}/>}
            <meta property="og:site_name" content={seo.defaultTitle}/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta charSet={"utf-8"}/>
            {seo.url && <link rel="canonical" href={seo.url}/>}
            {seo.url && <meta property="og:url" content={seo.url}/>}
            {seo.title && <title>{seo.title}</title>}
            {seo.title && <meta property="og:title" content={seo.title}/>}
            {seo.description && <meta name="description" content={seo.description}/>}
            {seo.description && <meta property="og:description" content={seo.description}/>}
            {seo.ogLanguage && <meta property="og:locale" content={seo.ogLanguage}/>}
            <meta property="og:type" content="website"/>
            {landingPage && <script type="application/ld+json">{JSON.stringify(schemaOrgLandingPage)}</script>}
            {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
            {seo.ogImage && seo.title && <meta property="og:image:alt" content={seo.title} />}
        </>
    )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        fullName
        sameAs {
          name
          url
        }
      }
    }
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`