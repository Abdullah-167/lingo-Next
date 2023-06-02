import { useState } from "react";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";
import useTranslation from "@/hooks/useTranslation";
const FAQ = () => {
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
          {data.map((item, index) => {
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
                      className={`text-3xl transition-all  ${
                        activeIndex === index
                          ? "rotate-180 duration-300"
                          : "rotate-[360deg]"
                      } duration-300`}
                    >
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                  <div
                    className={`${
                      isActive
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

const data = [
  {
    heading: "What is LingoYou?    ",
    para: "LingoYou is a translation and localisation agency whose mission is to break down language barriers by providing affordable, accurate and high-quality translations.    ",
  },
  {
    heading: "What are the most popular translation services?    ",
    para: "Among the most popular services are certified translation and website localisation – especially for companies expanding abroad. Recently, we have seen an upward trend in requests for subtitling and voice-over services in the business sector.",
  },
  {
    heading: "For which languages is the translation service available?    ",
    para: "The translation service is available for a wide range of languages, from the most familiar such as Indo-European (French, English, German, Spanish, etc.) to the more ‘distant’ and rare such as Sino-Tibetan and Afro-Asiatic.    ",
  },
  {
    heading: "How can you request a quote?    ",
    para: "The quote can be requested via our customer portal.",
  },
  {
    heading:
      "I am an individual customer, can I request a translation?",
    para: "Yes, of course. We provide translation services to both companies and individuals.",
  },
  {
    heading: "Why is LingoYou different from other translation services?",
    para: "Because we put our customers’ needs and requests first, providing a free 24-hour support service and delivering more than convincing and accurate localised translations.",
  },
  {
    heading:
      "What guarantee do you give on the quality of the translation?",
    para: "LingoYou offers a free quality assurance service. We submit the translation to a second translator before it is finalised and delivered, in order to certify its quality.",
  },
  {
    heading:
      "How quickly is the quote provided?   ",
    para: "For editable files, you will get the quote automatically. For non-editable files, you will receive the quote in 15 minutes.",
  },
  {
    heading:
      "Is payment for translations in advance? ",
    para: "Yes, for a better guarantee the payment is in advance.",
  },
  {
    heading: "What are the delivery times?",
    para: "Delivery times vary according to the service to be provided and its intended use.",
  },
];
