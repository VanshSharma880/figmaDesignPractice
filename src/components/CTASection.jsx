import { Box, Grid, Typography } from "@mui/material";
import { BlackButton } from "./mui/blackButton";

const CTASection = ({ bgColor = "tertiary.main" }) => {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: 10,
        p: { xs: 4, md: 8 },
        mt: 8,
        position: "relative",
        overflow: "visible",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Let’s make things happen
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </Typography>

            <BlackButton label="Get your free proposal" />
          </Box>
        </Grid>

        {/* Image Section for Mobile */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "block", md: "none" } }}>
          <Box
            component="img"
            src="/assets/CTA.svg"
            alt="Hero Illustration"
            sx={{
              width: "100%",
              maxWidth: 350,
              mx: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>

      <Box
        component="img"
        src="/assets/CTA.svg"
        alt="Hero Illustration"
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: -40,
          right: 40,
          width: "100%",
          maxWidth: 350,
        }}
      />
    </Box>
  );
};

export default CTASection;
