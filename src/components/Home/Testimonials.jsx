import { Box } from "@mui/material";
import SectionHeading from "../SectionHeading";

const Testimonials = () => {
  return (
    <Box sx={{ p: 5 }}>
      <SectionHeading
        title={"Testimonials"}
        description={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />
      <Box
        sx={{
          py: 5,
          px: 2,
          position: "relative",
          bgcolor: "secondary.main",
          borderRadius: "30px",
        }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 500,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
