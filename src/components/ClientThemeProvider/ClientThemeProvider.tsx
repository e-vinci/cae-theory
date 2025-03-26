"use client";

import { createTheme, useTheme } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  colorSchemes: {
    dark: true,
  },
});


interface ClientThemeProviderProps {
  children: React.ReactNode;
}

const ClientThemeProvider = ({ children }: ClientThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DynamicGlobalStyles />
      {children}
    </ThemeProvider>
  );
};


const DynamicGlobalStyles = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        blockquote: {
          borderLeft: `5px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.action.hover,
          padding: "0.5em",
          margin: "1em 0",
        },
        table: {
          width: "100%",
          borderCollapse: "collapse",
          overflowX: "auto",
          display: "block",
        },
        th: {
          border: `1px solid ${theme.palette.divider}`,
          padding: "8px",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontWeight: "bold",
        },
        td: {
          border: `1px solid ${theme.palette.divider}`,
          padding: "8px",
        },
        "tr:nth-of-type(even)": {
          backgroundColor: theme.palette.action.hover,
        },
        "tr:hover": {
          backgroundColor: theme.palette.action.selected,
        },
      }}
    />
  );
};

export { theme, ClientThemeProvider };
