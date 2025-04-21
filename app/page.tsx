import Image from "next/image";
import hoseic from "./imgs/heroimg.png";
import locaic from "./imgs/locic.svg";
import homeic from "./imgs/homeic.svg";
import pricerg from "./imgs/monetary.svg";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Homes from "./components/Homes";

const page = () => {
  return (
    <>
      <div className="containerb flex items-center justify-center pt-16 relative">
        <div className="w-1/2">
          <h1 className="text-[68px] leading-16 mb-12 ">
            Find Your <br /> Dream Home
          </h1>
          <p className="w-2/3 text-lg font-[montbold] leading-[160%] mb-20">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </p>

          <button className="bg-[#2B1B12] w-44 h-14 text-lg rounded-lg text-white">
            Sign In
          </button>
        </div>
        <Image
          src={hoseic}
          width={940}
          height={540}
          className="drop-shadow-2xl"
          alt="Picture of the login"
        />

        <div className="px-8 py-12 bg-[#DDC7BB]/60 backdrop-blur-xl shadow-2xl shadow-[#2b1b1212] absolute z-10 flex items-center gap-6 rounded-xl -bottom-20">
          <label
            htmlFor="location"
            className="flex items-center justify-between bg-[#FBF5F1] rounded-xl outline-hidden pr-4 h-16"
          >
            <input
              className="rounded-l-xl pl-5 h-full"
              type="text"
              placeholder="Location"
              name="location"
              id="location"
            />
            <Image
              src={locaic}
              width={20}
              height={25}
              className=""
              alt="Picture of the login"
            />
          </label>

          <label
            htmlFor="type"
            className="flex items-center justify-between bg-[#FBF5F1] rounded-xl outline-hidden pr-4 h-16"
          >
            <input
              className="rounded-l-xl pl-5 h-full"
              type="text"
              placeholder="Type"
              name="type"
              id="type"
            />
            <Image
              src={homeic}
              width={20}
              height={25}
              className=""
              alt="Picture of the login"
            />
          </label>

          <label
            htmlFor="price_range"
            className="flex items-center justify-between bg-[#FBF5F1] rounded-xl outline-hidden pr-4 h-16"
          >
            <input
              className="rounded-l-xl pl-5 h-full"
              type="text"
              placeholder="Price Range"
              name="price range"
              id="price_range"
            />
            <Image
              src={pricerg}
              width={25}
              height={25}
              className=""
              alt="Picture of the login"
            />
          </label>

          <button className="bg-[#2B1B12] w-44 py-4 text-lg rounded-lg text-white">
            Sign In
          </button>
        </div>
      </div>
      <div className="bg-white space-y-20">
        <About />
        <WhyChooseUs />
        <Homes/>
      </div>
    </>
  );
};

export default page;
