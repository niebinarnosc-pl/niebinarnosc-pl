export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
    ...,
    headerNavLinks[]{
        ...,
        link{
            ...,
            pageReference->{
                "slug": slug.current
            }
        }
    },
    homeNavRows[]{
        ...,
        links[]{
            ...,
            link{
                ...,
                pageReference->{
                    "slug": slug.current
                }
            }
        }
    }
}`;
