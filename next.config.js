const slug = require('remark-slug');
const mdxTableOfContents = require('./tocModule');

const isProd = (process.env.NODE_ENV || 'production') === 'production';
// const repoName = '/gh-static-docs';
console.log('ENV:', process.env.NODE_ENV);

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [slug],
    compilers: [mdxTableOfContents],
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: '/gh-static-docs',
});
