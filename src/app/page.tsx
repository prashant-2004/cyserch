import Hero from "./components/home/hero";
import Clients from "./components/home/clients";
import SecendCards from "./components/home/secendCards";
import WhyChooseUs from "./components/home/whyChooseUs";
import Industrys from "./components/home/Industrys";
import Services from "./components/home/Services";
import Certificate from "./components/home/certifications";
import Testimonial from "./components/home/ClinetTestimonials";
import Blog from "./components/home/blogs";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4"></div>
      <Hero />
      <Clients />
      <SecendCards />
      <WhyChooseUs />
      <Certificate />
      <Industrys />
      <Services />
      <Testimonial />
      <Blog />
    </>
  );
}
