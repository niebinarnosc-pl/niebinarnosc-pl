export const getLinkUrl = (link: any): string => {
    if (!link) return '#';

    if (link.linkType === 'External') {
        return link.url || '#';
    }
    if (link.linkType === 'Internal' && link.pageReference?.slug) {
        return `/${link.pageReference.slug}`;
    }
    
    return '#';
}
