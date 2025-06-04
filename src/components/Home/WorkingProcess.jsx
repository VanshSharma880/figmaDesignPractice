import FAQLayout from "../FAQLayout";

const data = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description: "",
  },
  {
    title: "Implementation",
    description: "",
  },
  {
    title: "Monitoring and Optimization",
    description: "",
  },
  {
    title: "Reporting and Communication",
    description: "",
  },
  {
    title: "Continual Improvement",
    description: "",
  },
];
const WorkingProcess = () => {
  return <FAQLayout data={data} />;
};

export default WorkingProcess;
