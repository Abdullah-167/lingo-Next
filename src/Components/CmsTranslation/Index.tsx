import React from 'react'
import Layout from '../Layout/Index'
import Hero from '../Home/Hero'
import ContentCTA from '../ContentCTA'
import OurNumbers from '../OurNumbers'
import SideImg from '../SideImg'
import Services from '../Services'
import Quote from '../Quote'

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero coloredTitle={'CMS '} title={'Translation'} para={'Open up to the global market and facilitate your website translation processes through website and cms translation.'} button1={'Contact Us'} button2={'Get A Quote'} img={undefined} />
        <ContentCTA para1={'Getting a professional CMS Translation means guaranteeing your customers the maximum ease and flexibility in navigating your CMS.'}
          para2={'Content Manager System Translation is essential to adapt the content of your web pages, content, articles for the Blog of your site, greatly increasing the targeting and communicability of the same.'}
          para3={'Our website translation guarantees a total and effective translation of the texts, with an organic, orderly, professional work.'}
          title={'CMS '}
          coloredTitle={'Translation'}
        />
        <div className='pb-28'>
          <OurNumbers />
        </div>
        <SideImg para1={'We know well the importance of website translation: the website is the business card of a company, a company or a brand and plays a fundamental role in influencing the choices of users. Inevitably, your company will be evaluated primarily on the basis of the content of your website. In this sense, it becomes essential to communicate the real image of your company, regardless of the source language.'}
          para2={'Through our Content Manager System translation, sharing your content with a much wider audience will be much easier. Thanks to the translation of your CMS, your customers will be able to feel at ease and get in touch with you, with the naturalness and confidence that only their native language can render.'}
          para3={''} para4={''}
          heading={'Why should you choose LingoYous CMS translation services?'} img={'/coding.webp'} numShow={'flex'} btnShow={'none'} flexDirection={'row-reverse'} padding={'0 0 0 20px'} backgroundColor={''} gap={'20px'}
        />
        <SideImg para1={'We know well the importance of website translation: the website is the business card of a company, a company or a brand and plays a fundamental role in influencing the choices of users. Inevitably, your company will be evaluated primarily on the basis of the content of your website. In this sense, it becomes essential to communicate the real image of your company, regardless of the source language.'}
          para2={'Through our Content Manager System translation, sharing your content with a much wider audience will be much easier. Thanks to the translation of your CMS, your customers will be able to feel at ease and get in touch with you, with the naturalness and confidence that only their native language can render.'}
          para3={''} para4={''}
          heading={'Why should you choose LingoYous CMS translation services?'} img={'/laptop.webp'} numShow={'none'} btnShow={undefined} flexDirection={''} padding={'0 0 0 20px'} backgroundColor={''} gap={''}
        />
        <Services title={'Translation & Localization'} para={'Translation services of the highest quality and professionalism.'} btntext={'DISCOVER MORE'} data={data} />
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