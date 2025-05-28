import React from "react";
import HeroSection from "../../components/HeroSection";
import IllustrationHero from "/assets/IllustrationHero.svg";
import { Box, Typography } from "@mui/material";
import ArticleGrid from "../../components/Blog/ArticleGrid";
import Article from "../../components/Blog/Article";

const Blog = () => {
  return (
    <Box sx={{ p: 5 }}>
      <HeroSection
        title="PPC vs Organic Marketing: Which One is Right for Your Business?"
        subtitle="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image={IllustrationHero}
      />
      <Article />
      <ArticleGrid />
    </Box>
  );
};

export default Blog;
