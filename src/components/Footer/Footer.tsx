"use client";

import { SiteMetaData } from "@/types";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";

interface FooterProps {
  siteMetaData: SiteMetaData;
}

const Footer = ({ siteMetaData }: FooterProps) => {
  const theme = useTheme();
  return (
    <Box component="footer">   
        <Grid
          container
          spacing={2}          
          alignItems="center"
          sx={{
            backgroundColor: theme.palette.primary.main, 
            color: theme.palette.primary.contrastText,
            display: "flex",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Grid size={{ xs: 12, md: 4 }} textAlign="center">
            <Typography variant="body2">
              © {new Date().getFullYear()} - Créé avec Next.js
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "center" },
                alignItems: "center",
                gap: "8px",
              }}
            >
              
              <IconButton
                href={`mailto:${siteMetaData.authorEmail}`} 
                sx={{ color: theme.palette.primary.contrastText }} 
                aria-label="Envoyer un email"
              >
                <MailIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} textAlign="center">
            <Typography variant="body2">
              e-vinci/cae
            </Typography>
          </Grid>
        </Grid>

    </Box>
  );
};

export default Footer;
