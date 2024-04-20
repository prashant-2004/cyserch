import Hero from "./components/home/hero";
import SecendCards from "./components/home/secendCards";
import WhyChooseUs from "./components/home/whyChooseUs";
import Certificate from "./components/home/certificate";
import Blog from "./components/home/blog";
export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4"></div>
      <Hero />
      <SecendCards />
      <WhyChooseUs />
      <Blog />
      {/* <Certificate /> */}
    </>
  );
}
