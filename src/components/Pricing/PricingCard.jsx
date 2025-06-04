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
        maxWidth: 350,
        width: "100%",
        mx: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: 7,
        overflow: "visible",
        position: "relative",
        p: 2,
        border: isPopular ? "" : 1,
        boxShadow: "0 4px 0 #000",
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
            border: 2,
            borderColor: isPopular ? "white" : "black",
            color: textColor,
          }}
        >
          Request a quote
        </Button>

        <Divider
          sx={{
            my: 2,
            borderColor: isPopular ? "white" : "black",
            border: 1,
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
                    backgroundColor: "primary.main",
                  }}
                >
                  <Check />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  variant: "body1",
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
