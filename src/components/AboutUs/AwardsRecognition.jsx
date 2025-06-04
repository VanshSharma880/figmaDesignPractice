import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const AwardsRecognition = () => {
  return (
    <Box sx={{ overflowX: "auto", width: "100%" }}>
      <Stack
        direction="row"
        spacing={4}
        justifyContent={"center"}
        sx={{
          minWidth: "max-content",
          px: 2,
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <Box
            key={item}
            sx={{
              width: 200,
              height: 300,
              borderRadius: 10,
              bgcolor: "tertiary.main",
              p: 4,
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/path-to-your-image.jpg"
              alt="Achievement"
              sx={{
                width: "100%",
                height: "auto",
                mb: 2,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Sample heading text for year {item}
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Recusandae voluptates rem harum.
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AwardsRecognition;
