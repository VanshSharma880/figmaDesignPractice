import { Box, Container, Grid } from "@mui/material";
import React from "react";
import DividerCard from "./DividerCard";

const GridDividerSection = ({ data }) => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box
          sx={{
            border: 1,
            boxShadow: "0 4px 0 #000",
            borderRadius: 10,
            p: 2,
          }}
        >
          <Grid container spacing={0} columns={{ xs: 1, sm: 1, md: 12 }}>
            {data.map((data, index) => {
              const totalCols = 3; // 3 cards per row
              const totalRows = Math.ceil(data.length / totalCols);
              const currentRow = Math.floor(index / totalCols);
              const currentCol = index % totalCols;

              const showTopBorder = currentRow > 0;
              const showLeftBorder = currentCol > 0;
              const showRightBorder = currentCol < totalCols - 1;
              const showBottomBorder = currentRow < totalRows - 1;

              return (
                <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
                  <DividerCard
                    title={data.title}
                    description={data.description}
                    showTopBorder={showTopBorder}
                    showLeftBorder={showLeftBorder}
                    showRightBorder={showRightBorder}
                    showBottomBorder={showBottomBorder}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default GridDividerSection;
