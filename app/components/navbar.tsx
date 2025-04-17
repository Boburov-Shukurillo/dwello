// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";

import lgog from "../imgs/logo.svg";
import schic from "../imgs/search.svg";
export default function Navbar() {
  return (
    <nav className="conatinerb flex justify-between py-5">
      <Link href="/">
        <Image src={lgog} width={100} height={29} alt="Picture of the author" />
      </Link>

      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-16">
          <li className="h-5">
            <Link href="/" className="hover:opacity-80">
              Home
            </Link>
          </li>
          <li className="h-5">
            <Link href="/service" className="hover:opacity-80">
              Service
            </Link>
          </li>
          <li className="h-5">
            <Link href="/agents" className="hover:opacity-80">
              Agents
            </Link>
          </li>
          <li className="h-5">
            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
          </li>
        </ul>

        <label htmlFor="search" className="flex items-end">
          <input type="text" id="search" name="search" className="bg-" />
          <Image
            src={schic}
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </label>
      </div>
    </nav>
  );
}
