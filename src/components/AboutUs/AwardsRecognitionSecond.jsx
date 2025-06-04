import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { BlackButton } from "../mui/blackButton";

const AwardsRecognitionSecond = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 10,
        m: 4,
        p: { xs: 3, md: 4 },
        border: 1,
        boxShadow: "0 4px 0 #000",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{ height: "100%" }}
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 700,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Join Our Team
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              At Positivus, we thrive on innovation and collaboration. We're
              always looking for passionate individuals to join our team and
              help businesses grow. Ready to make an impact? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolores, aut.
            </Typography>
            <BlackButton label={"Explore Careers"} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/AboutUsHero.png" // Replace with your actual SVG/image
            alt="Join Team Illustration"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AwardsRecognitionSecond;
