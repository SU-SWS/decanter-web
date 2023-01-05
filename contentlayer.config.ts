/* eslint-disable no-underscore-dangle */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
// Remark packages
import remarkGfm from 'remark-gfm';
// Rehype packages
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import remarkCodeTitles from './lib/remark-code-title';

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: '**/*.md*',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    lastUpdatedDate: {
      type: 'date',
      description: 'Last updated date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkGfm,
      remarkCodeTitles,
    ],
    rehypePlugins: [
      [rehypePrismPlus, { ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
});
