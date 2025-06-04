import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const DividerCard = ({
  title,
  description,
  showTopBorder,
  showLeftBorder,
  showRightBorder,
  showBottomBorder,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 3,
        boxShadow: "none",
        borderRadius: 0,
        borderTop: showTopBorder ? "1px solid #ccc" : "none",
        borderBottom: showBottomBorder ? "1px solid #ccc" : "none",
        borderLeft: showLeftBorder ? "1px solid #ccc" : "none",
        borderRight: showRightBorder ? "1px solid #ccc" : "none",
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.25rem", md: "1.35rem" },
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            mb: 3,
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <Box display="flex" alignItems="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
            padding: 0,
            mr: 2,
          }}
        >
          <ArrowOutwardIcon sx={{ color: "black" }} />
        </Button>
        <Typography variant="body1" fontWeight="medium">
          Read article
        </Typography>
      </Box>
    </Card>
  );
};

export default DividerCard;
