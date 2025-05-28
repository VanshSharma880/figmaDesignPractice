import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Fab,
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
  {
    title: "Implementation",
    description: "",
  },
  {
    title: "Monitoring and Optimization",
    description: "",
  },
  {
    title: "Reporting and Communication",
    description: "",
  },
  {
    title: "Continual Improvement",
    description: "",
  },
];

export default function WorkingProcess() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ p: 5 }}>
      <SectionHeading
        title={"Our Working Process "}
        description={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      {steps.map((step, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            backgroundColor: expanded === index ? "#c5ff61" : "#f7f7f7",
            color: expanded === index ? "black" : "inherit",
            borderRadius: "24px",
            p: 4,
            boxShadow: "0px 4px 0 #000",
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <Fab sx={{ border: 1, borderColor: "black" }} aria-label="add">
                  <RemoveIcon />
                </Fab>
              ) : (
                <Fab
                  sx={{ border: 1, borderColor: "black" }}
                  aria-label="remove"
                >
                  <AddIcon />
                </Fab>
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography fontWeight="bold" variant="h3" sx={{ mr: 2 }}>
              {`0${index + 1}`}
            </Typography>
            <Typography fontWeight="medium" sx={{ mt: "3px" }} variant="h5">
              {step.title}
            </Typography>
          </AccordionSummary>
          <Divider
            variant="inset"
            sx={{
              borderColor: "black",
              opacity: 1,
              mb: 2,
            }}
          />
          <AccordionDetails>
            <Typography variant="body1">
              {step.description || "Details coming soon."}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
