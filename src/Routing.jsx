import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import UseCase from "./pages/useCases/UseCase";
import Blog from "./pages/blog/Blog";
import Services from "./pages/services/Services";
import Pricing from "./pages/pricing/Pricing";
import Layout from "./components/Layout";
import { ScrollUp } from "./hooks/scrollUp";

const Routing = () => {
  return (
    <BrowserRouter>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="useCase" element={<UseCase />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
