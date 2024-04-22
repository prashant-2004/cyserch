import Hero from "./components/home/hero";
import SecendCards from "./components/home/secendCards";
import WhyChooseUs from "./components/home/whyChooseUs";
import Industrys from "./components/home/Industrys";
import Services from "./components/home/Services";
import Certificate from "./components/home/certifications";
import Testimonials from "./components/home/Testimonials";
import Blog from "./components/home/blogs";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4"></div>
      <Hero />
      <SecendCards />
      <WhyChooseUs />
      <Certificate />
      <Industrys />
      <Services />
      <Testimonials />
      {/* <Blog /> */}
    </>
  );
}
