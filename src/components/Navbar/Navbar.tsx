import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SiteMetaData } from "@/types";

import { useTheme } from "@mui/material/styles";

interface NavbarProps {
  siteMetaData: SiteMetaData;
}

const Navbar = ({ siteMetaData }: NavbarProps) => {
  const theme = useTheme();
  const [anchorEls, setAnchorEls] = useState<{
    [key: string]: HTMLElement | null;
  }>({});

  const handleMenu = (
    event: React.MouseEvent<HTMLElement>,
    linkName: string
  ) => {
    setAnchorEls((prev) => ({ ...prev, [linkName]: event.currentTarget }));
  };

  const handleClose = (linkName: string) => {
    setAnchorEls((prev) => ({ ...prev, [linkName]: null }));
  };

  return (
    <AppBar
      position="static"
      sx={{ color: theme.palette.primary.contrastText }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {siteMetaData.title}
        </Typography>
        {siteMetaData.menuLinks.map((link) => (
          <div key={link.name}>
            {link.subMenu ? (
              <>
                {link.link ? (
                  <Link href={link.link} passHref>
                    <Button
                      color="inherit"
                      onClick={(event) => handleMenu(event, link.name)}
                      sx={{ color: theme.palette.primary.contrastText }}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    color="inherit"
                    onClick={(event) => handleMenu(event, link.name)}
                    sx={{ color: theme.palette.primary.contrastText }}
                  >
                    {link.name}
                  </Button>
                )}
                <Menu
                  key={link.link}
                  anchorEl={anchorEls[link.name]}
                  open={Boolean(anchorEls[link.name])}
                  onClose={() => handleClose(link.name)}
                  color="inherit"
                >
                  {link.subMenu.map((subLink) => (
                    <MenuItem
                      key={subLink.name}
                      onClick={() => handleClose(link.name)}
                    >
                      <Link href={subLink.link} passHref>
                        <Button color="inherit">{subLink.name}</Button>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Link href={link.link} passHref>
                <Button
                  color="inherit"
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  {link.name}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
