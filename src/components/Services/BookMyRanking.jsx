import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { BlackButton } from "../mui/blackButton";
import StarIcon from "@mui/icons-material/Star";
const BookMyRanking = () => {
  return (
    <Box>
      <Box
        m={4}
        px={2}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-start" }}
        alignItems="center"
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
            padding: 0,
            mr: 2,
          }}
        >
          <NorthWestIcon sx={{ color: "primary.main" }} />
        </Button>
        <Typography variant="body1" fontWeight="medium">
          Back
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: 10,
          backgroundColor: "secondary.main",
          p: { xs: 3, md: 4 },
          border: 1,
          boxShadow: "0 4px 0 #000",
        }}
      >
        <Grid container justifyContent="space-evenly">
          {/* left section */}
          <Grid item xs={12} md={6}>
            <StarIcon
              sx={{
                color: "primary.main",
                minWidth: "40px",
                height: "40px",
                mr: 4,
              }}
            />
            <Typography
              sx={{
                display: "inline-block",
                bgcolor: "primary.main",
                borderRadius: 2,
                px: 1,
              }}
              variant="h3"
              maxWidth={300}
            >
              Search engine optimization
            </Typography>
          </Grid>
          {/* right section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: { xs: "100%", md: 800 } }}>
              <Typography variant="body1" sx={{ pb: 4, color: "white" }}>
                At Positivus, we thrive on innovation and collaboration. We're
                always looking for passionate individuals to join our team and
                help businesses grow. Ready to make an impact? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Dolores, aut.
              </Typography>

              <BlackButton
                width={"100%"}
                bgcolor={"white"}
                textColor={"black"}
                label={"Start My SEO Journey"}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BookMyRanking;
