import { getMDXComponent } from "next-contentlayer2/hooks";

import PathViewer from "@/components/PathViewer/PathViewer";
import PathViewerItem from "@/components/PathViewer/PathViewerItem";
import InternalPageMenu from "@/components/InternalPageMenu/InternalPageMenu";
import InternalPageMenuItem from "@/components/InternalPageMenu/InternalPageMenuItem";
import InternalPageTitle from "@/components/InternalPageTitle/InternalPageTitle";
import LinkFile from "@/components/LinkFile/LinkFile";
import PlantUML from "@/components/PlantUML/PlantUML";
import Image from "@/components/Image/Image";

const shortcodes = {
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

interface MdxContentProps {
  code: string;
}

/**
 * Renders the MDX content. This component is used to render the MDX content
 * and can be called from a server-side rendered component.
 *
 * @param code The MDX code that should be rendered.
 * @returns The rendered MDX content.
 *
 */
const MdxContent = ({ code }: MdxContentProps) => {
  const Component = getMDXComponent(code);
  return <Component components={shortcodes} />;
};

export default MdxContent;
