import { Box } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import AboutUsHero from "/assets/AboutUsHero.png";

const UseCase = () => {
  return (
    <Box sx={{ p: 5 }}>
      <HeroSection
        title="Proven Success Stories"
        subtitle="At Positivus, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorum odit hic illo nihil repellendus nesciunt porro dolor consectetur modi. we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={AboutUsHero}
      />
    </Box>
  );
};

export default UseCase;
