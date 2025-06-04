import { Box, Grid, Typography } from "@mui/material";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading";

const plans = [
  {
    name: "Basic Plan",
    price: 500,
    isPopular: false,
    features: [
      "Website optimization",
      "Social media setup and management (1 platform)",
      "Monthly progress report",
      "Email support",
      "Basic competitor analysis",
      "Initial SEO audit",
    ],
    backgroundColor: "#ffffff",
    textColor: "#111827",
    buttonColor: "secondary",
    buttonTextColor: "#ffffff",
  },
  {
    name: "Pro Plan",
    price: 1000,
    isPopular: true,
    features: [
      "Includes all from the Basic Plan",
      "Social media setup and management (up to 3 platforms)",
      "PPC ad campaign management",
      "Email and phone support",
      "On-page SEO improvements",
      "Monthly content recommendations",
    ],
    backgroundColor: "#111827",
    textColor: "#ffffff",
    buttonColor: "primary",
    buttonTextColor: "#111827",
  },
  {
    name: "Elite Plan",
    price: 2000,
    isPopular: false,
    features: [
      "Includes all from the Pro Plan",
      "Website design and development",
      "Comprehensive SEO strategy",
      "Social media setup and management (up to 5 platforms)",
      "Content marketing strategy and implementation",
      "In-depth analytics and reporting",
    ],
    backgroundColor: "#ffffff",
    textColor: "#111827",
    buttonColor: "secondary",
    buttonTextColor: "#ffffff",
  },
];

const PricingSection = () => {
  return (
    <Box>
      <Typography variant="h1">Pricing</Typography>
      <Typography variant="body1" maxWidth={400} py={3}>
        Elevate Your Online Presence: Competitive Pricing for Exceptional
        Results
      </Typography>

      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={12} md={3} key={index}>
              <PricingCard plan={plan} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingSection;
