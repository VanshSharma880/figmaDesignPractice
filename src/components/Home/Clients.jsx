import { Box, Grid, Typography } from "@mui/material";
import ClientLogo from "./ClientLogo";

const clients = [
  { name: "Amazon", type: "Amazon" },
  { name: "Dribbble", type: "Dribbble" },
  { name: "HubSpot", type: "HubSpot" },
  { name: "Notion", type: "Notion" },
  { name: "Netflix", type: "Netflix" },
  { name: "Zoom", type: "Zoom" },
];

const Clients = () => {
  return (
    <Box>
      <Grid container justifyContent="space-between">
        {clients.map((client) => (
          <Grid
            item
            key={client.name}
            xs={6}
            sm={4}
            md={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ClientLogo type={client.type} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clients;
