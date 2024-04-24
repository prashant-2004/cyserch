import React from "react";
import Hero from "../components/training/page/hero";
import StudentStatictics from "../components/training/page/studentStatictic";
import TrainingCards from "../components/training/page/cards";
import WhyChooseUs from "../components/training/page/whyUs";
import Course from "../components/training/page/couse";

const training = () => {
  return (
    <div>
      <Hero />
      <StudentStatictics />
      <WhyChooseUs />
      <TrainingCards />
      <Course />
    </div>
  );
};

export default training;
