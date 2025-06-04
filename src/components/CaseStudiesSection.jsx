import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CaseStudiesSection = ({ data }) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: 10,
          color: "white",
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 5 },
        }}
      >
        {data.map((item, index) => (
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

            {index < data.length - 1 && (
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
};

export default CaseStudiesSection;
