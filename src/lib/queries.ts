export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
    ...,
    defaultSocialImage,
    placeholderImage,
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
