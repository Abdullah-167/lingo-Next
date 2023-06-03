import React from "react";
import Hero from "../Home/Hero";
import Layout from "../Layout/Index";
import ContentCTA from "../ContentCTA";
import OurNumbers from "../OurNumbers";
import SideImg from "../SideImg";
import Services from "../Services";
import Quote from "../Quote";

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
      <ContentCTA
        para1={"The acronym DTP (DeskTop Publishing, a term borrowed from English that literally means “desktop publishing”) refers to all the techniques for the creation and layout of editorial content, translation of texts and editorial material."}
        para2={"A desktop publishing service allows you to create editorial content in multiple languages, ensuring a highly professional end result. DTP of content, text and images in editorial projects such as brochures, leaflets or magazines is an extremely delicate task, especially when it comes to transferring content from a source language to a different target language: the final product must faithfully reflect the original not only from a linguistic, stylistic and cultural point of view, but also from a strictly editorial point of view, being fully in line with the characteristics, tone and intentions of the original message."} para3={""}
        title={"DTP "}
        coloredTitle={"Service"}
      />
      <OurNumbers />
      <SideImg
        para1={"For more than ten years we have been helping our clients with content creation and transformation using dtp software."}
        para2={"When you choose LingoYou’s text translation solutions, you are putting your trust in experienced project managers and professional translators who specialize in advertising and marketing and who have been carefully selected to meet your specific requirements."}
        para3={"After a preliminary evaluation of the overall structure of your material, aimed at ensuring a layout that is faithful to the original publication, our team of linguists will work to guarantee you an excellent result in every respect."}
        para4={""}
        heading={"Why choose LingoYou's Desktop Publishing services?"}
        img={'/girlLingo.webp'}
        numShow={'none'}
        btnShow={'Contact Us'}
        flexDirection={undefined}
        padding={""}
        backgroundColor={""}
        gap={'30px'}
        width={undefined}
        para4Display={""}
        para3Display={""}
      />
      <SideImg
        para1={"We strive for excellence."}
        para2={"Only the best professionals work with us. We have the experience and skills to ensure you always receive professional and quality service. We firmly believe in what we do and we put all our efforts in the service of the customer."}
        para3={"After a preliminary evaluation of the overall structure of your material, aimed at ensuring a layout that is faithful to the original publication, our team of linguists will work to guarantee you an excellent result in every respect."}
        para4={"Our agency grows every day with success thanks to a team of experts and concrete results. The satisfaction of our customers is our greatest gratification."}
        heading={"Our strengths"}
        img={'/laptop.webp'}
        numShow={''}
        btnShow={'none'}
        flexDirection={'row-reverse'}
        padding={""}
        backgroundColor={""}
        gap={'30px'}
        width={'700px'}
        para4Display={""}
        para3Display={""}
      />
      <Services title={"Translation & Localization"} para={"Translation services of the highest quality and professionalism.."} btntext={"DISCOVER MORE"} data={data} />
      <Quote />
    </Layout>
  );
};

export default index;


const data = [
  {
    icon: "/service1.webp",
    heading: "APP TRANSLATION",
    para: "We take care of all the steps necessary to develop your APP together: from simple systems to more complex architectures.",
    url: "/",
    bgColor: "rgba(122,105,230,0.3)",
    color: "#7a69e6",
  },
  {
    icon: "/service2.webp",
    heading: "GRAPHIC LAYOUT SERVICES",
    para: "DTP service in 200 languages, including Asian and Bustrofed (from right to left), to deliver you a ready-to-print file.",
    url: "/",
    bgColor: "rgba(250,94,93,0.3)",
    color: "#fa5e5d",
  },
  {
    icon: "/service3.webp",
    heading: "MACHINE TRANSLATION",
    para: "Contact us to find out how you can maximize your overall translation investment by taking a customized approach to Machine Translation (MT).",
    url: "/",
    bgColor: "rgba(249,141,94,0.3)",
    color: "#f98d5e",
  },
  {
    icon: "/service4.webp",
    heading: "TEXT REVISION",
    para: "Our Translation Review service ensures linguistic accuracy to everything your business needs.",
    url: "/",
    bgColor: "rgba(106,154,232,0.3)",
    color: "#6a9ae8",
  },
  {
    icon: "/service5.webp",
    heading: "WEBSITE LOCALIZATION",
    para: "Ensure that the messages conveyed from the first interaction are relevant to customers across the globe with our full suite of website localization services and tools.",
    url: "/",
    bgColor: "rgba(249,192,67,0.3)",
    color: "#f9c043",
  },
  {
    icon: "/service6.webp",
    heading: "TRANSLATION OF CMS",
    para: "We locate the original files of your App or software and then test them, saving you the hassle of copy and paste.",
    url: "/",
    bgColor: "rgba(247,103,180,0.3)",
    color: "#f767b4",
  },
];



