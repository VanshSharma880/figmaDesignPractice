import { Box, Container, Typography } from "@mui/material";
import PricingSection from "../../components/Pricing/PricingSection";
import FAQSection from "../../components/Pricing/FAQSection";

const Pricing = () => {
  return (
    <Box sx={{ p: 5 }}>
      <PricingSection />
      <FAQSection />
    </Box>
  );
};

export default Pricing;
