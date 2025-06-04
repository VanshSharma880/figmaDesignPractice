import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";

const awardsData = [1, 2, 3, 4];

const AwardsRecognition = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: isSmallScreen ? "hidden" : "auto",
        py: 4,
      }}
    >
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          minWidth: isSmallScreen ? "100%" : "max-content",
          px: 2,
        }}
      >
        {awardsData.map((item) => (
          <Box
            key={item}
            sx={{
              width: { xs: "90%", sm: 280 },
              maxWidth: 300,
              minHeight: 360,
              borderRadius: 8,
              bgcolor: "tertiary.main",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <Box
              component="img"
              src="/assets/Recognition.png"
              alt={`Award ${item}`}
              sx={{
                width: "100%",
                height: 200,
                borderRadius: 2,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Sample heading text for year {item}
            </Typography>
            <Typography variant="body1">
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
