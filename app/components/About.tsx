import "../styles/globals.css";
import img_about_us from "../imgs/img_about_us.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white">
      <div className="containerb grid grid-cols-2 py-40 gap-20 items-center">
        <Image
          src={img_about_us}
          alt="c:\Users\User\Downloads\img_about_us.jpg"
          className="w-full h-full"
        />

        <div className="w-full h-full flex flex-col items-start justify-between py-5">
          <h2 className="text-5xl mb-8 leading-[140%]">We Help You To Find <br /> Your Dream Home</h2>
          <p className="text-xl mb-12 leading-[160%] font-[montbold]">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="space-y-5">
                <span className="text-5xl">8K+</span>
                <p className="font-[montbold]">Houses Available</p>
            </div>
            <div className="space-y-5">
                <span className="text-5xl">7K+</span>
                <p className="font-[montbold]">Houses Sold</p>
            </div>
            <div className="space-y-5">
                <span className="text-5xl">5K+</span>
                <p className="font-[montbold]">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
