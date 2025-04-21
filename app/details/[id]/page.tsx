import Image from "next/image";
import housepng from "../img_about_us.jpg";
import locic from "../locic.svg";
import size from "../size.svg";
import rooms from "../rooms.svg";
import price from "../monetary.svg";
import like from "../heart.png";

const page = () => {
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
    <div className="containerb mt-20">
      {homes_for_sell.map((e) => {
        if (e.id === "EWRDTFG534YT8F3H873H33GF73") {
          return (
            <div className="flex justify-between space-x-5 " key={e.id}>
              <div className="w-1/2">
                <Image
                  src={e.pic}
                  alt={e.location + "'s png"}
                  className="rounded-xl w-full"
                />
              </div>

              <div className="w-1/2  flex flex-col items-start justify-start px-10 gap-5">
                <div className="flex gap-2 mb-5">
                  <Image
                    src={locic}
                    width={30}
                    height={30}
                    alt={e.location + "'s png"}
                  />
                  <h2 className="text-4xl">{e.location}</h2>
                </div>

                <p className="font-[montbold]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem reiciendis quia itaque dolorum mollitia ipsam amet earum
                  sequi repellendus alias facilis, provident ad, neque delectus
                  ipsum voluptatibus qui, ab eos!
                </p>

                <div className="flex flex-col gap-2 mb-32">
                  <p className="font-[montbold] flex gap-2 items-center mb-2">
                    <Image
                      src={price}
                      width={20}
                      height={20}
                      alt={e.location + "'s png"}
                    />
                    {e.price} $
                  </p>
                  <p className="font-[montbold] flex gap-2 items-center mb-2">
                    <Image
                      src={rooms}
                      width={20}
                      height={20}
                      alt={e.location + "'s png"}
                    />
                    {e.rooms} Rooms
                  </p>
                  <p className="font-[montbold] flex gap-2 items-center">
                    <Image
                      src={size}
                      width={20}
                      height={20}
                      alt={e.location + "'s png"}
                    />
                    {e.sqrt} SQRT
                  </p>
                </div>

                <div className="w-full flex items-center gap-1">
                  <button className="w-1/2 uppercase bg-[#2B1B12] text-white py-2.5 rounded-lg text-2xl">
                    buy
                  </button>
                  <button className="px-4 py-3.5 bg-[#ECB176] rounded-md">
                  <Image
                      src={like}
                      width={20}
                      height={20}
                      alt={e.location + "'s png"}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default page;
