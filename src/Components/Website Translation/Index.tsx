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
                    coloredTitle={'Website '}
                    title={'Translation'}
                    para={'Rely on our web page translators for website translation services. Your content will be accessible to a wider and more diverse audience.'}
                    button1={'Contact Us'}
                    button2={'Get A Quote'}
                    img={undefined}
                />
                <ContentCTA
                    para1={'An accurate and flawless website translation service is the secret of companies that approach the international market.'}
                    para2={'The website is the business card of a company, corporation or brand and plays a key role in influencing user choices. Inevitably, your company will be evaluated mainly on the basis of the contents of your website. In this sense, it becomes essential to be able to communicate the real image of your company, regardless of the source language: through website translation, your brand will gain prominence in the web world and your offer will be known globally.'}
                    para3={''}
                    title={'translation service'}
                    coloredTitle={'Website '}
                />
                <OurNumbers />
                <SideImg
                    para1={'Whether it’s a website translation, or the translation of an e-commerce site, it’s not enough to transfer content from one language to another. It would result in a mere literal translation, which would be of little use in bringing your site closer to a user who speaks another language.'}
                    para2={'That’s why it’s best to rely on a professional translation agency.'}
                    para3={'We’ll put our translators’ linguistic, cultural and specialized skills at your complete disposal, so you can transform the content of your website and achieve your global goals.'}
                    para4={''}
                    heading={'Why should you choose LingoYous website translation services?'}
                    img={'/pinkLaptop.webp'}
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