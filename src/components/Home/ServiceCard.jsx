import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const serviceData = [
  {
    title: "Search Engine Optimization",
    imageName: "Service1",
    bgcolor: "tertiary.main",
    textBgColor: "primary.main",
  },
  {
    title: "Pay-Per-Click Advertising",
    imageName: "Service2",
    bgcolor: "primary.main",
    textBgColor: "white",
  },
  {
    title: "Social Media Management",
    imageName: "Service3",
    bgcolor: "secondary.main",
    textBgColor: "white",
    learnMore: true,
  },
  {
    title: "Email Marketing",
    imageName: "Service4",
    bgcolor: "tertiary.main",
    textBgColor: "primary.main",
  },
  {
    title: "Content Creation",
    imageName: "Service5",
    bgcolor: "primary.main",
    textBgColor: "white",
  },
  {
    title: "Analytics and Tracking",
    imageName: "Service6",
    bgcolor: "secondary.main",
    textBgColor: "primary.main",
    learnMore: true,
  },
];

export default function ServiceCard() {
  return (
    <Grid container spacing={6} justifyContent={"center"}>
      {serviceData.map((service, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={index}
          display="flex"
          justifyContent="center"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: service.bgcolor,
              border: 1,
              borderRadius: 10,
              p: { xs: 2, sm: 3, md: 4 },
              boxShadow: "0 4px 0 #000",
              width: "600px",
              minHeight: { xs: "auto", md: 220 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Left Side */}
            <Box flex={1}>
              <Typography
                sx={{
                  display: "inline-block",
                  bgcolor: service.textBgColor,
                  borderRadius: 2,
                  p: 1,
                }}
                variant="h4"
              >
                {service.title}
              </Typography>

              <Box
                mt={10}
                display="flex"
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="center"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: service.learnMore ? "white" : "black",
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    padding: 0,
                    mr: 2,
                  }}
                >
                  <ArrowOutwardIcon
                    sx={{ color: service.learnMore ? "black" : "primary.main" }}
                  />
                </Button>
                <Typography
                  variant="body1"
                  fontWeight="medium"
                  color={service.learnMore ? "white" : "black"}
                >
                  Learn more
                </Typography>
              </Box>
            </Box>

            {/* Right Side (Image) */}
            <Box
              sx={{
                mt: { xs: 4, md: 0 },
                ml: { md: 2 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`/assets/${service.imageName}.svg`}
                alt={`${ServiceCard.title} Illustration`}
                style={{
                  width: "100%",
                  maxWidth: 200,
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
