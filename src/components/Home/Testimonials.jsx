import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    text: `We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.`,
    author: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    text: `This team delivers results. Their strategies been working with Positivus for the past year and have seen a si increased our leads dramatically and helped us scale faster than expected. been working with Positivus for the past year and have seen a si been working with Positivus for the past year and have seen a si`,
    author: "Jane Doe",
    title: "CEO at Growthify",
  },
  {
    text: `Professional and insightbeen working with Positivus for the past year and have seen a si ful. They transformed our brand visibility and customer engagemen been working with Positivus for the past year and have seen a sit. been working with Positivus for the past year and have seen a si`,
    author: "Michael Chen",
    title: "VP of Marketing at BrightPath",
  },
  {
    text: `Excellent ROI from day one. Their tailore been working with Positivus for the past year and have seen a sid approach is unmatched in digital marketing been working with Positivus for the past year and have seen a si. been working with Positivus for the past year and have seen a si`,
    author: "Aisha Khan",
    title: "Head of Strategy at Nexus",
  },
  {
    text: `They're more than just a been working with Positivus for the past year and have seen a si service provider—they're a growth partner been working with Positivus for the past year and have seen a si. been working with Positivus for the past year and have seen a si`,
    author: "Carlos Rivera",
    title: "Founder at Elevate Labs",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "secondary.main",
          color: "#fff",
          p: 6,
          textAlign: "center",
          borderRadius: "26px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            overflow: "hidden",
            position: "relative",
            minHeight: 300,
          }}
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              sx={{
                minWidth: "100%",
                transform: `translateX(${(i - current) * 100}%)`,
                transition: "transform 0.5s ease-in-out",
                position: "absolute",
                top: 0,
                left: 0,
                px: 2,
              }}
            >
              <Box
                sx={{
                  border: "2px solid #C6FF72",
                  borderRadius: "20px",
                  maxWidth: 600,
                  mx: "auto",
                  p: 4,
                  position: "relative",
                  "::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -12,
                    left: "5%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: "12px solid #C6FF72",
                  },
                }}
              >
                <Typography variant="body1" mb={2}>
                  "{t.text}"
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  p: 1,
                }}
              >
                <Typography variant="h6" sx={{ color: "primary.main" }}>
                  {t.author}
                </Typography>
                <Typography variant="body1">{t.title}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Dots */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 1 }}>
          <IconButton onClick={handlePrev} sx={{ color: "#888" }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 10,
                height: 10,
                mt: 1.5,
                borderRadius: "50%",
                backgroundColor: current === i ? "#C6FF72" : "#fff",
                opacity: current === i ? 1 : 0.4,
                cursor: "pointer",
              }}
              onClick={() => setCurrent(i)}
            />
          ))}
          <IconButton onClick={handleNext} sx={{ color: "#888" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
