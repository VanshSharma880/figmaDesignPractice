import FAQLayout from "../FAQLayout";

const data = [
  {
    title: "Are there any additional fees or charges that may apply",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements. siness goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs",
  },
  {
    title: "Can I change or cancel my plan at any time?",
    description: "",
  },
  {
    title: "Do you offer a free trial or consultation?",
    description: "",
  },
  {
    title: "How do you bill and invoice your client?",
    description: "",
  },
  {
    title: "Are your services guaranteed to deliver results?",
    description: "",
  },
  {
    title: "Do you offer contract-based or monthly retainer-based pricing?",
    description: "",
  },
];

const FAQSection = () => {
  return <FAQLayout data={data} />;
};

export default FAQSection;
