import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SectionHeading from "../SectionHeading";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudies() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: { xs: 4, sm: 6 } }}>
      <SectionHeading
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />

      <Box
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: 4,
          color: "white",
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 5 },
        }}
      >
        {caseStudies.map((item, index) => (
          <React.Fragment key={index}>
            <Box flex={1}>
              <Typography variant="body1" mb={1}>
                {item.text}
              </Typography>
              <Link
                href="#"
                marginY={2}
                color="#c5ff61"
                underline="none"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontWeight: 800,
                }}
              >
                Learn more <ArrowOutwardIcon sx={{ fontSize: 20, ml: 0.5 }} />
              </Link>
            </Box>

            {index < caseStudies.length - 1 && (
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "1px",
                  backgroundColor: "white",
                  mx: 1,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
