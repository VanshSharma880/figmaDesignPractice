import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TextField } from "@mui/material";
import { BlackButton } from "./mui/blackButton";
import { Link, useNavigate } from "react-router-dom";
const navItems = [
  { title: "About us", href: "/aboutUs" },
  { title: "Services", href: "/services" },
  { title: "Use Cases", href: "/useCase" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
];
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box component="footer">
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          p: 5,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        {/* Top */}
        <AppBar position="static" color="secondary" elevation={0}>
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
          >
            <Box
              component="img"
              src="/assets/LogoLight.png"
              alt="Logo"
              sx={{ height: 40, cursor: "pointer", ml: 2 }}
              onClick={() => navigate("/")}
            />

            <Box
              sx={{
                display: { xs: "row", md: "flex" },
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              {navItems.map((navItems) => (
                <Link
                  key={navItems.href}
                  to={navItems.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      m: 2,
                      color: "white",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {navItems.title}
                  </Typography>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1, mr: 2 }}>
              {[LinkedInIcon, FacebookIcon, TwitterIcon].map((Icon, idx) => (
                <Link href="#">
                  <Box
                    key={idx}
                    sx={{
                      p: 2,
                      color: "white",
                    }}
                  >
                    <Icon />
                  </Box>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Middle */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: 4,
            flexWrap: "wrap",
            my: 4,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Contact address */}
          <Box sx={{ minWidth: 250 }}>
            <Box
              sx={{
                bgcolor: "primary.main",
                borderRadius: "8px",
                display: "inline-block",
                px: 1,
                mt: 3,
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Typography variant="body1" color="black" fontWeight="bold">
                Contact us:
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ py: 2 }}>
              Email: info@positivus.com
            </Typography>
            <Typography variant="body1">Phone: 555-567-8901</Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              Address: 1234 Main St,
              <br />
              Moonstone City, Stardust State 12345
            </Typography>
          </Box>

          {/* Newsletter Subscription */}
          <Box
            sx={{
              backgroundColor: "#292A32",
              borderRadius: 2,
              p: { xs: 2, sm: 4 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              maxWidth: 500,
              width: "100%",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "#0f0f1b",
                input: { color: "white" },
                "& fieldset": { borderColor: "white" },
              }}
            />
            <BlackButton
              label={"Subscribe to news"}
              bgcolor={"primary.main"}
              textColor={"black"}
              width={{ xs: "100%", md: 300 }} // Full width on small, fixed width on larger
            />
          </Box>
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            borderTop: "1px solid white",
            pt: 3,
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },

            gap: 2,
          }}
        >
          <Typography variant="body1">
            © 2023 Positivus. All Rights Reserved.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
