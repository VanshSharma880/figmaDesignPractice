import { useState } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import SectionHeading from "../SectionHeading";
import { BlackButton } from "../mui/blackButton";

const ContactForm = () => {
  const [formType, setFormType] = useState("sayHi");

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 5 }}>
      <SectionHeading
        title={"Contact Us"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
      />

      <Box
        sx={{
          mt: 4,
          bgcolor: "#F3F3F3",
          borderRadius: "30px",
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Right Form */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
            maxWidth: 600,
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
          <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <BlackButton label="Send Message" width="100%" />
        </Box>
        {/* Left Illustration Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            width: "100%",
            height: "100%",
            minHeight: 300,
            backgroundColor: "#F3F3F3",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/assets/Illustration.png"
            alt="Decorative Illustration"
            sx={{
              width: { xs: "60%", md: "100%" },
              maxWidth: 300,
              objectFit: "contain",
              pl: { xs: 2, md: 0 },
              mx: { xs: "auto", md: 0 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
