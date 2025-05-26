import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { Box } from "@mui/material";

const TeamSection = () => {
  return (
    <Box style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <TeamMemberCard
        name="John Smith"
        title="CEO & Founder"
        experience="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        linkedInUrl="https://linkedin.com/in/johnsmith"
      />
      <TeamMemberCard
        name="Jane Doe"
        title="Director of Operations"
        experience="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        linkedInUrl="https://linkedin.com/in/janedoe"
      />
      <TeamMemberCard
        name="Jane Doe"
        title="Director of Operations"
        experience="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        linkedInUrl="https://linkedin.com/in/janedoe"
      />
      <TeamMemberCard
        name="Jane Doe"
        title="Director of Operations"
        experience="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        linkedInUrl="https://linkedin.com/in/janedoe"
      />
      <TeamMemberCard
        name="Jane Doe"
        title="Director of Operations"
        experience="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        linkedInUrl="https://linkedin.com/in/janedoe"
      />
      {/* Add other team members similarly */}
    </Box>
  );
};

export default TeamSection;
