import HeroSection from "../../components/HeroSection";
import { Box } from "@mui/material";
import AboutUsHero from "/assets/AboutUsHero.png";
import BookMyRanking from "../../components/Services/BookMyRanking";
import SectionHeading from "../../components/SectionHeading";
import SEOProcess from "../../components/Services/SEOProcess";
import UseCaseSection from "../../components/Services/UseCaseSection";
import OtherServicesCard from "../../components/Services/OtherServicesCard";
import SearchRankCTA from "../../components/Services/SearchRankCTA";

const Services = () => {
  return (
    <Box sx={{ p: 5 }}>
      <HeroSection
        title="Expert Digital Marketing  Services"
        subtitle="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={AboutUsHero}
      />
      {/* SEO Book by service Ranking */}
      <BookMyRanking />
      {/* How we work SEO Process */}
      <SectionHeading
        title={"How We Work: SEO Process"}
        description={
          "Our step-by-step SEO process ensure your website ranks higher, attract more traffic, and drive lasting results"
        }
      />
      <SEOProcess />
      {/* Use Cases */}
      <SectionHeading
        title={"Use Cases"}
        description={
          "Explore Real-Life Example of Our Proven digital Marketing Success through Our Case Studies"
        }
      />
      <UseCaseSection />
      {/* Our Other Services */}
      <SectionHeading
        title={"Our Other Services"}
        description={
          "At our digital marketing agency, we offer range of services to help business grow and succeed online. These services include"
        }
      />
      <OtherServicesCard />
      <SearchRankCTA />
    </Box>
  );
};

export default Services;
