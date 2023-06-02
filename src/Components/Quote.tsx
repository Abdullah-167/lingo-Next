import Button from "./Button";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import BgImage from "../../public/frame3.png";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";
const Quote = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  return (
    <div
      className="main-cpmBg py-10"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}
    >
      <div className="container">
        <div>
          <div>
            <h5 className="text-2xl text-white font-medium text-center pt-10 pb-8 leading-1">
            {"Let's"} Work Together!
            </h5>
            <h2 className="text-2xl sm:text-4xl md:text-5xl md:leading-[55px] font-semibold text-center text-white pb-10">
            At LingoYou we work with a team who are able to provide translations into more than 200 languages.
            </h2>
          </div>
          <Link href={slug}>
            <div className="flex justify-center">
              <Button
                text={"Contact Us"}
                color={"black"}
                backgroundColor={"white"}
                minWidth={undefined}
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-center gap-5 items-center">
          {iconData.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quote;

const iconData = [
  {
    url: "https://www.facebook.com/profile.php?id=100068384772421",
    icon: <FaFacebookF />,
  },
  {
    url: "https://twitter.com/Lingoyou3",
    icon: <AiOutlineTwitter />,
  },
  {
    url: "https://www.instagram.com/lingo_you/",
    icon: <IoLogoInstagram />,
  },
  {
    url: "https://www.youtube.com/channel/UCfzCEdLjljgwafHiWwEmemA",
    icon: <BsYoutube />,
  },
];
