import Image from "next/image";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Button from "./Button";
import React, { FC, useEffect, useState } from "react";

interface SideImgProps {
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    heading: string;
    img: any;
    numShow: any;
    btnShow: any;
    flexDirection: any;
    padding: string;
    backgroundColor: string;
    gap: any;
    width: any;
    para4Display: string;
    para3Display: string;
}

const SideImg: React.FC<SideImgProps> = ({ para1, para2, para3, para4, heading, img, numShow, btnShow, flexDirection, padding, backgroundColor, gap, width, para4Display, para3Display }) => {

    const [count, setCount] = useState(0);

    const declaredNum = 500;

    useEffect(() => {
        if (count < declaredNum) {
            const timeOutId = setTimeout(() => {
                setCount(count + 25);
            }, 100);

            return () => clearTimeout(timeOutId);
        }
    }, [count]);
    const locale = GetLocale();
    //@ts-ignore
    const slug = `/${locale}/${freeQuoteSlug[locale]}`;
    return (
        <div className="imgcontainer">
            <div style={
                {
                    display: 'flex',
                    flexDirection: flexDirection,
                    gap: gap,
                    justifyContent: 'center'
                }
            }
                className=" items-center  ">
                <div className={`max-w-[${width}]`}>
                    <Image src={img} alt={"img"} width={1000} height={1000} />
                </div>
                <div
                    style={{
                        backgroundColor: backgroundColor
                    }}
                >
                    <div
                        style={{
                            padding: padding,

                        }}
                        className="py-8 sm:pt-28">
                        <div className="">
                            <div className="max-w-[500px]">
                                <h2 className="text-[#333333] text-[30px] sm:text-[35px] font-bold ">
                                    {heading}
                                </h2>
                                <p className=" text-base text-[#666666] font-medium  mx-auto  py-3">
                                    {para1}
                                </p>
                                <p className=" text-base text-[#666666] font-medium  mx-auto  pb-3">
                                    {para2}
                                </p>
                                <p style={{
                                    display: para3Display
                                }} className=" text-base text-[#666666] font-medium  mx-auto  pb-3">
                                    {para3}
                                </p>   <p style={{
                                    display: para4Display
                                }} className=" text-base text-[#666666] font-medium  mx-auto  pb-3">
                                    <p className=" text-base text-[#666666] font-medium  mx-auto  pb-3">
                                        {para4}
                                    </p>

                                </p>

                            </div>
                        </div>
                        <div
                            style={{
                                display: numShow
                            }}
                            className="">
                            <div className="">
                                <div className="flex flex-col md:flex-row gap-x-5 pb-8">
                                    {counting.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <p
                                                    className=" text-3xl font-medium text-center"
                                                    style={{
                                                        color: item.color,
                                                    }}
                                                >
                                                    {count >= declaredNum ? item.num : count}
                                                </p>
                                                <p
                                                    className="text-base font-medium text-center"
                                                    style={{
                                                        color: item.color2,
                                                    }}
                                                >
                                                    {item.text}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <span
                            style={{
                                display: btnShow
                            }}
                        >
                            <Button text={"Contact Us Now"} color={"white"} backgroundColor={"#AC35E1"} minWidth={undefined} />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideImg;


const counting = [
    {
        num: "250",
        text: "LANGUAGES",
        color: "#8300E9",
        color2: "#8300E9",
    },
    {
        num: "99%",
        text: "Client Retention",
        color: "#2EA3F2",
        color2: "#0c71c3",
    },
];