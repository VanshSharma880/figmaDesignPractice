import { Box, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamSection = () => {
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 12, md: 4 }}>
            <Box
              sx={{
                position: "relative",
                mx: "auto",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                border: 1,
                borderRadius: "24px",
                p: { xs: 1, sm: 1, md: 3 },
                boxShadow: "0 4px 0 #000",
                maxWidth: 300,
                minHeight: { xs: "auto", md: 200 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {/* LinkedIn Icon (Top Right) */}
              <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                <IconButton target="_blank" sx={{ color: "black" }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>

              {/* Content */}
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h4">John Smith</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    CEO and Founder
                  </Typography>
                </Box>

                <Box
                  mt={4}
                  py={2}
                  borderTop={1}
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  alignItems="center"
                >
                  <Typography variant="body1">
                    3+ years of experience in paid search advertising. Skilled
                    in campaign management and performance analysis.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
