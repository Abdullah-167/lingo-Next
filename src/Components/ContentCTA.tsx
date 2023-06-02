import Link from "next/link";
import React, { FC } from "react";
import Button from "../Components/Button"
import OurNumbers from "./OurNumbers";

interface ContentCTAProps {
  para1: string;
  para2: string;
  para3: string;
  title: string;
  coloredTitle: string;

}

const ContentCTA: React.FC<ContentCTAProps> = ({ para1, para2, para3, title, coloredTitle }) => {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="max-w-[800px]">
          <h2 className="text-dark text-3xl sm:text-5xl font-bold">
            {title} <span className="text-tertiary">{coloredTitle}</span>
          </h2>
          <p className=" text-base text-grey font-medium  py-2 sm:py-8">
            {para1}
            <br />
            <br />
            {para2}
            <br />
            <br />
            {para3}
          </p>
          <Link href={"/"}>
            <Button
              text="Contact Us"
              color={"white"}
              backgroundColor={"#AC35E1"}
              minWidth={"250px"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCTA;
