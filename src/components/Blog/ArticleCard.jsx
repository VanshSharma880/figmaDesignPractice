import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ArticleCard = ({ title, description }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "none",
        p: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h3"
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

export default ArticleCard;
