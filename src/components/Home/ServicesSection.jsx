import SectionHeading from "../SectionHeading";
import { Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import CTASection from "../CTASection";

const ServicesSection = () => {
  return (
    <Box sx={{ p: 5 }}>
      <SectionHeading
        title={"Services"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />
      <ServiceCard />
      <CTASection />
    </Box>
  );
};

export default ServicesSection;
