import { Box, Typography } from "@mui/material";

const ClientLogo = ({ type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.7,
        transition: "opacity 0.3s",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <Typography
        variant="h6"
        component="span"
        sx={{
          fontWeight: 600,
          color: "text.primary",
          letterSpacing: type === "amazon" ? "-0.5px" : "normal",
          textTransform: type === "netflix" ? "uppercase" : "none",
          fontStyle: type === "dribbble" ? "italic" : "normal",
        }}
      >
        {type === "netflix"
          ? "NETFLIX"
          : type.charAt(0).toUpperCase() + type.slice(1)}
      </Typography>
    </Box>
  );
};

export default ClientLogo;
