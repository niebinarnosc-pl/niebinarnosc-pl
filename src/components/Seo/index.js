import React from "react";
import {graphql, useStaticQuery} from "gatsby";

export default function Seo({title, description, addTitleTemplate = false, location: {pathname}}) {
    const {site} = useStaticQuery(query)
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
    } = {...site.siteMetadata}
    if (title && addTitleTemplate)
      title = titleTemplate.replace("%s", title)
    const seo = {
        title: title || defaultTitle,
        defaultTitle: defaultTitle,
        description: description || defaultDescription,
        defaultDescription: defaultDescription,
        siteUrl: siteUrl,
        url: `${siteUrl}${pathname}`,
        locale: 'pl-PL',
        siteLanguage: 'pl',
        ogLanguage: 'pl_PL'
    }


    // const schemaOrgWebPage = {
    //     '@context': 'http://schema.org',
    //     '@type': 'WebPage',
    //     url: siteUrl,
    //     headline,
    //     inLanguage: siteLanguage,
    //     mainEntityOfPage: siteUrl,
    //     description: defaultDescription,
    //     name: defaultTitle,
    //     author: {
    //         '@type': 'Person',
    //         name: author,
    //     },
    //     copyrightHolder: {
    //         '@type': 'Person',
    //         name: author,
    //     },
    //     copyrightYear: '2019',
    //     creator: {
    //         '@type': 'Person',
    //         name: author,
    //     },
    //     publisher: {
    //         '@type': 'Person',
    //         name: author,
    //     },
    //     datePublished: '2019-01-18T10:30:00+01:00',
    //     dateModified: buildTime,
    //     image: {
    //         '@type': 'ImageObject',
    //         url: `${siteUrl}${defaultBanner}`,
    //     },
    // }
    // let schemaArticle = null
    // if (article) {
    //     schemaArticle = {
    //         '@context': 'http://schema.org',
    //         '@type': 'Article',
    //         author: {
    //             '@type': 'Person',
    //             name: author,
    //         },
    //         copyrightHolder: {
    //             '@type': 'Person',
    //             name: author,
    //         },
    //         copyrightYear: '2019',
    //         creator: {
    //             '@type': 'Person',
    //             name: author,
    //         },
    //         publisher: {
    //             '@type': 'Organization',
    //             name: author,
    //             logo: {
    //                 '@type': 'ImageObject',
    //                 url: `${siteUrl}${defaultBanner}`,
    //             },
    //         },
    //         datePublished: node.first_publication_date,
    //         dateModified: node.last_publication_date,
    //         description: seo.description,
    //         headline: seo.title,
    //         inLanguage: siteLanguage,
    //         url: seo.url,
    //         name: seo.title,
    //         image: {
    //             '@type': 'ImageObject',
    //             url: seo.image,
    //         },
    //         mainEntityOfPage: seo.url,
    //     }
    // }

    return (
        <>
            {seo.siteLanguage && <html lang={seo.siteLanguage}/>}
            {/* {alts && Object.entries(alts).map(([lang, route]) => <link key={lang} rel="alternate" href={`${seo.siteUrl}${route}`} hrefLang={lang}/>)} */}
            {/* {alts && alts['pl'] && <link rel="alternate" href={`${seo.siteUrl}${alts['pl']}`} hrefLang="x-default"/>} */}
            {seo.locale && <meta httpEquiv="Content-Language" content={seo.locale}/>}
            <meta property="og:site_name" content={seo.defaultTitle}/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta charSet={"utf-8"}/>
            {/* <meta name="geo.position" content="52.219830, 21,017971"/>
            <meta name="geo.placename" content={seo.defaultTitle}/>
            <meta name="geo.region" content="PL"/> */}
            {seo.url && <link rel="canonical" href={seo.url}/>}
            {seo.url && <meta property="og:url" content={seo.url}/>}
            {seo.title && <title>{seo.title}</title>}
            {seo.title && <meta property="og:title" content={seo.title}/>}
            {seo.description && <meta name="description" content={seo.description}/>}
            {seo.description && <meta property="og:description" content={seo.description}/>}
            {/*{seo.ogLanguage && alts && Object.keys(alts).map(lang => <meta key={lang} property={`og:locale${lang !== seo.siteLanguage ? ":alternate" : ""}`} content={seo.ogLanguage}/>)}*/}
            {/*{article ? <>*/}
            {/*    <meta property="og:type" content="article"/>*/}
            {/*    <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>*/}
            {/*</> : <>*/}
            {/*    <meta property="og:type" content="website"/>*/}
            {/*    <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>*/}
            {/*</>}*/}
            {/*<meta property="og:image" content={image} />*/}
            {/*<meta property="og:image:alt" content={desc} />*/}
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
      }
    }
  }
`