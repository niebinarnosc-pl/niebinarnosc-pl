import { graphql, useStaticQuery } from "gatsby";

export default function useLinks() {
    return Object.fromEntries(useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                sameAs {
                    name
                    url
                }
            }
        }
    }
    `).site.siteMetadata.sameAs.map(link => [link.name, link.url]))
}