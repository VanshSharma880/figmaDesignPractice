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
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeading
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />

      <Box
        sx={{
          backgroundColor: "#0f0f1b",
          borderRadius: 4,
          color: "#fff",
          p: 8,
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        {caseStudies.map((item, index) => (
          <React.Fragment key={index}>
            <Box flex={1}>
              <Typography variant="body2" mb={1}>
                {item.text}
              </Typography>
              <Link
                href="#"
                color="#c5ff61"
                underline="none"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                Learn more <ArrowOutwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
              </Link>
            </Box>

            {/* Divider between items (not after last item) */}
            {index < caseStudies.length - 1 && (
              <Box
                sx={{
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
