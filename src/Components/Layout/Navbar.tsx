import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { MdSupportAgent } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaWindows, FaHands } from "react-icons/fa";
import Link from "next-translate-routes/link";
import FlagSelect from "./FlagSelect";
import useTranslation from "@/hooks/useTranslation";
import useClickOutside from "use-click-outside";
import { IoMdArrowDropdown } from "react-icons/io";

interface NavItem {
  mainText: string;
  path: string;
  innerText?: {
    label: string;
    icon: JSX.Element;
    path: string;
  }[];
}

const Navbar: React.FC = () => {
  const ref = useRef();
  const [serviceMenu, setServiceMenu] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const [activeIndex, setActiveIndex] = useState<any>(false);
  const [activeIndex2, setActiveIndex2] = useState<any>(false);
  const [activeIndex3, setActiveIndex3] = useState<any>(false);


  const hanldeDropDown = () => {
    setActiveIndex(!activeIndex)
  }
  const hanldeDropDown2 = () => {
    setActiveIndex2(!activeIndex2)
  }
  const hanldeDropDown3 = () => {
    setActiveIndex3(!activeIndex3)
  }


  const [activeClass, setActiveClass] = useState<string>();
  const closeHanlder = () => {
    setServiceMenu(false);
  };
  useClickOutside(ref as any, closeHanlder);
  const handleNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setActiveClass("animation");
    } else {
      document.body.style.overflow = "auto";
      setActiveClass("");
    }
  }, [open]);

  const { t } = useTranslation();

  const serviceMenuData = [

    {
      label: t("firstDropDown2"),
      path: "translation-and-localization/desktop-publishing-service",
    },
    {
      label: t("firstDropDown3"),
      path: "translation-and-localization/revision-service",
    },
    {
      label: t("firstDropDown4"),
      path: "/",
    },
    {
      label: t("firstDropDown5"),
      path: "/",

    },
    {
      label: t("firstDropDown6"),
      path: "translation-and-localization/cms-translation-service",

    },
    {
      label: t("firstDropDown7"),
      path: "translation-and-localization/app-translation-service",

    },
  ];

  const serviceMenuData2 = [

    {
      label: t("secondDropDownMain"),
      path: "/",
    },
    {
      label: t("secondDropDown3"),
      path: "/",
    },
    {
      label: t("secondDropDown4"),
      path: "/",
    },
    {
      label: t("secondDropDown5"),
      path: "/",

    },
    {
      label: t("secondDropDown6"),
      path: "/",

    },
  ];


  const serviceMenuData3 = [

    {
      label: t("thirdDropDown2"),
      path: "/",
    },
    {
      label: t("thirdDropDown3"),
      path: "/",
    },
    {
      label: t("thirdDropDown4"),
      path: "/",
    },
    {
      label: t("thirdDropDown5"),
      path: "/",

    },

  ];

  const serviceMenuData4 = [

    {
      label: t("fourthDropDown2"),
      path: "/",
    },
    {
      label: t("fourthDropDown3"),
      path: "/",
    },
    {
      label: t("fourthDropDown4"),
      path: "/",
    },
    {
      label: t("fourthDropDown5"),
      path: "/",

    },
    {
      label: t("fourthDropDown6"),
      path: "/",

    },
    {
      label: t("fourthDropDown7"),
      path: "/",

    },
    {
      label: t("fourthDropDown8"),
      path: "/",

    },
    {
      label: t("fourthDropDown9"),
      path: "/",

    },

  ];


  // const responsiveLink = [
  //   {
  //     link: t("chiSiamo"),
  //     path: "/chi-siamo",
  //   },
  //   {
  //     link: t("comeFuziona"),
  //     path: "/come-funziona",
  //   },
  //   {
  //     link: t("casiDuso"),
  //     path: "/casi-duso",
  //   },
  //   {
  //     link: t("contattaci"),
  //     path: "/contattaci",
  //   },
  //   {
  //     link: t("blog"),
  //     path: "/blog-it-new",
  //   },
  //   {
  //     link: t("faq"),
  //     path: "/faq",
  //   },
  // ];

  return (
    <div className="sticky top-0 z-10">
      <div className="bg-white">
        <div className="relative gap-20 max-w-[1600px] m-auto px-5">
          <div className="hidden lg:flex items-center justify-between">
            <div className="max-w-[150px]">
              <Link href={"/"}>
                <Image loading="lazy" src="/logo.webp" alt="logo" width={1000} height={0} />
              </Link>
            </div>
            <div className="flex items-center justify-end gap-4">
              <div
                className="relative"
                // @ts-ignore
                onMouseLeave={() => setDropDown(false)}
              >
                <Link href={"/translation-and-localization"}>
                  <button
                    onMouseOver={() => setDropDown(true)}
                    className="text-[12px] font-medium flex gap-1 justify-center items-center text-[#6f6f6f] active:text-secondary hover:text-secondary  p-2 bg-white "
                  >
                    <span>{t("firstDropDownMain")}</span>
                    <span
                      className={`text-[12px] transition-all duration-200 ${dropDown ? "rotate-180" : " "
                        }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                </Link>
                <ul
                  className={`absolute z-20 -left-0 top-8 right-0 w-64 py-2 bg-[#fffdfd] shadow-xl ${dropDown ? "block" : "hidden"
                    }`}
                >
                  {serviceMenuData.map((item, index) => {
                    return (
                      <Link href={item.path} key={index}>
                        <li className="flex gap-4 w-full items-center px-3 py-2 text-[12px] hover:text-[#91A3F2] hover:bg-gray-100">
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div
                className="relative"
                // @ts-ignore
                onMouseLeave={() => setDropDown2(false)}
              >
                <Link href={"/"}>
                  <button
                    onMouseOver={() => setDropDown2(true)}
                    className="text-[12px] font-medium flex gap-1 justify-center items-center text-[#6f6f6f] active:text-secondary hover:text-secondary  p-2 bg-white "
                  >
                    <span>{t("secondDropDownMain")}</span>
                    <span
                      className={`text-[12px] transition-all duration-200 ${dropDown2 ? "rotate-180" : " "
                        }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                </Link>
                <ul
                  className={`absolute z-20 -left-0 top-8 right-0 w-64 py-2 bg-[#fffdfd] shadow-xl ${dropDown2 ? "block" : "hidden"
                    }`}
                >
                  {serviceMenuData2.map((item, index) => {
                    return (
                      <Link href={item.path} key={index}>
                        <li className="flex gap-4 w-full items-center px-3 py-2 text-[12px] hover:text-[#91A3F2] hover:bg-gray-100">
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div
                className="relative"
                // @ts-ignore
                onMouseLeave={() => setDropDown3(false)}
              >
                <Link href={"/"}>
                  <button
                    onMouseOver={() => setDropDown3(true)}
                    className="text-[12px] font-medium flex gap-1 justify-center items-center text-[#6f6f6f] active:text-secondary hover:text-secondary  p-2 bg-white "
                  >
                    <span>{t("thirdDropDownMain")}</span>
                    <span
                      className={`text-[12px] transition-all duration-200 ${dropDown3 ? "rotate-180" : " "
                        }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                </Link>
                <ul
                  className={`absolute z-20 -left-0 top-8 right-0 w-64 py-2 bg-[#fffdfd] shadow-xl ${dropDown3 ? "block" : "hidden"
                    }`}
                >
                  {serviceMenuData3.map((item, index) => {
                    return (
                      <Link href={item.path} key={index}>
                        <li className="flex gap-4 w-full items-center px-3 py-2 text-[12px] hover:text-[#91A3F2] hover:bg-gray-100">
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <div
                className="relative"
                // @ts-ignore
                onMouseLeave={() => setDropDown4(false)}
              >
                <Link href={"/"}>
                  <button
                    onMouseOver={() => setDropDown4(true)}
                    className="text-[12px] font-medium flex gap-1 justify-center items-center text-[#6f6f6f] active:text-secondary hover:text-secondary  p-2 bg-white "
                  >
                    <span>{t("thirdDropDownMain")}</span>
                    <span
                      className={`text-[12px] transition-all duration-200 ${dropDown4 ? "rotate-180" : " "
                        }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                </Link>
                <ul
                  className={`absolute z-20 -left-0 top-8 right-0 w-64 py-2 bg-[#fffdfd] shadow-xl ${dropDown4 ? "block" : "hidden"
                    }`}
                >
                  {serviceMenuData4.map((item, index) => {
                    return (
                      <Link href={item.path} key={index}>
                        <li className="flex gap-4 w-full items-center px-3 py-2 text-[12px] hover:text-[#91A3F2] hover:bg-gray-100">
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              {/* {data.map((item, index) => (
                <div className="flex-shrink-0 relative" key={index}>
                  <div className="flex text-[12px] font-medium items-center text-[#6f6f6f] active:text-secondary hover:text-secondary transition-all duration-200 cursor-pointer focus:outline-none p-[7px]">
                    <Link href={item.path}>
                      <span>{item.mainText}</span>
                    </Link>
                  </div>
                </div>
              ))} */}
              <div className="flex items-center gap-3 ">
                <div className="min-w-[100px] max-w-[100px]">
                  <FlagSelect />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex lg:hidden items-center justify-between py-5">
            <div className="max-w-[120px]">
              <Link href={"/"}>
                <Image loading="lazy" src="/logo.png" alt="logo" width={1000} height={0} />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3 ">
                <div className="min-w-[100px] max-w-[100px]">
                  <FlagSelect />
                </div>
              </div>
              <span
                className="text-2xl cursor-pointer text-[rgba(146,146,146,0.7)]"
                onClick={handleNav}
              >
                <GiHamburgerMenu />
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* {open && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-white  z-50">
          <div className="flex justify-end px-10">
            <div
              className="text-2xl font-bold py-3 hover:text-secondary transition-all duration-300 cursor-pointer"
              onClick={handleNav}
            >
              <RxCross1 />
            </div>
          </div>
          <div className={`px-8 py-6 ${activeClass}`}>
            <div
              className="cursor-pointer pb-2"
              onClick={hanldeDropDown}
            >
              <div className="flex justify-between items-center]">
                <h2 className="max-w-[350px] cursor-pointer font-semibold text-xl mb-2">
                  <Link href={"/"}> {t("servizi")} </Link>
                </h2>
                <span
                  className={`text-3xl transition-all  ${activeIndex ? "rotate-180 duration-300" : "rotate-[360deg]"} duration-300`}
                >
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div
                className={`${activeIndex
                  ? "max-h-96 duration-700 ease-in-out transition-all opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none duration-700"
                  }`}
              >
                <p className="w-full text-primary text-xl font-semibold py-2 transition-all duration-300 cursor-pointer">
                  {serviceMenuData.map((item, index) => {
                    return (
                      <Link href={item.path} key={index}>
                        <li className="flex gap-4 w-full items-center py-2 text-[12px] hover:text-[#91A3F2] hover:bg-gray-100">
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </p>
              </div>
            </div>
            <div
              className="cursor-pointer pb-2"
              onClick={hanldeDropDown2}
            >
              <div className="flex justify-between items-center]">
                <h2 className="max-w-[350px] cursor-pointer font-semibold text-xl mb-2">
                  <Link href={"/partner-zone"}> {t("miniHome")} </Link>
                </h2>
                <span
                  className={`text-3xl transition-all  ${activeIndex2 ? "rotate-180 duration-300" : "rotate-[360deg]"} duration-300`}
                >
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div
                className={`${activeIndex2
                  ? "max-h-96 duration-700 ease-in-out transition-all opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none duration-700"
                  }`}
              >
                <ul className="w-full text-primary text-md font-medium py-2 transition-all duration-300 cursor-pointer">
                  <li className="flex items-center pb-2">
                    <Link href={"/partner-zone/agenzie-di-noleggio-attrezzature"}>
                      <span className="">{t("partnerZoneIneerFirst")}</span>{" "}
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href={"/partner-zone/rafiky-agenzieditraduzione"}>
                      <span className="">{t("partnerZoneIneerSec")}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="cursor-pointer"
              onClick={hanldeDropDown3}
            >
              <div className="flex justify-between items-center]">
                <h2 className="max-w-[350px] cursor-pointer font-semibold text-xl mb-2">
                  <Link href={"/lingue"}> {t("interpretio")} </Link>
                </h2>
                <span
                  className={`text-3xl transition-all  ${activeIndex3 ? "rotate-180 duration-300" : "rotate-[360deg]"} duration-300`}
                >
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div
                className={`${activeIndex3
                  ? "max-h-96 duration-700 ease-in-out transition-all opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none duration-700"
                  }`}
              >
                <ul className="w-full text-primary text-md font-medium py-2 transition-all duration-300 cursor-pointer">
                  <li className="flex items-center pb-1">
                    <Link href={"/lingue/interpretariato-in-inglese-britannico/"}>
                      <span className="">   {t("interpretioFrist")}</span>{" "}
                    </Link>
                  </li>
                  <li className="flex items-center pb-1">
                    <Link href={"/lingue/interpretariato-in-inglese-americano/"}>
                      <span className=""> {t("interpretioSec")}</span>
                    </Link>
                  </li>
                  <li className="flex items-center pb-1">
                    <Link href={
                      "/lingue/interpretariato-in-francese-interpretariato-a-distanza/"
                    }>
                      <span className=""> {t("interpretioThird")}</span>
                    </Link>
                  </li>
                  <li className="flex items-center pb-1">
                    <Link href={
                      "/lingue/interpretariato-in-spagnolo-interpreti-a-distanza/"
                    }>
                      <span className="">  {t("interpretioFour")}</span>
                    </Link>
                  </li>
                  <li className="flex items-center pb-1">
                    <Link href={"/lingue/interpretariato-in-cinese-interpreti-da-remoto/"}
                    >
                      <span className="">  {t("interpretioFive")}</span>
                    </Link>
                  </li>
                  <li className="flex items-center pb-1">
                    <Link href={"/lingue/nterpretariato-in-russo/"}
                    >
                      <span className="">{t("interpretioSix")}</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {responsiveLink.map((item, index) => (
                <div
                  className="text-primary text-xl font-semibold py-2 hover:text-secondary transition-all duration-300 cursor-pointer"
                  key={index}
                >
                  <Link href={item.path}>{item.link}</Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
