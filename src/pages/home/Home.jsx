import React from "react";
import Hero from "../../components/Home/Hero";
import ServicesSection from "../../components/Home/ServicesSection";
import { Box } from "@mui/material";
import CaseStudies from "../../components/Home/CaseStudies";
import WorkingProcess from "../../components/Home/WorkingProcess";
import TeamSection from "../../components/Home/TeamSection";
import Testimonials from "../../components/Home/Testimonials";
import ContactForm from "../../components/Home/ContactForm";

const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Hero />
      <ServicesSection />
      <CaseStudies />
      <WorkingProcess />
      <TeamSection />
      <Testimonials />
      <ContactForm />
    </Box>
  );
};

export default Home;
