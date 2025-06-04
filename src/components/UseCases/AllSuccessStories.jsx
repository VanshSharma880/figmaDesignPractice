import SectionHeading from "../SectionHeading";
import { Box } from "@mui/material";
import ArticleGrid from "../Blog/ArticleGrid";

const AllSuccessStories = () => {
  return (
    <Box>
      <SectionHeading
        title={"All Success Stories"}
        description={
          "Explore real life example of digital marketing success through our case studies"
        }
      />
      <ArticleGrid />
    </Box>
  );
};

export default AllSuccessStories;
