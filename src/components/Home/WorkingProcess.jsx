import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SectionHeading from "../SectionHeading";

const steps = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description: "",
  },
];

export default function WorkingProcess() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeading
        title={"Case Studies"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />

      {steps.map((step, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            backgroundColor: expanded === index ? "#c5ff61" : "#f7f7f7",
            color: expanded === index ? "black" : "inherit",
            borderRadius: 3,
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography fontWeight="bold" variant="h6" sx={{ mr: 2 }}>
              {`0${index + 1}`}
            </Typography>
            <Typography fontWeight="medium" variant="h6">
              {step.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ maxWidth: 600 }}>
              {step.description || "Details coming soon."}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
