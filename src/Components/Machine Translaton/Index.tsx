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
                <Hero
                    coloredTitle={'Machine '}
                    title={'Translation'}
                    para={'When traditional translation is not possible, or if you want to speed up the work of the translator, machine translation is the most effective solution.Learn more about LingoYou’s machine translation services.'}
                    button1={'Contact Us'}
                    button2={'Get A Quote'}
                    img={undefined}
                />
                <ContentCTA
                    para1={'Machine translation is the automatic process of translating a text from a source language into a target language.'}
                    para2={'Taking advantage of advances in artificial intelligence, machine translation speeds up the work of the translator and saves time and money; moreover, thanks to recent innovations in the field of machine translation, the accuracy of this type of translation has improved dramatically over the years. Nonetheless, the human translator’s contribution remains indispensable, offering more secure and precise results, capturing cultural aspects, idiomatic expressions or typical expressions of the target language, which the machine cannot grasp.'}
                    para3={''}
                    title={'Machine '}
                    coloredTitle={'translation service '}
                />
                <OurNumbers />
                <SideImg
                    para1={'Whether it’s a website translation, or the translation of an e-commerce site, it’s not enough to transfer content from one language to another. It would result in a mere literal translation, which would be of little use in bringing your site closer to a user who speaks another language.'}
                    para2={'That’s why it’s best to rely on a professional translation agency.'}
                    para3={'We’ll put our translators’ linguistic, cultural and specialized skills at your complete disposal, so you can transform the content of your website and achieve your global goals.'}
                    para4={''}
                    heading={'Why should you choose LingoYous website translation services?'}
                    img={'/roboLap.webp'}
                    numShow={'none'}
                    btnShow={undefined}
                    flexDirection={undefined}
                    padding={''}
                    backgroundColor={''}
                    gap={'30px'}
                    width={'700px'}
                    para4Display={''}
                    para3Display={''}
                />
                <SideImg
                    para1={'We strive for excellence.'}
                    para2={'Only the best professionals work with us.'}
                    para3={'We have the experience and skills to ensure you always receive professional and quality service. We firmly believe in what we do and we put all our efforts in the service of the customer.'}
                    para4={'Our agency grows every day with success thanks to a team of experts and concrete results. The satisfaction of our customers is our greatest gratification.'}
                    heading={'Our strengths'}
                    img={'/laptop.webp'}
                    numShow={''}
                    btnShow={'none'}
                    flexDirection={'row-reverse'}
                    padding={''} backgroundColor={''}
                    gap={'30px'} width={'700px'}
                    para4Display={''}
                    para3Display={''}
                />
                <Services
                    title={'Translation & Localization'}
                    para={'Translation services of the highest quality and professionalism.'}
                    btntext={'DISCOVER MORE'}
                    data={data}
                />
                <Quote />
            </Layout>
        </div>
    )
}

export default Index


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
        para: " We locate the original files of your App or software and then test them, saving you the hassle of copy and paste.",
        url: "/",
        bgColor: "rgba(247,103,180,0.3)",
        color: "#f767b4",
    },
];