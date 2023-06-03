import React from "react";
import Layout from "../Layout/Index";
import NewsLetter from "../NewsLetter";
import Hero from "./Hero";
import Service from "../Services";
import ContentCTA from "../ContentCTA";
import TextImageGrid from "../TextImageGrid";
import FAQ from "../Faq";
import RequestQuote from "../Quote";
import OurNumbers from "../OurNumbers";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <Hero
        coloredTitle="LingoYou:"
        title="your key to a world without language barriers"
        para="Welcome to the world of LingoYou, where we help you communicate effectively across language borders. Discover our exclusive offer: 20% discount for new customers!        "
        button1="Contact Us Now"
        button2="Get Quote Now"
        img={"/home-hero-robot.webp"}
      />
      <Service
        title={"Comprehensive and customised services"}
        para={
          "From certified, sworn and legalised translations to website localisation and multilingual marketing services, LingoYou is the right solution for companies, public administrations, associations and private individuals."
        }
        btntext={"Find Out More"}
        data={data}
      />
      <ContentCTA
        title={"Professional, fast and"}
        coloredTitle={"reliable translations"}
        para1={
          "With more than 20,000 professional translators and 200 languages supported, LingoYou is your ideal choice for high-quality translations. We proudly offer specialised translations in over 50 sectors, from legal documents to technical manuals and marketing and multimedia content. We guarantee the accuracy of our translations thanks to our native-speaker translators with at least 10 years of experience in the sector."
        }
        para2={
          "Choose LingoYou for an excellent translation service at competitive rates. Take advantage of a discount of up to 80% on repeated content and discover our free graphics service to improve the visual appearance of your translated materials. In addition, proofreading & localisation of the translated text is included in the price, guaranteeing a high-quality result appropriate to the cultural context."
        }
        para3={
          "Your time is valuable, and we know it. That is why we proudly guarantee 99.8% delivery within the agreed deadlines."
        }
      />
      <OurNumbers
      />
      <TextImageGrid />
      <FAQ data={faqData} />
      <RequestQuote />
    </Layout>
  );
};

export default Home;

const data = [
  {
    icon: "/service1.webp",
    heading: "TRANSLATION AND LOCALISATION",
    para: "We translate texts, adapt them to local realities and creatively rework them to suit all audiences. Contact the best choice of translation agencies now.",
    url: "/",
    bgColor: "rgba(122,105,230,0.3)",
    color: "#7a69e6",
  },
  {
    icon: "/service2.webp",
    heading: "MULTILINGUAL MARKETING SERVICES",
    para: "You can centralise your multilingual activities and realise campaigns that are oriented, culturally appropriate and relevant to your customers. If you are looking for technical translations, this is the right place.",
    url: "/",
    bgColor: "rgba(250,94,93,0.3)",
    color: "#fa5e5d",
  },
  {
    icon: "/service3.webp",
    heading: "CERTIFIED TRANSLATION",
    para: "We provide a certified and sworn translation service for official documents, ensuring validity and compliance in translations for official use in Italy and abroad.",
    url: "/",
    bgColor: "rgba(249,141,94,0.3)",
    color: "#f98d5e",
  },
  {
    icon: "/service4.webp",
    heading: "WEBSITES LOCALISATION",
    para: "Ensure that the messages conveyed from the first interaction are relevant to your customers, thanks to our comprehensive suite of website localisation services and tools.",
    url: "/",
    bgColor: "rgba(106,154,232,0.3)",
    color: "#6a9ae8",
  },
  {
    icon: "/service5.webp",
    heading: "MULTIMEDIA AND AUDIOVISUAL SERVICES",
    para: "We take care of all aspects of content, including video/audio synchronisation, document translations, interactive controls and all user interfaces.",
    url: "/",
    bgColor: "rgba(249,192,67,0.3)",
    color: "#f9c043",
  },
  {
    icon: "/service6.webp",
    heading: "TRANSCRIPTION SERVICE",
    para: "Whatever medium you choose, we are able to manage your content in any language easily. We ensure the highest quality translations and transcriptions anywhere and in any language to reach an international audience.",
    url: "/",
    bgColor: "rgba(247,103,180,0.3)",
    color: "#f767b4",
  },
];


const faqData = [
  {
    heading: "What is LingoYou?    ",
    para: "LingoYou is a translation and localisation agency whose mission is to break down language barriers by providing affordable, accurate and high-quality translations.    ",
  },
  {
    heading: "What are the most popular translation services?    ",
    para: "Among the most popular services are certified translation and website localisation – especially for companies expanding abroad. Recently, we have seen an upward trend in requests for subtitling and voice-over services in the business sector.",
  },
  {
    heading: "For which languages is the translation service available?    ",
    para: "The translation service is available for a wide range of languages, from the most familiar such as Indo-European (French, English, German, Spanish, etc.) to the more ‘distant’ and rare such as Sino-Tibetan and Afro-Asiatic.    ",
  },
  {
    heading: "How can you request a quote?    ",
    para: "The quote can be requested via our customer portal.",
  },
  {
    heading:
      "I am an individual customer, can I request a translation?",
    para: "Yes, of course. We provide translation services to both companies and individuals.",
  },
  {
    heading: "Why is LingoYou different from other translation services?",
    para: "Because we put our customers’ needs and requests first, providing a free 24-hour support service and delivering more than convincing and accurate localised translations.",
  },
  {
    heading:
      "What guarantee do you give on the quality of the translation?",
    para: "LingoYou offers a free quality assurance service. We submit the translation to a second translator before it is finalised and delivered, in order to certify its quality.",
  },
  {
    heading:
      "How quickly is the quote provided?   ",
    para: "For editable files, you will get the quote automatically. For non-editable files, you will receive the quote in 15 minutes.",
  },
  {
    heading:
      "Is payment for translations in advance? ",
    para: "Yes, for a better guarantee the payment is in advance.",
  },
  {
    heading: "What are the delivery times?",
    para: "Delivery times vary according to the service to be provided and its intended use.",
  },
];
