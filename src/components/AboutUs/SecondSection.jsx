import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

export default function SecondSection() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }}>
      <Box
        component="section"
        sx={{
          p: 2,
          borderTop: 2,
          width: "100%",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Typography variant="h3">8+</Typography>
        <Typography variant="body1">psum dolor sit ametur.</Typography>
      </Box>
      <Box
        component="section"
        sx={{ p: 2, borderTop: 2, width: "100%", borderRadius: "20px" }}
      >
        <Typography variant="h3">50+</Typography>
        <Typography variant="body1">lor sit amet consectetur.</Typography>
      </Box>
      <Box
        component="section"
        sx={{ p: 2, borderTop: 2, width: "100%", borderRadius: "20px" }}
      >
        <Typography variant="h3">100+</Typography>
        <Typography variant="body1">met consectetur.</Typography>
      </Box>
      <Box
        component="section"
        sx={{
          p: 2,
          borderTop: 2,
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h3">20+</Typography>
        <Typography variant="body1">sit amet consectetur.</Typography>
      </Box>
      <Box
        component="section"
        sx={{
          p: 2,
          borderTop: 2,
          width: "100%",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <Typography variant="h3">500%</Typography>
        <Typography variant="body1">dolor sit amet consectetur.</Typography>
      </Box>
    </Stack>
  );
}
