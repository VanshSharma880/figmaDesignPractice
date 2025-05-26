import React from "react";
import {
  Box,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0f0f1b",
        color: "#fff",
        px: 4,
        py: 6,
        borderTopLeftRadius: "24px",
        borderTopRightRadius: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
          mb: 4,
        }}
      >
        {/* Left side */}
        <Box sx={{ minWidth: 260 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🌟 Positivus
          </Typography>

          <Box
            sx={{
              bgcolor: "#c5ff61",
              borderRadius: "8px",
              display: "inline-block",
              px: 1,
              mb: 1,
            }}
          >
            <Typography variant="body2" color="black" fontWeight="bold">
              Contact us:
            </Typography>
          </Box>

          <Typography variant="body2">Email: info@positivus.com</Typography>
          <Typography variant="body2">Phone: 555-567-8901</Typography>
          <Typography variant="body2">
            Address: 1234 Main St, Moonstone City, Stardust State 12345
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ flexWrap: "wrap", alignItems: "center" }}
        >
          {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
            (text) => (
              <Link
                key={text}
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                {text}
              </Link>
            )
          )}
        </Stack>

        {/* Newsletter Subscription */}
        <Box
          sx={{
            backgroundColor: "#1a1a2e",
            borderRadius: 2,
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            minWidth: 280,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Email"
            size="small"
            sx={{
              flex: 1,
              backgroundColor: "#0f0f1b",
              input: { color: "#fff" },
              "& fieldset": { borderColor: "#555" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c5ff61",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#b0f457",
              },
            }}
          >
            Subscribe to news
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #333",
          pt: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" color="gray">
          © 2023 Positivus. All Rights Reserved.
        </Typography>

        <Link sx={{ ml: 5 }} href="#" underline="hover">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
}
