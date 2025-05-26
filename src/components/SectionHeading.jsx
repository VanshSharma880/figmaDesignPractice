import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, description }) => {
  return (
    <Box sx={{ py: 10 }} display="flex" alignItems="flex-start">
      <Typography
        sx={{
          bgcolor: "primary.main",
          color: "black",
          px: 1,
          py: 0.5,
          borderRadius: "12px",
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
        variant="h3"
      >
        {title}
      </Typography>

      <Box sx={{ ml: 4, maxWidth: "600px" }}>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default SectionHeading;
