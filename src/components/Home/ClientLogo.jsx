import { Box } from "@mui/material";

const ClientLogo = ({ type }) => {
  return (
    <Box
      component="img"
      src={`/assets/clients/${type}.svg`} // Adjust extension if needed (e.g., .png or .webp)
      alt={`${type} logo`}
      sx={{
        height: 40,
        objectFit: "contain",
        opacity: 0.7,
        transition: "opacity 0.3s",
        "&:hover": {
          opacity: 1,
        },
      }}
    />
  );
};

export default ClientLogo;
