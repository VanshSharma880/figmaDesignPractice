import { Box, Grid } from "@mui/material";
import React from "react";
import CoreValuesCard from "./CoreValuesCard";

const CoreValues = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly seek new and creative solutions.",
      image: "",
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty.",
      image: "/assets/Innovation.svg",
    },
    {
      title: "Teamwork",
      description: "We believe in the power of working together.",
      image: "/assets/Collaboration.svg",
    },
    {
      title: "Excellence",
      description: "We strive to exceed expectations in everything.",
      image: "",
    },
  ];
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={6} justifyContent="center">
        {coreValues.map((value, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CoreValuesCard {...value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreValues;
