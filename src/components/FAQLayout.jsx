import React, { useState } from "react";
import { Box, Typography, Divider, Fab, Collapse, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function FAQLayout({ data }) {
  const [expanded, setExpanded] = useState(0);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <Box>
      {data.map((data, index) => {
        const isActive = expanded === index;
        return (
          <Box
            key={index}
            sx={{
              backgroundColor: isActive ? "primary.main" : "tertiary.main",
              color: isActive ? "black" : "inherit",
              borderRadius: 8,
              my: 2,
              px: 3,
              py: 4,
              boxShadow: "0px 4px 0 #000",
              cursor: "pointer",
            }}
            onClick={() => toggleExpand(index)}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h3" fontWeight="bold">{`0${
                index + 1
              }`}</Typography>
              <Typography variant="h6" fontWeight="medium">
                {data.title}
              </Typography>
              <Box flexGrow={1} />
              <Fab
                size="small"
                sx={{
                  border: 1,
                  borderColor: "black",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                {isActive ? <RemoveIcon /> : <AddIcon />}
              </Fab>
            </Stack>

            <Collapse in={isActive}>
              <Divider sx={{ my: 2, borderColor: "black" }} />
              <Typography variant="body1" sx={{ pb: 2 }}>
                {data.description || "Details coming soon."}
              </Typography>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}
