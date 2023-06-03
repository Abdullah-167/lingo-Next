import { useState } from "react";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";
import useTranslation from "@/hooks/useTranslation";


interface faqProps {
  data: any;
}

const FAQ: React.FC<faqProps> = ({ data }: any) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDropDownClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container">
      <div className="px-5 pb-20">
        <h2 className="text-dark text-4xl sm:text-6xl text-center font-bold pb-8 sm:pb-20">
          Frequently Asked<span className="text-tertiary"> Question</span>
        </h2>
        <div className=" gap-10 pb-10">
          {data?.map((item: any, index: number) => {
            const isActive = activeIndex === index;
            return (
              <div key={index}>
                <div
                  className=" cursor-pointer border border-[#d2d2d2] px-4 py-5 my-4"
                  onClick={() => handleDropDownClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-dark  cursor-pointer font-normal text-xl mb-2">
                      {item.heading}
                    </h2>
                    <span
                      className={`text-3xl transition-all  ${activeIndex === index
                        ? "rotate-180 duration-300"
                        : "rotate-[360deg]"
                        } duration-300`}
                    >
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                  <div
                    className={`${isActive
                      ? "max-h-96 duration-700 ease-in-out transition-all opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none duration-700"
                      }`}
                  >
                    <p className="text-grey py-2 text-[15px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="flex justify-center">
          <Button
            text={"Contact Us"}
            color={"white"}
            backgroundColor={"#AC35E1"}
            minWidth={undefined}
          />
        </span>
      </div>
    </div>
  );
};

export default FAQ;

