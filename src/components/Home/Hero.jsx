import { Box, Container, Typography, Grid } from "@mui/material";
import { BlackButton } from "../mui/blackButton";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                }}
              >
                Navigating the digital landscape for success
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                }}
              >
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </Typography>

              <BlackButton label="Book a consultation" />
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Box
                component="img"
                src="/assets/IllustrationHero.svg"
                alt="Hero Illustration"
                sx={{ width: "100%", maxWidth: 500 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
