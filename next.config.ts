import { withContentlayer } from "next-contentlayer2";
export default withContentlayer({
  output: "export",
  basePath: process.env.BASE_PATH,
});
