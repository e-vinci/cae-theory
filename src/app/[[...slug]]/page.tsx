import { allPages } from "contentlayer/generated";
import MdxContent from "@/components/MdxContent/MdxContent";

const generateStaticParams = async () => {
  const allParams = allPages.map((page) => ({
    slug: page._raw.flattenedPath.split("/"),
  }));
  allParams.push({ slug: [] });
  return allParams;
};

interface generatedMetadataProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const generateMetadata = async ({ params }: generatedMetadataProps) => {
  const resolvedParams = await params;

  const slug =
    !resolvedParams || !resolvedParams.slug
      ? ""
      : resolvedParams.slug.join("/");

  const page =
    allPages.find((page) => page._raw.flattenedPath === slug) ||
    allPages.find((page) => page._raw.flattenedPath === "");

  if (!page) {
    return { title: "Not found" };
  }
  return { title: page!.title };
};

interface MdxPageLayoutProps {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const MdxPageLayout = async ({ params }: MdxPageLayoutProps) => {
  const resolvedParams = await params;

  const slug =
    !resolvedParams || !resolvedParams.slug
      ? "" // this is the index page
      : resolvedParams.slug.join("/");

  const page = allPages.find((page) => page._raw.flattenedPath === slug);

  return (
    <>
      <MdxContent code={page!.body.code} />
    </>
  );
};

export { generateMetadata, generateStaticParams };

export default MdxPageLayout;
