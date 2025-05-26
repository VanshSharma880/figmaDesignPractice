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

import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function ServiceCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#f7f7f7",
        borderRadius: "24px",
        p: 4,
        boxShadow: "8px 8px 0 #000",
        maxWidth: 500,
        width: "100%",
        minHeight: 200,
      }}
    >
      {/* Left Side */}
      <Box>
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

        <Box mt={4} display="flex" alignItems="center">
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

      {/* Right Side (Image or Illustration) */}
      <Box sx={{ ml: 2 }}>
        <img
          src="/assets/SearchEngine.svg"
          alt="SEO Illustration"
          style={{ width: 200, height: 200, objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
}
