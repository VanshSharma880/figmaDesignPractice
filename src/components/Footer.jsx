import { Box, Typography, Link, TextField, Button, Stack } from "@mui/material";
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
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
        <Box sx={{ minWidth: 500 }}>
          <Box
            component="img"
            src="/assets/LogoLight.png"
            onClick={() => {
              navigate("/");
            }}
          />

          <Box
            sx={{
              bgcolor: "primary.main",
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
          borderTop: "1px solid",
          pt: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">
          © 2023 Positivus. All Rights Reserved.
        </Typography>

        <Link sx={{ ml: 5 }} href="#" underline="1">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
}
