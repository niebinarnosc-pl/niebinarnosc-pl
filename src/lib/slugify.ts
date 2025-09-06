// A simple slugify function based on the old project's implementation
import deburr from 'lodash/deburr';

const slugify = (str: string) => {
    if (!str) return '';
    return deburr(str)
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};
export default slugify;
