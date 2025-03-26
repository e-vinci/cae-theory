import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, useColorScheme, useTheme } from "@mui/material";

/**
 * A component that toggles between dark and light mode.
 * @returns a DarkLightToggler component that toggles between dark and light mode.
 */
const DarkLightToggler = () => {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  const toggleDarkLight = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  if (!mode) {
    return null;
  }

  return (
    <>
      <IconButton
        onClick={toggleDarkLight}
        aria-label="Toggle dark/light mode"
        sx={{ color: theme.palette.primary.contrastText }}
      >
        {mode === "light" || mode === undefined ? (
          <LightModeIcon />
        ) : (
          <DarkModeIcon />
        )}
      </IconButton>
    </>
  );
};

export default DarkLightToggler;
