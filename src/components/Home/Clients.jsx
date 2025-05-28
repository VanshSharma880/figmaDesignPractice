import { Box, Grid } from "@mui/material";
import ClientLogo from "./ClientLogo";

// Mock logos using Lucide icons
const clients = [
  { name: "Amazon", type: "amazon" },
  { name: "Dribbble", type: "dribbble" },
  { name: "HubSpot", type: "hubspot" },
  { name: "Notion", type: "notion" },
  { name: "Netflix", type: "netflix" },
  { name: "Zoom", type: "zoom" },
];

const Clients = () => {
  return (
    <Box
      sx={{
        py: { xs: 3, md: 4 },
      }}
    >
      <Grid container justifyContent="space-evenly" alignItems="center">
        {clients.map((client) => (
          <Grid
            item
            key={client.name}
            xs={6}
            sm={4}
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ClientLogo type={client.type} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clients;
