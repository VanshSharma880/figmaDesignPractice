import { Box } from "@mui/material";
import GridDividerSection from "../GridDividerSection";

const data = [
  {
    id: 1,
    title: "E-Commerce fashion Brand's SEO Myths Debunked",
    description:
      "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
  },
  {
    id: 2,
    title: "Local Business Boosts ROI with Social Media Ads",
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
      "From headlines to call-to-actions, small tweaks can make a big difference. to use A/B testing to refine your marketing strategies.",
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
      "Artificial intelligence is  target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.",
  },
];

const AllSuccessStories = () => {
  return (
    <Box>
      <GridDividerSection data={data} />
    </Box>
  );
};

export default AllSuccessStories;
