import { Box } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import AboutUsHero from "/assets/AboutUsHero.png";
import FeaturedSuccess from "../../components/UseCases/FeaturedSuccess";
import AllSuccessStories from "../../components/UseCases/AllSuccessStories";
import SectionHeading from "../../components/SectionHeading";
import Testimonials from "../../components/Home/Testimonials";
import CTASection from "../../components/CTASection";

const UseCase = () => {
  return (
    <Box sx={{ p: 5 }}>
      <HeroSection
        title="Proven Success Stories"
        subtitle="At Positivus, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorum odit hic illo nihil repellendus nesciunt porro dolor consectetur modi. we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={AboutUsHero}
      />
      <FeaturedSuccess />
      <SectionHeading
        title={"All Success Stories"}
        description={
          "Explore real life example of digital marketing success through our case studies"
        }
      />
      <AllSuccessStories />
      {/* Testimonials */}
      <SectionHeading
        title={"Testimonials"}
        description={
          "Explore real life example of digital marketing success through our case studies"
        }
      />
      <Testimonials />
      <CTASection bgColor={"primary.main"} />
    </Box>
  );
};

export default UseCase;
