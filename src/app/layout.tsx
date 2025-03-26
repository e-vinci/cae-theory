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
      name: `Intro`,
      link: `/intro`,
    },
    {
      name: `Qualité`,
      link: ``,
      subMenu: [
        { name: "Qualité générale", link: "/quality/general" },
        { name: "Qualité du frontend", link: "/quality/frontend" },
        { name: "Qualité de l'API", link: "/quality/api" },
        { name: "Intégration Continue", link: "/quality/ci" },
        { name: "Tests e2e", link: "/quality/e2e" },
      ],
    },
    {
      name: "Itération 2",
      link: "",
      subMenu: [
        { name: "Gestion des environnements", link: "/iteration2/general" },
        { name: "Conteneurisation", link: "/iteration2/containerization" },
        { name: "Déploiement", link: "/iteration2/deployment" },
        { name: "Gestion des images", link: "/iteration2/images" },
      ],
    },
    {
      name: "Itération 3",
      link: "",
      subMenu: [
        { name: "Gestion de la production", link: "/iteration3/production" },
        { name: "Gestion des logs & exceptions", link: "/iteration3/logs" },
        {
          name: "Gestion de transactions et de la concurrence",
          link: "/iteration3/concurrency",
        },
      ],
    },
    {
      name: "Itération 4",
      link: "",
      subMenu: [
        { name: "🍬 Pour aller plus loin ?", link: "/iteration4/bonus" },
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
