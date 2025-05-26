import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";

const ContactForm = () => {
  const [formType, setFormType] = useState("sayHi");

  return (
    <Box sx={{ py: 5, px: 2, position: "relative" }}>
      <Typography
        variant="h6"
        sx={{ color: "#d4ff00", fontWeight: "bold", mb: 1 }}
      >
        CONTACT US
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </Typography>
      <Box
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 500,
        }}
      >
        <RadioGroup
          row
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
          sx={{ mb: 2 }}
        >
          <FormControlLabel
            value="sayHi"
            control={<Radio />}
            label="Say Hi"
            sx={{ color: "text.primary" }}
          />
          <FormControlLabel
            value="getQuote"
            control={<Radio />}
            label="Get a Quote"
            sx={{ color: "text.primary" }}
          />
        </RadioGroup>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          sx={{ mb: 2, borderRadius: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{ mb: 2, borderRadius: 2 }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2, borderRadius: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            width: "100%",
            bgcolor: "black",
            color: "white",
            borderRadius: 2,
            py: 1.5,
            "&:hover": { bgcolor: "grey.900" },
          }}
        >
          Send Message
        </Button>
      </Box>
      {/* Decorative Star Shape */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          display: { xs: "none", md: "block" },
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon
            points="50,10 61.8,38.2 90,38.2 67.3,55.6 78.1,83.8 50,67.3 21.9,83.8 32.7,55.6 10,38.2 38.2,38.2"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#d4ff00"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#d4ff00"
            strokeWidth="2"
            strokeDasharray="3,3"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default ContactForm;
