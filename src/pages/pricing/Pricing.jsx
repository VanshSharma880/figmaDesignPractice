import { Box } from "@mui/material";
import PricingSection from "../../components/Pricing/PricingSection";
import FAQSection from "../../components/Pricing/FAQSection";
import SectionHeading from "../../components/SectionHeading";

const Pricing = () => {
  return (
    <Box sx={{ p: 5 }}>
      {/* Pricing section */}
      <PricingSection />
      {/* FAQ Section */}
      <SectionHeading title={"Frequently Asked Question"} description={""} />

      <FAQSection />
    </Box>
  );
};

export default Pricing;
