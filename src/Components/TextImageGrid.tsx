import Image from "next/image";
import GetLocale from "@/hooks/getLocale";
import Link from "next-translate-routes/link";
import { freeQuoteSlug } from "@/utils";
import Button from "./Button";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const TextImageGrid = () => {
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const data = [
    {
      heading: "LingoYou: Professional translation agency",
    },
    {
      text: (
        <p>
          We have a team of experts ready to respond to your needs at any time.
          You can count on us for delivery within 24 hours and 24/7
          availability. In addition, we do not apply additional costs for
          priority service and allow you to choose the delivery date.
          <br />
          <br />
          Our quality is certified through ISO-9001: 2015 and ISO 17100: 2017
          standards. Request a free and immediate quote to find out how
          convenient it is to rely on LingoYou.
          <br />
          <br />
          We offer quality customer service 24/7, with specialist language and
          sector-specific expertise, to ensure your content is always relevant
          and culturally appropriate.
          <br />
          <br />
          Do not wait any longer; contact LingoYou and learn how we can help you
          communicate without language barriers!
        </p>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-20 ">
        <div className="py-8 sm:py-28">
          <div className="mb-10">
            {data.map((item, index) => {
              return (
                <div className="" key={index}>
                  <h2 className="text-[#333333] text-[30px] sm:text-[45px] font-bold leading-10 sm:leading-[60px]">
                    {item.heading}
                  </h2>
                  <p className=" text-base text-[#666666] font-medium max-w-[795px] mx-auto  py-2 sm:py-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full ">
          <LiteYouTubeEmbed id="UT2yzwIxBOg" title="sddsfsd" />
        </div>
      </div>
    </div>
  );
};

export default TextImageGrid;
