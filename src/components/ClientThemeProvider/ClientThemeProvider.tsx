"use client";

import { createTheme } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

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

// Ensure this import is correct

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

const ClientThemeProvider = ({ children }: ClientThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
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
      {children}
    </ThemeProvider>
  );
};

export { theme, ClientThemeProvider };
