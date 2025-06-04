import { Box } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import AboutUsHero from "/assets/AboutUsHero.png";
import SectionHeading from "../../components/SectionHeading";
import SecondSection from "../../components/AboutUs/SecondSection";
import CoreValues from "../../components/AboutUs/CoreValues";
import CoreValueSecond from "../../components/AboutUs/CoreValueSecond";
import AwardsRecognition from "../../components/AboutUs/AwardsRecognition";
import AwardsRecognitionSecond from "../../components/AboutUs/AwardsRecognitionSecond";
import OurJourney from "../../components/AboutUs/OurJourney";

const AboutUs = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 5 } }}>
      <HeroSection
        title="Together for Success"
        subtitle="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={AboutUsHero}
      />

      <SectionHeading
        title={"Our Impact in Numbers"}
        description={
          "A snapshot of the milestones and achievements that drive our success"
        }
      />

      <SecondSection />
      {/* Our Journey */}
      <SectionHeading
        title={"Our Journey"}
        description={
          "Form humble beginning to industry leader discover how Positivus evolved to drive success for business worldwide."
        }
      />
      <OurJourney />
      {/* Core Value section */}
      <SectionHeading
        title={"Core Values"}
        description={"At the heart of everything we do are our core values"}
      />
      <CoreValues />
      <CoreValueSecond />
      {/* Awards & Recognition */}
      <SectionHeading
        title={"Awards & Recognition"}
        description={
          "At Positivus our commitment to excellence  has been recognized by industry leaders, here are some of our proudest achievement."
        }
      />
      <AwardsRecognition />
      <AwardsRecognitionSecond />
    </Box>
  );
};

export default AboutUs;
