import React from "react";
import HeroSection from "../../components/HeroSection";
import { Box } from "@mui/material";
import AboutUsHero from "/assets/AboutUsHero.png";

const Services = () => {
  return (
    <Box sx={{ p: 5 }}>
      <HeroSection
        title="Expert Digital Marketing  Services"
        subtitle="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={AboutUsHero}
      />
    </Box>
  );
};

export default Services;
