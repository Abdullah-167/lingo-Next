import React from 'react'
import Hero from '../Home/Hero'
import Layout from '../Layout/Index'
import SideImg from '../SideImg'
import OurNumbers from '../OurNumbers'
import Services from '../Services'

const Index = () => {
    return (
        <div>
            <Layout>
                <Hero
                    coloredTitle={'Audiovisual'}
                    title={'Language Services'}
                    para={'If you want your multimedia content to reach an international audience, you should choose professional, quality audiovisual and multimedia language services..'}
                    button1={'Contact Us'}
                    button2={'Get A Quote'}
                    img={undefined}
                />
                <SideImg
                    para1={'There are several ways to translate audiovisual language services and multimedia language services.Among the most common are subtitling, dubbing and voiceover.'}
                    para2={'Among the most common are subtitling, dubbing and voiceover.'}
                    para3={'Although the three types of service undoubtedly have many aspects in common, each of them has specific characteristics that differentiate them from the others.'}
                    para4={'It is a very delicate process that is not limited to a literal translation, but rather consists in the adaptation of phrases and dialogues to the target language in full respect of the original message and the strict rules of subtitling: the subtitles must be legible, short and effective and perfectly synchronized with the audiovisual content.'}
                    heading={'Audiovisual Language Services'}
                    img={'/range.svg'}
                    numShow={'none'}
                    btnShow={'none'}
                    flexDirection={'row-reverse'}
                    padding={''}
                    backgroundColor={''}
                    gap={'30px'}
                    width={'500px'}
                    para4Display={''}
                    para3Display={''}
                />
                <OurNumbers />
                <SideImg
                    para1={'LingoYou’s multimedia and audiovisual services are the result of the collaboration of expert project managers and professional linguists selected from among the best profiles of translators and interpreters, specialized in advertising and marketing and carefully chosen to respond in the most appropriate way to the Client’s specific request.'}
                    para2={''}
                    para3={''}
                    para4={''}
                    heading={'Why choose LingoYou’s audiovisual language services?'}
                    img={'/laptop.webp'}
                    numShow={''}
                    btnShow={'none'}
                    flexDirection={'row-reverse'}
                    padding={''}
                    backgroundColor={''}
                    gap={'30px'}
                    width={'500px'}
                    para4Display={'none'}
                    para3Display={'none'}
                />
                <Services
                    title={''}
                    para={''}
                    btntext={''}
                    data={undefined}
                />
            </Layout>
        </div>
    )
}

export default Index