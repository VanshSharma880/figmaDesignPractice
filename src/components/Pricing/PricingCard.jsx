import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import { Check } from "@mui/icons-material";

const PricingCard = ({ plan }) => {
  const {
    name,
    price,
    isPopular,
    features,
    backgroundColor,
    textColor,
    buttonColor,
    buttonTextColor,
  } = plan;

  return (
    <Card
      sx={{
        maxWidth: 400, // ↓ Set the max width
        width: "100%", // Ensures responsiveness
        mx: "auto", // Center horizontally
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: 3,
        overflow: "visible",
        position: "relative",
        p: 2,
        border: isPopular ? "1px solid #c1ff72" : "1px solid #e5e7eb",
      }}
      elevation={isPopular ? 6 : 1}
    >
      {isPopular && (
        <Chip
          label="Popular"
          size="small"
          sx={{
            position: "absolute",
            mt: 2,
            right: 24,
            backgroundColor: "primary.main",
            color: "black",
            fontWeight: 600,
            fontSize: "0.75rem",
            "& .MuiChip-label": {
              px: 1,
            },
          }}
        />
      )}
      <CardContent
        sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: textColor,
          }}
        >
          {name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "baseline", mb: 3 }}>
          <Typography
            component="span"
            variant="h2"
            sx={{
              fontWeight: 700,
              color: textColor,
            }}
          >
            ${price}
          </Typography>
          <Typography
            component="span"
            variant="body1"
            sx={{
              ml: 1,
              color: isPopular ? "rgba(255, 255, 255, 0.7)" : "text.secondary",
            }}
          >
            /month
          </Typography>
        </Box>

        <Button
          variant="contained"
          color={buttonColor}
          fullWidth
          sx={{
            py: 1.5,
            color: buttonTextColor,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Get Started
        </Button>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            py: 1.5,
            mb: 3,
            borderColor: isPopular
              ? "rgba(255, 255, 255, 0.23)"
              : "rgba(0, 0, 0, 0.23)",
            color: textColor,
            "&:hover": {
              borderColor: isPopular
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(0, 0, 0, 0.5)",
              backgroundColor: isPopular
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.05)",
            },
          }}
        >
          Request a quote
        </Button>

        <Divider
          sx={{
            my: 2,
            borderColor: isPopular
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(0, 0, 0, 0.12)",
          }}
        />

        <List sx={{ mt: 2, p: 0 }}>
          {features.map((feature, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{
                px: 0,
                py: 1,
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "#c1ff72",
                  }}
                >
                  <Check size={16} color="secondary.main" />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  variant: "body2",
                  color: textColor,
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
