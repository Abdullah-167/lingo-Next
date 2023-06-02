import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'

interface heroProps {
  coloredTitle: string;
  title: string;
  para: string;
  button1: string;
  button2: string;
  img: any
}


const Hero: React.FC<heroProps> = ({ coloredTitle, title, para, button1, button2, img }: any) => {
  return (
    <div className='home-bgMain relative'>
      <div className='container'>
        <div className="header flex justify-between sm:gap-20 items-center">
          <div className="pb-10 sm:pb-12 sm:pl-10 md:pl-20">
            <div>
              <h2 className="text-4xl md:text-[60px] text-white font-bold  xl:max-w-[651px] leading-[50px] sm:leading-[65px] pb-7">
                <span className="text-tertiary">{coloredTitle}</span> {title}
              </h2>
              <p className="text-base sm:text-xl font-medium text-white  xl:max-w-[750px] mb-10 sm:mb-14 leading-8">
                {para}
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-x-5  gap-y-3">
              <Link href={"/"}>
                <Button
                  text={button1}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={"250px"}
                />
              </Link>
              <Link href={"/"}>
                <Button
                  text={button2}
                  color={"black"}
                  backgroundColor={"white"}
                  minWidth={"250px"}
                />
              </Link>
            </div>
          </div>
          <div className="mx-auto  md:w-[500px] mt-10 sm:mt-20  md:h-[600px] overflow-hidden relative">
            <Image
              loading="lazy"
              className="image"
              src={"/home-hero-robot.webp"}
              alt={"women"}
              width={1000}
              height={0}
            />
          </div>
        </div>
        <div className='absolute -left-10 bottom-0'>
          <Image loading='lazy' className='image' src={"/section-bg-triangle.webp"} alt='graphic' width={700} height={0} />
        </div>
      </div>
    </div>
  )
}

export default Hero