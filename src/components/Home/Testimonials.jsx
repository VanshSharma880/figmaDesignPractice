import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      title: "Marketing Director at ABC Inc",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ py: 5, px: 2 }}>
      <Typography
        variant="h6"
        sx={{ color: "#d4ff00", fontWeight: "bold", mb: 1 }}
      >
        TESTIMONIALS
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
        about Our Digital Marketing Services
      </Typography>
      <Box
        sx={{
          bgcolor: "black",
          color: "white",
          p: 4,
          borderRadius: 2,
          display: { xs: "block", md: "flex" },
          gap: 2,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              p: 2,
              display: {
                xs: index === currentIndex ? "block" : "none",
                md: "block",
              },
            }}
          >
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "{testimonial.quote}"
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#d4ff00" }}>
              {testimonial.author} <br /> {testimonial.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <IconButton onClick={handlePrev} sx={{ color: "white" }}>
          <ArrowBackIos />
        </IconButton>
        <Box sx={{ display: "flex", gap: 1 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              sx={{
                height: 16,
                width: 16,
                borderRadius: "50%",
                bgcolor: index === currentIndex ? "#d4ff00" : "grey.500",
              }}
            />
          ))}
        </Box>
        <IconButton onClick={handleNext} sx={{ color: "white" }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
