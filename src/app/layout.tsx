import "./code-block.css";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // Import Prism CSS
import { SiteMetaData } from "@/types";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import "./global.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "CAE Course",
  description: "Course materials for CAE",
};

const siteMetaData: SiteMetaData = {
  version: "", // "2.0.0",
  title: "CAE",
  description: "siteDescription",
  url: "siteURL",
  youtubeUrl: "youtubeUrl",
  authorEmail: "authorEmail",
  facebookUrl: "facebookUrl",
  instagramUrl: "instagramUrl",
  menuLinks: [
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
        { name: "Intégration Continue", link: "/quality/ci" },
        { name: "Tests e2e", link: "/quality/e2e" },
      ],
    },
    {
      name: `About`,
      link: `/about`,
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const faviconUrl = `${basePath}/favicon.svg`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={faviconUrl}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <div className="relative flex min-h-screen flex-col">
          <Header siteMetaData={siteMetaData} />
          <main className="flex-1">
            <div className="container max-w-7xl mx-auto p-4">
              {children}
            </div>
          </main>
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
