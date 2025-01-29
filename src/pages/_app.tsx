import type { AppProps } from "next/app";
import "./code-block.css";
import "prism-themes/themes/prism-vsc-dark-plus.css"; // Import Prism CSS
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "@mui/material";

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

/**
 * Temporary component to deal with global styles
 * @param
 * @returns
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          table: {
            width: '100%',
            borderCollapse: 'collapse',
          },
          th: {
            border: `1px solid ${theme.palette.divider}`,
            padding: '8px',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontWeight: 'bold',
          },
          td: {
            border: `1px solid ${theme.palette.divider}`,
            padding: '8px',
          },
          'tr:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
          },
          'tr:hover': {
            backgroundColor: theme.palette.action.selected,
          },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
