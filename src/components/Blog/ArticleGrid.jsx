import React from "react";
import { Box, Grid, Divider, Container } from "@mui/material";
import ArticleCard from "./ArticleCard";
import SectionHeading from "../SectionHeading";

const articles = [
  {
    id: 1,
    title: "10 SEO Myths You Need to Stop Believing",
    description:
      "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
  },
  {
    id: 2,
    title: "Maximizing ROI with Social Media Advertising",
    description:
      "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.",
  },
  {
    id: 3,
    title: "How Content Marketing Fuels Long-Term Growth",
    description:
      "Content isn't just king—it's the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.",
  },
  {
    id: 4,
    title: "The Art of A/B Testing: Perfecting Your Campaigns",
    description:
      "From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.",
  },
  {
    id: 5,
    title: "Understanding Google's Latest Algorithm Update",
    description:
      "Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
  },
  {
    id: 6,
    title: "5 Ways AI is Changing Digital Marketing",
    description:
      "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.",
  },
];

const ArticleGrid = () => {
  return (
    <Box>
      <SectionHeading
        title={"Explore more insights"}
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box
          sx={{
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
          }}
        >
          <Grid container columns={{ xs: 1, sm: 1, md: 12 }}>
            {articles.map((article) => {
              return (
                <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
                  <ArticleCard
                    title={article.title}
                    description={article.description}
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

export default ArticleGrid;

// import { Paper } from "@mui/material";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// export default function ArticleGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         columns={{ xs: 1, sm: 1, md: 12 }}
//       >
//         {Array.from(Array(6)).map((_, index) => (
//           <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
//             <Paper>{index + 1}</Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// import {
//   Box,
//   Container,
//   Divider,
//   Grid,
//   Paper,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import React from "react";
// import ArticleCard from "./ArticleCard";

// const ArticleGrid = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 5 }}>
//       <Box
//         sx={{
//           border: "1px solid #e2e8f0",
//           borderRadius: "16px",
//         }}
//       >
//         <Grid container spacing={{ xs: 2, md: 3 }}>
//           {Array.from(Array(6)).map((_, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <ArticleCard
//                 title={`Article Title ${index + 1}`}
//                 description={`This is the description for article ${
//                   index + 1
//                 }.`}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ArticleGrid;
