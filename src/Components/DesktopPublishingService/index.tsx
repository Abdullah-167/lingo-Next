import React from "react";
import Hero from "../Home/Hero";
import Layout from "../Layout/Index";

const index = () => {
  return (
    <Layout>
      <Hero
        coloredTitle="DTP services"
        title="for your company"
        para="Ensure your document has a professional layout, quality design and consistent content with LingoYou’s desktop publishing services.        "
        button1="Contact Us Now"
        button2="Get Quote Now"
        img={"/robo2.webp"}
      />
    </Layout>
  );
};

export default index;
