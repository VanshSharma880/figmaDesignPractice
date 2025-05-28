// import React from "react";
// import { Card, CardContent, Typography, Button, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { CallMade } from "@mui/icons-material";
// const StyledCard = ({ bgcolor }) => ({
//   height: "200px",
//   backgroundColor: bgcolor || "#f8f9fa",
//   border: "none",
//   borderRadius: "16px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   padding: "24px",
//   cursor: "pointer",
//   transition: "transform 0.2s ease-in-out",
//   "&:hover": {
//     transform: "translateY(-4px)",
//   },
// });

// const ServiceCard = ({ title, icon: Icon, bgcolor, textColor = "#000" }) => {
//   const isWhiteText = textColor === "white";

//   return (
//     <StyledCard bgcolor={bgcolor}>
//       <CardContent sx={{ p: 0 }}>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//           <Box
//             sx={{
//               backgroundColor: "#fff",
//               borderRadius: "50%",
//               width: 40,
//               height: 40,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               mr: 2,
//             }}
//           >
//             <Icon size={20} />
//           </Box>
//           <Typography
//             variant="h6"
//             sx={{ fontWeight: "bold", color: textColor }}
//           >
//             {title}
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//           }}
//         >
//           <Button
//             sx={{
//               color: textColor,
//               textTransform: "none",
//               p: 0,
//               minWidth: "auto",
//             }}
//             endIcon={<CallMade size={16} color={textColor} />}
//           >
//             Learn more
//           </Button>
//           <Box
//             sx={{
//               width: 80,
//               height: 60,
//               backgroundColor: isWhiteText ? "#444" : "#e0e0e0",
//               borderRadius: 1,
//             }}
//           />
//         </Box>
//       </CardContent>
//     </StyledCard>
//   );
// };

// export default ServiceCard;

import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function ServiceCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "tertiary.main",
        borderRadius: "24px",
        p: { xs: 2, sm: 3, md: 4 },
        boxShadow: "0 4px 0 #000",
        maxWidth: 600,
        width: "100%",
        mx: "auto",
        minHeight: { xs: "auto", md: 200 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Left Side */}
      <Box flex={1}>
        <Box
          sx={{
            display: "inline-block",
            bgcolor: "primary.main",
            borderRadius: 2,
            px: 1,
          }}
        >
          <Typography variant="h4" display="inline">
            Search engine
          </Typography>
        </Box>
        <br />
        <Box
          sx={{
            display: "inline-block",
            bgcolor: "#c5ff61",
            borderRadius: 2,
            px: 1,
          }}
        >
          <Typography variant="h4" display="inline">
            optimization
          </Typography>
        </Box>

        <Box
          mt={4}
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
              "&:hover": { backgroundColor: "#333" },
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
          src="/assets/SearchEngine.svg"
          alt="SEO Illustration"
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

export default function ServiceCardGrid() {
  return (
    <Grid container spacing={6} justifyContent={"center"}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={index}
          display="flex"
          justifyContent="center"
        >
          <ServiceCard />
        </Grid>
      ))}
    </Grid>
  );
}
