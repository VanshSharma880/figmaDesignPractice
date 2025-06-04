import React from "react";
import Hero from "../../components/Home/Hero";
import ServicesSection from "../../components/Home/ServicesSection";
import { Box } from "@mui/material";
import CaseStudies from "../../components/Home/CaseStudies";
import WorkingProcess from "../../components/Home/WorkingProcess";
import TeamSection from "../../components/Home/TeamSection";
import Testimonials from "../../components/Home/Testimonials";
import ContactForm from "../../components/Home/ContactForm";
import SectionHeading from "../../components/SectionHeading";

const Home = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Hero />
      {/* Service */}
      <SectionHeading
        title={"Services"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />
      <ServicesSection />
      {/* Case Studies */}
      <SectionHeading
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />
      <CaseStudies />
      {/* Work in Progress */}
      <SectionHeading
        title={"Our Working Process "}
        description={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <WorkingProcess />
      {/* Team Section */}
      <SectionHeading
        title={"Team"}
        description={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />
      <TeamSection />
      {/* Testimonials  */}
      <SectionHeading
        title={"Testimonials"}
        description={
          "Explore real life example of digital marketing success through our case studies"
        }
      />
      <Testimonials />
      {/* Contact Us */}
      <SectionHeading
        title={"Contact Us"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
      />
      <ContactForm />
    </Box>
  );
};

export default Home;
