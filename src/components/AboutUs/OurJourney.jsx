import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// Timeline data
const timelineEvents = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Positivus was founded to help businesses navigate the digital world and achieve online success.",
    align: "left",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description:
      "Positivus was named among the top 50 global digital agencies, affirming our leadership.",
    align: "right",
  },
  {
    year: "2023",
    title: "Innovation and Growth",
    description:
      "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.",
    align: "left",
  },
  {
    year: "2024",
    title: "Leading the Future",
    description:
      "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.",
    align: "right",
  },
];

const OurJourney = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 }, position: "relative" }}>
      {timelineEvents.map((event, index) => {
        const isLeft = event.align === "left";

        return (
          <Grid
            container
            key={index}
            direction={isLeft ? "row" : "row-reverse"}
            alignItems="center"
            spacing={2}
            sx={{ mb: 10 }}
          >
            <Grid item xs={12} sm={5}>
              <Typography variant="h2" fontWeight="bold">
                {event.year}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  backgroundColor: "#0f0f0f",
                  width: 500,
                  color: "white",
                  borderRadius: "20px",
                  p: 5,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    p: 1,
                    left: isLeft ? -16 : "auto",
                    right: isLeft ? "auto" : -16,
                    top: 20,
                    width: 20,
                    height: 20,
                    backgroundColor: "black",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                >
                  <StarIcon />
                </Box>
                <Typography variant="h5" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="body1" color="gray" maxWidth={350}>
                  {event.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default OurJourney;
