import "./code-block.css";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // Import Prism CSS
import { Box, Container } from "@mui/material";
import "@fontsource/roboto";
import { SiteMetaData } from "@/types";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { ClientThemeProvider } from "@/components/ClientThemeProvider/ClientThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Footer from "@/components/Footer/Footer";

const siteMetaData: SiteMetaData = {
  version: "", // "2.0.0",
  title: "CAE",
  description: "siteDescription",
  url: "siteURL",
  youtubeUrl: "youtubeUrl",
  authorEmail: "raphael.baroni@vinci.be",
  facebookUrl: "facebookUrl",
  instagramUrl: "instagramUrl",
  menuLinks: [
    {
      name: `Home`,
      link: `/`,
    },
    {
      name: `Partie 1`,
      link: ``,
      subMenu: [
        { name: "Introduction", link: "/part1/intro" },
        { name: "Qualité générale", link: "/part1/general" },
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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const faviconUrl = `${basePath}/favicon.svg`;

  return (
    <AppRouterCacheProvider>
      <ClientThemeProvider>
        <html>
          <head>
            <title>CAE Course</title>
            <link rel="icon" type="image/svg+xml" href={faviconUrl} />
          </head>
          <Box
            component="body" // Utilisation de Box pour remplacer <body>
            sx={{
              display: "flex", // Flexbox pour organiser les enfants
              flexDirection: "column", // Disposition en colonne
              minHeight: "100vh", // Hauteur minimale pour couvrir toute la fenêtre
              margin: 0, // Supprime les marges par défaut
            }}
          >
            <Header siteMetaData={siteMetaData} />

            <Container
              sx={{ padding: "1rem", wordWrap: "break-word", flex: 1 }}
            >
              {children}
            </Container>
            <ScrollToTop />
            <Footer siteMetaData={siteMetaData} />
          </Box>
        </html>
      </ClientThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default RootLayout;
