import React from 'react'
import Layout from '../Layout/Index'
import Hero from '../Home/Hero'
import SideImg from '../SideImg'
import Services from '../Services'
import FAQ from '../Faq'
import Quote from '../Quote'

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero coloredTitle={'Translation '} title={'Services'} para={'Do you want to expand your business internationally? Do you want to reduce the distance between your brand and your potential clients all over the world? Our translation agency was created with a view to bringing countries and cultures closer together and breaking down linguistic barriers.Learn more about our professional translation services!'} button1={'Contact Us'} button2={'Get A Quote Now'} img={undefined} />
        <SideImg para1={'Our translation services include text localization and translation certification.'}
          para2={'To communicate effectively in an international environment, it is essential to learn how to communicate on different channels, for different needs and realities.'}
          para3={'How? Rely on LingoYou’s professional translation services! For more than a decade we have been helping our clients create and transform content for an international audience.'}
          para4={'But what is the difference between localization and translation? The two processes are closely linked, even though they have substantial differences. Translation is the process of transferring a concept, message or text from language A to language B. Text localization, on the other hand, is the process of transforming a concept, a message or a source text in relation to the linguistic and cultural (sometimes political or religious) parameters of the target country: through localization, the new text is adapted to the target context while maintaining the meaning of the original message.'} heading={'Localization and Translation'} img={'/range.svg'} numShow={'none'} btnShow={'none'} flexDirection={'row-reverse'} padding={''} backgroundColor={''} gap={'30px'} width={'500px'} para3Display={''} para4Display={''} />
        <SideImg para1={'Thanks to a network of over 20,000 linguists, our translation agency provides professional translation services in more than 200 language combinations.'} para2={'LingoYou’s translation and localization solutions are the result of the collaboration of experienced project managers and professional linguists, selected from among the best translators and interpreters specialized in localizing texts for advertising and marketing, carefully chosen to respond in the most appropriate manner to the Client’s specific request.'} para3={''} para4={''} heading={'Why should you choose LingoYou’s translation services?'} img={'/laptop.webp'} numShow={undefined} btnShow={'none'} flexDirection={undefined} padding={''} backgroundColor={''} gap={'30px'} width={'700px'} para3Display={'none'} para4Display={'none'} />
        <Services title={'Translation & Localization'} para={'Translation services of the highest quality and professionalism. '} btntext={''} data={data} />
        <FAQ data={faqData} />
        <Quote />
      </Layout>
    </div>
  )
}

export default Index


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
    heading: "What is localization of a translation?",
    para: "Translation localization is the process of linguistic, semantic and cultural adaptation in the target language of a text, product or website in the original language for a specific target audience.s",
  },
  {
    heading: "How to count the words in a document? ",
    para: (
      <p>he words in a text are counted according to counting systems, the units of which are mainly:
        <br />
        1) Words
        <br />
        <br />
        2) Rows of 55 characters (method mainly used in Germany, Austria and Switzerland)
        <br />
        3) Folders of 1500 (or 1800 characters, if editorial) – 220 words</p>
    ),
  },
  {
    heading: "Difference between translation and localization?",
    para: "While translation is a purely linguistic transcription, localization is a process that also takes into account the cultural and social factors of the target audience. ",
  },
  {
    heading: "What is the time frame for a translation?",
    para: "The time required to complete a translation is 1-2 days, which is valid for simple translations into the most popular languages of up to 5,000 words (about 10-15 pages). Based on the above, an additional 1 day should be considered for every extra 2,500 words. ",
  },
  {
    heading:
      "How do you calculate the cost of a translation?",
    para: "Basically, the cost varies depending on the language and length of the text, and the nature of the document. In case of any repetition of content within the text, different discounts may be applied.",
  },
  {
    heading: "How long does it take to translate a website?",
    para: "Generally it takes a few days to translate a website, but it all depends on the number of pages, their length, their content and the target language. ",
  },
];
