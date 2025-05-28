import { Box } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import AboutUsHero from "/assets/AboutUsHero.png";
const AboutUs = () => {
  return (
    <Box sx={{ p: 5 }}>
      <HeroSection
        title="Together for Success"
        subtitle="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={AboutUsHero}
      />
    </Box>
  );
};

export default AboutUs;
