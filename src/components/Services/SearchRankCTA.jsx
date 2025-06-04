import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { BlackButton } from "../mui/blackButton";

const SearchRankCTA = () => {
  return (
    <Box
      sx={{
        borderRadius: 10,
        m: { xs: 3, md: 4 },
        p: { xs: 3, md: 4 },
        border: 1,
        boxShadow: "0 4px 0 #000",
        minHeight: { xs: "auto", md: 400 },
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: { xs: "100%", md: 650 } }}>
            <Typography variant="h3" gutterBottom>
              Ready to Evaluate your Search Rankings?
            </Typography>

            <Divider sx={{ borderColor: "black", my: 4 }} />

            <Typography variant="body1">
              At Positivus, we thrive on innovation and collaboration. We're
              always looking for passionate individuals to join our team and
              help businesses grow. Ready to make an impact? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolores, aut.
            </Typography>

            <Typography variant="h6" sx={{ py: 4 }}>
              Let's Work together to make your online presence.
            </Typography>

            <BlackButton
              width={"100%"}
              bgcolor={"primary.main"}
              textColor={"black"}
              label={"Start My SEO Journey"}
            />
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/assets/SearchRanks.svg"
            alt="Join Team Illustration"
            sx={{
              width: { xs: "100%", md: 400 },
              maxHeight: { xs: 300, md: 600 },
              objectFit: "contain",
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchRankCTA;
