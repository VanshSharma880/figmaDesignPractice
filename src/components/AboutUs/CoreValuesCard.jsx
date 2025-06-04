import { Box, Divider, Typography } from "@mui/material";

const CoreValuesCard = ({ title, description, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        border: 1,
        borderRadius: 10,
        p: 2,
        boxShadow: "0 4px 0 #000",
        width: "600px",
        minHeight: { xs: "auto", md: 250 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Left Content */}
      <Box flex={1}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ borderRadius: 2, pb: 4 }}
        >
          {title}
        </Typography>
        <Divider sx={{ borderColor: "black", mb: 2 }} />
        <Typography variant="body1" sx={{ borderRadius: 2, py: 2 }}>
          {description}
        </Typography>
      </Box>

      {/* Right Image */}
      {image && (
        <Box
          sx={{
            mt: { xs: 3, md: 0 },
            ml: { md: 2 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt={`${title} image`}
            style={{
              width: "100%",
              maxWidth: 200,
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CoreValuesCard;
