import { Box, Grid, Typography } from "@mui/material";

const HeroSection = ({ title, subtitle, image }) => {
  return (
    <Box
      sx={{
        backgroundColor: "tertiary.main",
        borderRadius: 10,
        p: { xs: 4, md: 6 },
        maxWidth: "100%",
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Image section */}
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
              src={image}
              alt="Success illustration"
              sx={{ width: "100%", maxHeight: 400, objectFit: "contain" }}
            />
          </Box>
        </Grid>

        {/* Text section */}
        <Grid item xs={12} md={6} alignContent={"center"}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h1" fontWeight="bold" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ py: 4 }}>
              {subtitle}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
