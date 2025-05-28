import { Button } from "@mui/material";
import React from "react";

export const BlackButton = ({ label, width = "opx" }) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        width,
        bgcolor: "secondary.main",
        color: "white",
      }}
    >
      {label}
    </Button>
  );
};
