import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamMemberCard = ({ name, title, experience, linkedInUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: "16px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        position: "relative",
        padding: 2,
      }}
    >
      <Box sx={{ position: "absolute", top: 8, right: 8 }}>
        <IconButton
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "black" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            backgroundColor: "#d3d3d3",
            borderRadius: "50%",
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#fff",
          }}
        >
          {/* Placeholder for image */}
          {name.charAt(0)}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#666", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#444" }}>
          {experience}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
