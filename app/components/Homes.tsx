import Image from "next/image";
import housepng from "../imgs/house.png";
import loc from "../imgs/location.svg";
import room from "../imgs/rooms.svg";
import size from "../imgs/size.svg";
import Link from "next/link";

const Homes = () => {
  const homes_for_sell = [
    {
      id: "EWRDTFG534YT8F3H873H3GF73",
      location: "Sank Peterburg",
      rooms: 5,
      sqrt: 3457,
      pic: housepng,
      price: 232382983,
    },
    {
      id: "EWRDTFG534YT8F3H873H33GF73",
      location: "Sank Peterburg",
      rooms: 5,
      sqrt: 3457,
      pic: housepng,
      price: 232382983,
    },
    {
      id: "EWRDTFG534YT8F43H873H3GF73",
      location: "Sank Peterburg",
      rooms: 5,
      sqrt: 3457,
      pic: housepng,
      price: 232382983,
    },
    {
      id: "EWRDTFG54534YT8F3H873H3GF73",
      location: "Sank Peterburg",
      rooms: 5,
      sqrt: 3457,
      pic: housepng,
      price: 232382983,
    },
    {
      id: "EWRDTFG54534YT8F3H873H3GF73",
      location: "Sank Peterburg",
      rooms: 5,
      sqrt: 3457,
      pic: housepng,
      price: 232382983,
    },
  ];

  return (
    <div className="containerb grid grid-cols-3 gap-20 ">
      {homes_for_sell.map((e, i) => {
        return (
          <Link
          href={`details/${e.id}`}
            className="rounded-2xl shadow-2xl overflow-hidden bg-[#DDC7BB]"
            key={i}
          >
            <Image src={e.pic} width={500} height={500} alt={e.location} />
            <div className="p-5">
              <h1 className="flex items-center gap-2 text-xl mb-3">
                <Image src={loc} width={30} height={30} alt={e.location} />{" "}
                {e.location}
              </h1>

              <section className="flex items-center justify-between mb-5">
                <span className="text-[#4F3527] flex items-center gap-3">
                  <Image
                    src={room}
                    width={30}
                    height={30}
                    className="bg-white rounded-md"
                    alt={e.location}
                  />
                  <p className="font-[montbold] text-lg">{e.rooms} Rooms</p>
                </span>

                <span className="flex items-center gap-3">
                  <Image
                    src={size}
                    width={30}
                    height={30}
                    className="bg-white rounded-md"
                    alt={e.location}
                  />
                  <p className="font-[montbold] text-[#4F3527] text-lg">
                    {e.sqrt} SQRT ft
                  </p>
                </span>
              </section>

              <section className="flex items-end justify-between">
                <button className="bg-[#2B1B12] text-white px-5 py-2.5 rounded-lg">
                  Sign Up
                </button>
                <p className="text-2xl">{e.price}$</p>
              </section>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Homes;
