import "./code-block.css";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // Import Prism CSS
import { Container } from "@mui/material";
import "@fontsource/roboto";
import { SiteMetaData } from "@/types";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { ClientThemeProvider } from "@/components/ClientThemeProvider/ClientThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

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

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <AppRouterCacheProvider>
      <ClientThemeProvider>
        <html>
          <head>
            <title>CAE Course</title>
            <link rel="icon" type="image/svg+xml" href="favicon.svg" />
            </head>
          <body>
            <Header siteMetaData={siteMetaData} />

            <Container style={{ padding: "1rem", wordWrap: "break-word" }}>
              {children}
            </Container>
            <ScrollToTop />
          </body>
        </html>
      </ClientThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default RootLayout;
