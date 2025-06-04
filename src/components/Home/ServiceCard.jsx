import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Service Card Component
function ServiceCard({
  title,
  imageName,
  bgcolor = "tertiary.main",
  textBgColor,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: bgcolor,
        border: 1,
        borderRadius: "24px",
        p: { xs: 2, sm: 3, md: 4 },
        boxShadow: "0 4px 0 #000",
        width: "500px",
        minHeight: { xs: "auto", md: 200 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Left Side */}
      <Box flex={1}>
        <Typography
          sx={{
            display: "inline-block",
            bgcolor: textBgColor,
            borderRadius: 2,
            px: 1,
          }}
          variant="h4"
          display="inline"
        >
          {title}
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
          src={`/assets/${imageName}.svg`}
          alt={`${title} Illustration`}
          style={{
            width: "100%",
            maxWidth: 200,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

// Service Data
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
];

// Grid Component
export default function ServiceCardGrid() {
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
          <ServiceCard
            title={service.title}
            imageName={service.imageName}
            bgcolor={service.bgcolor}
            textBgColor={service.textBgColor}
          />
        </Grid>
      ))}
    </Grid>
  );
}
