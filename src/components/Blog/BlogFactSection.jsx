import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const BlogFactSection = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              border: 1,
              borderRadius: 5,
              p: 2,
              boxShadow: "0 4px 0 #000",
              textAlign: "left",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="body1">
                Business earn an average of
              </Typography>
              <Typography variant="h3" sx={{ py: 2 }}>
                $2 for Every $1 Spent
              </Typography>
              <Typography variant="body1">on PPC advertising</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: 5,
              p: 2,
              textAlign: "left",
            }}
          >
            <Box sx={{ p: 2.2 }}>
              <Typography variant="h3" sx={{ py: 2 }}>
                41% of Clicks
              </Typography>
              <Typography variant="body1" maxWidth={600}>
                on search engine go to the top three organic results, showing
                the importance of ranking highly
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              backgroundColor: "tertiary.main",
              borderRadius: 5,
              p: 1,
              textAlign: "left",
            }}
          >
            <Box sx={{ p: 4 }}>
              <Box sx={{ py: 1 }}>
                <Typography variant="body1" display={"inline-block"}>
                  Content marketing cost
                </Typography>
                <Typography
                  variant="h3"
                  display={"inline-block"}
                  sx={{ ml: 3 }}
                >
                  62% less than paid add
                </Typography>
              </Box>
              <Box sx={{ py: 1 }}>
                <Typography variant="body1" display={"inline-block"}>
                  but generates
                </Typography>
                <Typography
                  variant="h3"
                  display={"inline-block"}
                  sx={{ ml: 3 }}
                >
                  3x as many leads
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: 5,
              p: 2,
              textAlign: "left",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" color="white">
                Organic search drives
              </Typography>
              <Typography variant="h3" sx={{ py: 2 }} color="white">
                <Typography
                  variant="h3"
                  color="primary.main"
                  display={"inline-block"}
                >
                  53%
                </Typography>{" "}
                of all website traffic,
              </Typography>
              <Typography variant="body1" color="white">
                making it the largest single source of traffic
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogFactSection;
