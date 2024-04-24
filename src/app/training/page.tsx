import React from "react";
import Hero from "../components/training/page/hero";
import StudentStatictics from "../components/training/page/studentStatictic";
import TrainingCards from "../components/training/page/cards";
import WhyChooseUs from "../components/training/page/whyUs";

const training = () => {
  return (
    <div>
      <Hero />
      <StudentStatictics />
      <TrainingCards />
      <WhyChooseUs />
    </div>
  );
};

export default training;
