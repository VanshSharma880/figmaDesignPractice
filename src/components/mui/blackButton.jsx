import { Button } from "@mui/material";
import React from "react";

export const BlackButton = ({ label }) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        bgcolor: "secondary.main",
        color: "white",
      }}
    >
      {label}
    </Button>
  );
};
