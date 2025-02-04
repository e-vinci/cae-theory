"use client";
import { getMDXComponent } from "next-contentlayer2/hooks";
import PageTransition from "@/components/PageTransition/PageTransition";

import PathViewer from "@/components/PathViewer/PathViewer";
import PathViewerItem from "@/components/PathViewer/PathViewerItem";
import InternalPageMenu from "@/components/InternalPageMenu/InternalPageMenu";
import InternalPageMenuItem from "@/components/InternalPageMenu/InternalPageMenuItem";
import InternalPageTitle from "@/components/InternalPageTitle/InternalPageTitle";
import LinkFile from "@/components/LinkFile/LinkFile";
import PlantUML from "@/components/PlantUML/PlantUML";
import Image from "@/components/Image/Image";

const components = {
  Image,
  PlantUML,
  PathViewer,
  PathViewerItem,
  InternalPageMenu,
  InternalPageMenuItem,
  InternalPageTitle,
  LinkFile,
  h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-4xl font-bold mt-8 mb-4 pl-4 border-l-4 border-blue-500">{children}</h1>,
  h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-3xl font-semibold mt-6 mb-3 pl-4 border-l-4 border-blue-200">{children}</h2>,
  h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-2xl font-medium mt-4 mb-2 pl-4 border-l-4 border-primary/60">{children}</h3>,
  p: ({ children }: { children: React.ReactNode }) => <p className="my-4">{children}</p>,
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="text-blue-500 hover:text-blue-600 underline">
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
  ol: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
  li: ({ children }: { children: React.ReactNode }) => <li className="my-1">{children}</li>,
};

interface MdxContentProps {
  code: string;
}

/**
 * Renders the MDX content. This component is used to render the MDX content
 * and can be called from a server-side rendered component.
 *
 * @param code The MDX code that should be rendered.
 * @returns The rendered MDX content.
 */
const MdxContent = ({ code }: MdxContentProps) => {
  const Component = getMDXComponent(code);

  return (
    <PageTransition>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <Component components={components} />
      </article>
    </PageTransition>
  );
};

export default MdxContent;
