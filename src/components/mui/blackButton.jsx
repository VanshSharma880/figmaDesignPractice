import { Button } from "@mui/material";

export const BlackButton = ({
  label,
  width,
  bgcolor = "secondary.main",
  textColor = "white",
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        width,
        bgcolor: bgcolor,
        color: textColor,
      }}
    >
      {label}
    </Button>
  );
};
