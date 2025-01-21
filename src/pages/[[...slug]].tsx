import Image from "@/components/Image/Image";
import PlantUML from "@/components/PlantUML/PlantUML";
import { GetStaticPaths, GetStaticProps } from "next";
import { allPages } from "contentlayer/generated";
import MdxLayout from "@/components/MdxLayout/MdxLayout";
import { useMDXComponent } from "next-contentlayer2/hooks";

import PathViewer from "@/components/PathViewer/PathViewer";
import PathViewerItem from "@/components/PathViewer/PathViewerItem";
import InternalPageMenu from "@/components/InternalPageMenu/InternalPageMenu";
import InternalPageMenuItem from "@/components/InternalPageMenu/InternalPageMenuItem";
import InternalPageTitle from "@/components/InternalPageTitle/InternalPageTitle";
import LinkFile from "@/components/LinkFile/LinkFile";

import { Frontmatter, SiteMetaData } from "@/types";

const siteMetaData: SiteMetaData = {
  version: "", // "2.0.0",
  title: "siteTitle",
  description: "siteDescription",
  url: "siteURL",
  youtubeUrl: "youtubeUrl",
  authorEmail: "authorEmail",
  facebookUrl: "facebookUrl",
  instagramUrl: "instagramUrl",
  menuLinks: [
    {
      name: `Home`,
      link: `/`,
    },
    {
      name: `Intro`,
      link: `/intro`,
    },
    {
      name: `Qualité`,
      link: `/quality`,
      subMenu: [
        { name: "Qualité générale", link: "/quality/general" },
        { name: "Qualité du frontend", link: "/quality/frontend" },
        { name: "Qualité de l'API", link: "/quality/api" },
        { name: "CI", link: "/quality/ci" },
      ],
    },
    {
      name: "SubMenu",
      link: "",
      subMenu: [
        { name: "Sub1", link: "/sub/one" },
        { name: "Sub2", link: "/sub/two" },
      ],
    },
    {
      name: `About`,
      link: `/about`,
    },
  ],
};

const components = {
  Image,
  PlantUML,
  PathViewer,
  PathViewerItem,
  InternalPageMenu,
  InternalPageMenuItem,
  InternalPageTitle,
  LinkFile,
  // pre: CodeBlock
};

interface PageProps {
  frontmatter: Frontmatter;
  body: string;
}

const Page = ({ frontmatter, body }: PageProps) => {
  const MDXContent = useMDXComponent(body);

  return (
    <MdxLayout frontmatter={frontmatter} siteMetaData={siteMetaData}>
      <MDXContent components={components} />
    </MdxLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPages.map((page) => ({
    params: { slug: page._raw.flattenedPath.split("/") },
  }));

  console.log("PATHS:", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // If params is an empty object, we need to consider that it is the root page
  if (!params || !params.slug) {
    const page = allPages.find((page) => page._raw.flattenedPath === "");
    if (!page)
      return {
        notFound: true,
      };

    return {
      props: {
        frontmatter: page,
        body: page.body.code,
      },
    };
  }

  console.log("CURRENT PARAMS:", params);

  const slug = (params?.slug as string[]).join("/");
  const page = allPages.find((page) => page._raw.flattenedPath === slug);

  if (!page)
    return {
      notFound: true,
    };

  return {
    props: {
      frontmatter: page,
      body: page.body.code,
    },
  };
};

export default Page;
