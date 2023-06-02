import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";


interface servicesProps {
  title: string;
  para: string;
  btntext: string;
  data: any
}

const Services: React.FC<servicesProps> = ({ title, para, btntext, data }: any) => {
  return (
    <div className="bg-white pt-10 pb-32">
      <div className="container">
        <div className="py-20 xl:max-w-[850px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl text-dark font-bold mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-xl font-normal text-dark">{para}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10">
          {data?.map((item: any, index: number) => {
            return (
              <div
                className="hero-cards bg-white px-4 pt-10 pb-8 rounded-xl"
                key={index}
              >
                <div
                  className={`text-4xl rounded-full w-16 h-16 px-4 py-3`}
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                  }}
                >
                  <div className="icon-container">
                    <Image
                      src={item.icon}
                      loading="lazy"
                      width={1000}
                      height={1000}
                      alt={"service-icon"}
                    />
                  </div>
                </div>
                <h2 className="text-lg text-dark font-bold pt-8 pb-3">
                  {item.heading}
                </h2>
                <p className="text-base text-grey">{item.para}</p>
                <Link href={"/"}>
                  <div className="flex items-center gap-3 mt-6">
                    <p className="text-primary font-medium cursor-pointer">
                      {btntext}
                    </p>
                    <MdOutlineArrowRightAlt />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;