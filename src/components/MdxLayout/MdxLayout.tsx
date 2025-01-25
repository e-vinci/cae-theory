import Header from "@/components/Header/Header";

import { Frontmatter, SiteMetaData } from "@/types";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // Import Prism CSS
import "./code-block.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

interface MdxLayoutProps {
  children: React.ReactNode;
  frontmatter?: Frontmatter;
  siteMetaData: SiteMetaData;
}

/**
 * By default there is some padding around the content. See later if we want to change this
 * @param param0
 * @returns
 */
const MdxLayout = ({ children, siteMetaData }: MdxLayoutProps) => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteMetaData={siteMetaData} />

        <Container style={{ padding: "1rem", wordWrap:"break-word" }}>{children}</Container>
        <ScrollToTop />
      </ThemeProvider>
   
  );
};

export default MdxLayout;
