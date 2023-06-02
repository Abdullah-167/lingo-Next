import useTranslation from "@/hooks/useTranslation";
import Link from "next-translate-routes/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const MiniNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<string | null>(null);
  const [dropDown, setDropDown] = useState(false);

  const handleOpen = (item: string) => {
    setIsOpen(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentItem(null);
  };

  const { t } = useTranslation();

  return (
    <div className="mini-nav-main">
      <nav className="max-w-[1600px] mx-auto px-12 text-sm">
        <ul className="hidden sm:flex justify-end gap-10">
          <li>
            <Link href={"/partner-zone"}>
              <span
                onMouseOver={() => handleOpen("partnerZoness")}
                onMouseLeave={() => handleClose()}
                className="flex items-center gap-1"
              >
                {t("miniHome")}
              </span>
            </Link>
          </li>
          <Link href={"/richiesta-preventivo/"}>
            <li className="hidden lg:flex">{t("whoweareMini")}</li>{" "}
          </Link>
          <Link href={"/richiesta-preventivo/"}>
            <li className="hidden lg:flex">{t("contactUs")}</li>{" "}
          </Link>
          <li>
            <div
              className="relative"
              // @ts-ignore
              onMouseLeave={() => setDropDown(false)}
            >
              <Link href={"/interpretazione-simultanea-da-remoto-rafiky bg-[#8624e1]"}>
                <button
                  onMouseOver={() => setDropDown(true)}
                  className="flex gap-x-1 justify-center items-center text-white  bg-[#8624e1] "
                >
                  <span>{t("resourcesMini")}</span>
                  <span
                    className={`transition-all duration-200 ${dropDown ? "rotate-180" : " "
                      }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </button>
              </Link>
              <ul
                className={`absolute z-20 -left-6 right-0 py-2 bg-[#8624e1] shadow-xl ${dropDown ? "block" : "hidden"
                  }`}
              >

                <Link href={'/'}>
                  <li className="flex gap-4 w-full justify-center items-center text-center text-sm hover:text-[#91A3F2">
                    <span className={"text-xl w-full"}>Blog</span>
                  </li>
                </Link>

              </ul>
            </div>

          </li>
          <Link href={"/richiesta-preventivo/"}>
            <li className="hidden lg:flex">{t("lingyouAcedamy")}</li>{" "}
          </Link>
          <li>
            <a href="#">+39 0282957101</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MiniNav;
