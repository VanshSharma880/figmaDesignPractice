// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
// } from "@mui/material";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// const stats = [
//   { value: "200%", label: "increase in organic traffic" },
//   { value: "150%", label: "rise in online sales" },
//   { value: "75%", label: "reduction in cost-per-click (CPC)" },
//   { value: "300%", label: "improvement in conversion rate" },
// ];

// const FeaturedSuccess = () => {
//   return (
//     <Grid>
//       <Box
//         sx={{
//           bgcolor: "secondary.main",
//           my: 5,
//           color: "white",
//           p: 4,
//           borderRadius: "16px",
//         }}
//       >
//         <Box sx={{ mb: 3 }}>
//           <Typography
//             sx={{
//               bgcolor: "primary.main",
//               color: "black",
//               px: 1.5,
//               py: 0.5,
//               borderRadius: "12px",
//               display: "inline-block",
//               whiteSpace: "nowrap",
//               fontSize: { xs: "1.75rem", md: "2.125rem" },
//             }}
//             variant="h3"
//           >
//             Featured Success Story
//           </Typography>
//         </Box>

//         <Typography variant="h5" fontWeight="bold" gutterBottom>
//           Scaling Success for a <br />
//           Leading E-Commerce Brand
//         </Typography>

//         <Typography variant="body1" sx={{ maxWidth: 500, my: 3 }}>
//           Through a comprehensive SEO and PPC strategy, we helped this
//           e-commerce brand increase visibility, drive traffic, and boost sales.
//         </Typography>

//         <Box display="flex" alignItems="center">
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "primary.main",
//               minWidth: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               padding: 0,
//               mr: 2,
//             }}
//           >
//             <ArrowOutwardIcon sx={{ color: "black" }} />
//           </Button>
//           <Typography color="primary.main" variant="body1" fontWeight="medium">
//             Read
//           </Typography>
//         </Box>

//         <Grid container spacing={2} sx={{ mt: 4 }}>
//           {stats.map((stat, index) => (
//             <Grid item xs={6} md={3} key={index}>
//               <Card sx={{ borderRadius: 2, height: "100%", bgcolor: "white" }}>
//                 <CardContent>
//                   <Typography variant="h5" fontWeight="bold">
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="body1">{stat.label}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Grid>
//   );
// };

// export default FeaturedSuccess;

// import { Box, Container, Grid, Typography, Button } from "@mui/material";

// const FeaturedSuccess = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#1976d2",
//         color: "#fff",
//         py: 5,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Column */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" gutterBottom>
//               Grow Your Business
//             </Typography>
//             <Typography variant="h6" paragraph>
//               We provide digital tools to help you reach more customers and
//               increase revenue.
//             </Typography>
//             <Button variant="contained" color="secondary">
//               Learn More
//             </Button>
//           </Grid>

//           {/* Right Column */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 width: "100%",
//                 height: 300,
//                 backgroundColor: "#fff",
//                 borderRadius: 2,
//               }}
//             >
//               {/* Replace this with an <img> or any graphic */}
//               <Typography
//                 sx={{
//                   color: "#000",
//                   p: 4,
//                   textAlign: "center",
//                 }}
//               >
//                 Image or Illustration Placeholder
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default FeaturedSuccess;

import React from "react";
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
        borderRadius: "16px",
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
