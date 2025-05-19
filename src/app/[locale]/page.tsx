import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import SuccessStories from "@/components/home/SuccessStories";
import WhyMIGO from "@/components/home/WhyMIGO";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <WhyMIGO />
      <SuccessStories />
      <Contact />
    </div>
  );
};

export default Home;
