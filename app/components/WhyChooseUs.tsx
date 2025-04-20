import Image from "next/image";
import dealic from "../imgs/deal.svg";
import listic from "../imgs/list.svg";
import location from "../imgs/location.svg";
import personedi from "../imgs/personedit.svg";

const WhyChooseUs = () => {
  return (
    <div className="containerb">
      <h1 className="text-[40px] text-center mb-4">Why Choose Us</h1>
      <p className="text-center text-[20px] mt-4 mb-8 font-[montbold] mb-16">
        Elevating Your Home Buying Experience with Expertise, Integrity, <br />{" "}
        and Unmatched Personalized Service
      </p>
      <div className="grid grid-cols-4 gap-11">
        <div className="w-full rounded-[18px] bg-[#DDC7BB] px-6 py-7">
          <div className="bg-white w-20 h-20 rounded-lg p-4 mb-5">
            <Image
              src={location}
              alt="Why Choose Us"
              width={100}
              height={100}
            />
          </div>
          <h3 className="mb-3">Expert Guidance</h3>
          <p className="font-[montbold]">
            {`Benefit from our team's seasoned expertise for a smooth buying
            experience`}
          </p>
        </div>
        <div className="w-full rounded-[18px] bg-[#DDC7BB] px-6 py-7">
          <div className="bg-white w-20 h-20 rounded-lg p-4 mb-5">
            <Image
              src={personedi}
              alt="Why Choose Us"
              width={100}
              height={100}
            />
          </div>
          <h3 className="mb-3">Personalized Service</h3>
          <p className="font-[montbold]">{`Our services adapt to your unique needs, making your journey stress-free`}</p>
        </div>
        <div className="w-full rounded-[18px]  bg-[#DDC7BB] px-6 py-7">
          <div className="bg-white w-20 h-20 rounded-lg p-4 mb-5">
            <Image src={listic} alt="Why Choose Us" width={100} height={100} />
          </div>
          <h3 className="mb-3">Transparent Process</h3>
          <p className="font-[montbold]">{`Stay informed with our clear and honest approach to buying your home`}</p>
        </div>
        <div className="w-full rounded-[18px]  bg-[#DDC7BB] px-6 py-7">
          <div className="bg-white w-20 h-20 rounded-lg p-4 mb-5">
            <Image src={dealic} alt="Why Choose Us" width={100} height={100} />
          </div>
          <h3 className="mb-3">Exceptional Support</h3>
          <p className="font-[montbold]">{`Providing peace of mind with our responsive and attentive customer service`}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
