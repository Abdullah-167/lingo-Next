import React from 'react'
import Layout from '../Layout/Index'
import Hero from '../Home/Hero'
import ContentCTA from '../ContentCTA'
import OurNumbers from '../OurNumbers'
import SideImg from '../SideImg'
import Quote from '../Quote'
import Services from '../Services'

const Index = () => {
    return (
        <div>
            <Layout>
                <Hero coloredTitle={'App '} title={'Translation'} para={'Do you want your app to be translated into multiple languages? With LingoYou’s app translation services, your apps will allow you to expand your business on the international market, reaching an increasingly wide and diverse audience.'}
                    button1={'Contact Us'}
                    button2={'Get A Quote'}
                    img={undefined}
                />
                <ContentCTA
                    para1={'The app translation service offered by our company is bug-proof! The widespread diffusion of the digital sector and new technologies has contributed decisively to the birth of endless applications to be installed on devices such as smartphones, tablets and PCs.If you wanted to download any application, which language would you choose? Clearly yours.'}
                    para2={'That’s why companies that take care of providing different options to users in language selection are the ones that achieve the greatest success in international markets. iOs app translation or Android app translation, our translators know no obstacles.'}
                    para3={'Choosing to use an app translation service will allow your product to reach users all over the world and expand your business globally.'}
                    coloredTitle={'translation service'}
                    title={'App'}
                />
                <div className='pb-24'>
                    <OurNumbers />
                </div>
                <div className='pb-20'>
                    <SideImg para1={'Providing application translation services requires specific skills that are not only linguistic and cultural, but also related to the sector in question.'}
                        para2={'Depending on the type of application, the translator will need to be familiar with the specific language and terminology, possess precise skills in advertising and marketing, and always respect the meaning and intent of the original content.'}
                        para3={'Our team of professionals will help you make your application known worldwide by providing a professional translation service.'}
                        heading={'Why should you choose LingoYous app translation services?'} para4={''} img={'/languageImg.webp'} numShow={'nonw'} btnShow={'flex'} flexDirection={''} padding={'0 50px 0 0'} backgroundColor={''} gap={'40px'} />
                </div>
                <SideImg para1={'We strive for excellence.iOs app translation or Android app translation, there is no stopping us.'}
                    para2={'We have the experience and the skills to ensure you always receive a professional and quality service. We firmly believe in what we do and we put all our efforts into serving our clients.'}
                    para3={'Our agency grows every day with success thanks to a team of experts and concrete results.'}
                    para4={'The satisfaction of our customers is our greatest gratification.'}
                    heading={'Our strengths'} img={'/laptop.webp'} numShow={'flex'} btnShow={'none'} flexDirection={'row-reverse'} padding={'100px 20px 100px 50px'} backgroundColor={'#F7F7F7'} gap={undefined} />
                <Services title={'Translation & Localization'} para={'Translation services of the highest quality and professionalism.'} btntext={'DISCOVER MORE'} data={data}
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