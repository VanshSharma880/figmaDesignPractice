import { Box, Paper, Typography } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Website Audit & Analysis",
    description:
      "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
  },
  {
    number: "02",
    title: "Competitor Research",
    description:
      "We analyze your top competitors to uncover their strengths, strategies, and areas where your site can areas for improvement, including technical issues, content quality, gain a competitive edge.",
  },
  {
    number: "03",
    title: "Keyword Strategy",
    description:
      "We build a keyword plan tailored to your audience and goals, targeting both high-volume areas for improvement, including technical issues, content quality, and long-tail search terms.",
  },
  {
    number: "04",
    title: "On-Page Optimization",
    description:
      "We optimize site structure, meta tags, content, and internal linking to align areas for improvement, including technical issues, content quality, with SEO best practices.",
  },
  {
    number: "05",
    title: "Content Development",
    description:
      "We create or improve content that targets your keywords and engages your audience, supporting both SEO and user experience.",
  },
  {
    number: "06",
    title: "Performance Monitoring",
    description:
      "We track key SEO metrics, adjust strategies areas for improvement, including technical issues, content quality, based on data, and provide ongoing reports to measure growth and ROI.",
  },
];

const SEOProcess = () => {
  return (
    <Box>
      {steps.map((step, index) => (
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            backgroundColor: "#f5f5f5",
            padding: 3,
            marginY: 2,
            maxWidth: "100%",
          }}
        >
          {/* Left: Star-like shape with number */}
          <Box
            sx={{
              width: 120,
              height: 100,
              backgroundColor: "secondary.main",
              clipPath:
                "polygon(50% 0%, 60% 35%, 100% 35%, 65% 55%, 80% 100%, 50% 75%, 20% 100%, 35% 55%, 0% 35%, 40% 35%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginRight: 3,
              flexShrink: 0,
            }}
          >
            {step.number}
          </Box>

          {/* Right: Text content */}
          <Box maxWidth={1000}>
            <Typography variant="h4" fontWeight={"bold"} mb={2}>
              {step.title}
            </Typography>
            <Typography variant="body1">{step.description}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default SEOProcess;
