// import React from "react";
// import { Box, Container, Typography, Button } from "@mui/material";
// import ServiceCard from "./ServiceCard";
// import SearchIcon from "@mui/icons-material/Search";
// import MouseIcon from "@mui/icons-material/Mouse";
// import ShareIcon from "@mui/icons-material/Share";
// import EmailIcon from "@mui/icons-material/Email";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import BarChartIcon from "@mui/icons-material/BarChart";

// const ServicesSection = () => {
//   const services = [
//     {
//       title: "Search engine optimization",
//       icon: <SearchIcon />,
//       bgcolor: "#f8f9fa",
//       textColor: "#000",
//     },
//     {
//       title: "Pay-per-click advertising",
//       icon: <MouseIcon />,
//       bgcolor: "#9ACD32",
//       textColor: "#000",
//     },
//     {
//       title: "Social Media Marketing",
//       icon: <ShareIcon />,
//       bgcolor: "#2a2a2a",
//       textColor: "white",
//     },
//     {
//       title: "Email Marketing",
//       icon: <EmailIcon />,
//       bgcolor: "#f8f9fa",
//       textColor: "#000",
//     },
//     {
//       title: "Content Creation",
//       icon: <EditNoteIcon />,
//       bgcolor: "#9ACD32",
//       textColor: "#000",
//     },
//     {
//       title: "Analytics and Tracking",
//       icon: <BarChartIcon />,
//       bgcolor: "#2a2a2a",
//       textColor: "white",
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, backgroundColor: "white" }}>
//       <Container maxWidth="lg">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <div key={index}>
//               <ServiceCard
//                 title={service.title}
//                 icon={service.icon}
//                 bgcolor={service.bgcolor}
//                 textColor={service.textColor}
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;
import React from "react";
import SectionHeading from "../SectionHeading";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
const ServicesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <SectionHeading
        title={"Services"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />
      <ServiceCard />
    </Box>
  );
};

export default ServicesSection;
