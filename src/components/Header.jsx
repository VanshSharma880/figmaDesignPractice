import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { title: "About us", href: "/aboutUs" },
  { title: "Services", href: "/services" },
  { title: "Use Cases", href: "/useCase" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to check if this nav item is active
  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <AppBar
      position="sticky"
      enableColorOnDark
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1.5 }}>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              mr: 2,
              cursor: "pointer",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src="/assets/Logo.png"
                alt="logo"
                onClick={() => {
                  navigate("/");
                }}
                sx={{ height: 40 }}
              />
            </Box>
          </Box>

          {/* Desktop navigation */}
          {!isMobile && (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    onClick={() => {
                      navigate(item.href);
                    }}
                    sx={{
                      mx: 1.5,
                      backgroundColor: isActive(item.href)
                        ? "primary.main"
                        : "none",
                      color: "black",
                      borderRadius: 2,
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    borderWidth: "1px",
                  }}
                >
                  Request a quote
                </Button>
              </Box>
            </>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <Menu />
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: "70%", maxWidth: "300px" } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.href);
                  handleDrawerToggle();
                }}
                sx={{
                  borderLeft: isActive(item.href)
                    ? `4px solid ${theme.palette.primary.main}`
                    : "4px solid transparent",
                  bgcolor: isActive(item.href) ? "action.selected" : "inherit",
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: isActive(item.href) ? "bold" : "normal",
                    color: isActive(item.href)
                      ? theme.palette.primary.main
                      : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <ListItemButton>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ borderRadius: "100px", borderWidth: "2px" }}
              >
                Request a quote
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
