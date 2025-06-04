import { Box, Grid, Typography } from "@mui/material";

const CoreValueSecond = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mt: 10 }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: 400 },
          borderRadius: 10,
          bgcolor: "secondary.main",
          overflow: "visible",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ height: "100%" }}
        >
          {/* Image section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: 300, md: "100%" },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src="/assets/CTA.svg"
              alt="Success illustration"
              sx={{
                position: "relative",
                height: { xs: 250, md: 500 },
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Text section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: 600,
                px: { xs: 2, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3" color="white">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptates ea odit aperiam vel. Suscipit fuga quam
                fugiat! Quisquam, et”
              </Typography>
              <Typography variant="body1" sx={{ mt: 3 }} color="white">
                - James Smith, Founder of Positivus
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreValueSecond;
