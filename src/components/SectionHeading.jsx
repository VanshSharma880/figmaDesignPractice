import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, description }) => {
  return (
    <Box
      sx={{
        py: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        textAlign: { xs: "left", md: "inherit" },
      }}
    >
      <Typography
        sx={{
          bgcolor: "primary.main",
          color: "black",
          px: 1.5,
          py: 0.5,
          borderRadius: "12px",
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: { xs: "1.75rem", md: "2.125rem" },
        }}
        variant="h3"
      >
        {title}
      </Typography>

      <Box
        sx={{
          ml: { xs: 0, md: 4 },
          mt: { xs: 2, md: 0 },
          maxWidth: "600px",
        }}
      >
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default SectionHeading;
