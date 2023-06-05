import React, { useEffect, useState } from "react";


const OurNumbers = () => {
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
  return (
    <div className="w-full ">
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-5">
          {counting.map((item, index) => {
            return (
              <div key={index}>
                <p
                  className="text-[60px] lg:text-[60px] font-medium text-center"
                  style={{
                    color: item.color,
                  }}
                >
                  {count >= declaredNum ? item.num : count}
                </p>
                <p
                  className="text-[18px] font-medium text-center"
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
  );
};

export default OurNumbers;

const counting = [
  {
    num: "+200",
    text: "LANGUAGES",
    color: "#8300E9",
    color2: "#8300E9",
  },
  {
    num: "24/7",
    text: "AVAILABILITY",
    color: "#2EA3F2",
    color2: "#0c71c3",
  },
  {
    num: "20K ",
    text: "PROFESSIONAL TRANSLATORS    ",
    color: "#f22ed4",
    color2: "#ea20e3",
  },
];