import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypePrism from 'rehype-prism-plus'

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: false },
    description: { type: "string", required: false },
    date: { type: "string", required: false },
  },
  contentType: "mdx",
}));

export default makeSource({
  contentDirPath: "src/mdxPages",
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});
