import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Service Data
const serviceData = [
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
  },
  {
    title: "Content Marketing",
    imageName: "Service4",
    bgcolor: "tertiary.main",
    textBgColor: "primary.main",
  },
  {
    title: "Email Campaigns",
    imageName: "Service5",
    bgcolor: "primary.main",
    textBgColor: "white",
  },
  {
    title: "Conversion Rate Optimization",
    imageName: "Service6",
    bgcolor: "secondary.main",
    textBgColor: "primary.main",
  },
  {
    title: "Search Engine Optimization",
    imageName: "Service1",
    bgcolor: "tertiary.main",
    textBgColor: "primary.main",
  },
];

const OtherServicesCard = () => {
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
              bgcolor: "tertiary.main",
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
              <Typography variant="h3">{service.title}</Typography>
              <Box
                mt={10}
                display="flex"
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="center"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    minWidth: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    padding: 0,
                    mr: 2,
                  }}
                >
                  <ArrowOutwardIcon sx={{ color: "#c5ff61" }} />
                </Button>
                <Typography variant="body1" fontWeight="medium">
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
                alt={"Service Illustration"}
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
};

export default OtherServicesCard;
