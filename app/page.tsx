import Image from "next/image";
import hoseic from './imgs/heroimg.png'
const page = () => {
  return (
    <div className="conatinerb flex items-center justify-between pt-16">
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
        width={740}
        height={440}
        alt="Picture of the login"
      />
    </div>
  );
};

export default page;
