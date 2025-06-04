import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const stats = [
  { value: "200%", label: "increase in organic traffic" },
  { value: "150%", label: "rise in online sales" },
  { value: "75%", label: "reduction in cost-per-click (CPC)" },
  { value: "300%", label: "improvement in conversion rate" },
];

const FeaturedSuccess = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        my: 5,
        color: "white",
        p: 6,
        borderRadius: 10,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography
                sx={{
                  bgcolor: "primary.main",
                  color: "black",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "12px",
                  display: "inline-block",
                  fontSize: { xs: "1.5rem", md: "2.125rem" },
                }}
                variant="h3"
              >
                Featured Success Story
              </Typography>
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Scaling Success for a <br />
              Leading E-Commerce Brand
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 500, my: 3 }}>
              Through a comprehensive SEO and PPC strategy, we helped this
              e-commerce brand increase visibility, drive traffic, and boost
              sales.
            </Typography>

            <Box display="flex" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  padding: 0,
                  mr: 2,
                }}
              >
                <ArrowOutwardIcon sx={{ color: "black" }} />
              </Button>
              <Typography
                color="primary.main"
                variant="body1"
                fontWeight="medium"
              >
                Read
              </Typography>
            </Box>
          </Grid>

          {/* Right Column */}
          <Box mx={"auto"} maxWidth={"500px"}>
            <Grid container rowSpacing={4} columnSpacing={4}>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{ borderRadius: 6, height: "100%", bgcolor: "white" }}
                  >
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold">
                        200%
                      </Typography>
                      <Typography variant="body1">
                        increase in organic traffic
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedSuccess;
