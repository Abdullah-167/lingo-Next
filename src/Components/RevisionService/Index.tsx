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
                    coloredTitle={'Text'}
                    title={'revision '}
                    para={'It is not enough for a text to be translated into a language other than the original to be translated well.Our proofreading and translation services will provide you with accuracy and quality.'}
                    button1={'Contact Us'}
                    button2={'Get A Quote'}
                    img={undefined}
                />
                <ContentCTA
                    para1={'Our proofreading will exceed your expectations, as we work with the understanding that providing proofreading and translation services for companies is never as easy as it sounds.'}
                    para2={'Every self-respecting translation job must undergo an accurate translation revision process, carried out by a professional translator with skills related to the type of text, the sector of reference, and the technical terminology.'}
                    para3={'After a preliminary careful analysis of the accuracy of the translation, the reviser proceeds to correct any linguistic, lexical or stylistic errors, check the coherence and fluidity of the text and, only after further proofreading and checks, determines that the final product is ready for delivery. Try our text translation service, you will notice the difference!'}
                    title={'Translation '}
                    coloredTitle={'proofreading service'}
                />
                <OurNumbers />
                <SideImg
                    para1={'LingoYou’s linguists are selected from among the best translators and interpreters in order to guarantee the client a professional, high-quality proofreading service.'}
                    para2={'Your text undergoes a thorough proofreading and translation process, with corrections of any typos, repetitions, omissions or typographical, layout, formatting, grammatical, orthographic, syntactical, lexical or stylistic errors.'}
                    para3={'Only at the end of the proofreading and text optimization process will your translation be complete and ready for delivery.'}
                    para4={''}
                    heading={'Why should you choose our proofreading services?'}
                    img={'/lingolaptop.webp'}
                    numShow={'none'}
                    btnShow={undefined}
                    flexDirection={undefined}
                    padding={''} backgroundColor={''}
                    gap={'30px'} width={'700px'}
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
                    para={'Proofreading and translation services of the highest quality and professionalism.'}
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
