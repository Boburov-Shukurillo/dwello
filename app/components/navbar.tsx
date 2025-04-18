// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";

import lgog from "../imgs/logo.svg";
import schic from "../imgs/search.svg";
import profile_ic from "../imgs/user.svg";

export default function Navbar() {
  return (
    <nav className="conatinerb flex justify-between py-5">
      <Link href="/">
        <Image src={lgog} width={100} height={29} alt="Picture of the author" />
      </Link>

      <ul className="w-1/4 flex items-center gap-16 font-[montexbold] leading-2">
        <li>
          <Link href="/" className="hover:opacity-80">
            Home
          </Link>
        </li>
        <li>
          <Link href="/service" className="hover:opacity-80">
            Service
          </Link>
        </li>
        <li>
          <Link href="/agents" className="hover:opacity-80">
            Agents
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:opacity-80">
            Contact
          </Link>
        </li>
      </ul>
      <div className="w-1/5 flex items-center justify-between">
        <Image src={schic} width={24} height={24} alt="Picture of the author" />
        <Image
          src={profile_ic}
          width={24}
          height={24}
          alt="Picture of the login"
        />

        <button className="bg-[#2B1B12] w-32 h-11 rounded-lg text-white">
          Sign In
        </button>
      </div>
    </nav>
  );
}
