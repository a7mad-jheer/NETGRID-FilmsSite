import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  bg-black/20 backdrop-blur-md p-10 border-t-3 inset-shadow-lime-300 ">
      <div >
        <ul className="flex  justify-around ">
          <li>
            <ul className="hidden md:flex md:flex-col md:gap-2">
              <li><Link href="/about" className="cursor-pointer">About</Link></li>
              <li><Link href="/help" className="cursor-pointer">Help</Link></li>
            </ul>
          </li>

          <li>
            <ul className="hidden md:flex md:flex-col md:gap-2">
              <li>Critic Subnission</li>
              <li>Licensing</li>
              <li>Advertise With Us</li>
              <li>Careers</li>
            </ul>
          </li>

          <li>
            <ul className="md:flex md:flex-col md:items-center w-full text-center mb-5">
              <li className="flex items-center gap-2 mb-2 justify-center ">
                <MdEmail />
                <span className="font-semibold ">JOIN THE NEWSLIETTER</span>
              </li>
              <li className="md:max-w-80 text-center md:flex flex-col gap-2">
                <span>Get the freshest reviews, news, and more delivered right to your
                inbox!</span>
                <button>JOIN THE NEWSLETTER</button>
              </li>
            </ul>
          </li>

          <li>
            <div className="hidden md:flex md:flex-col md:gap-2">
              <h1 className="font-semibold">FOLLOW US</h1>
              <div className="flex items-center gap-2 justify-center">
                <Link href = ""><FaFacebookSquare /></Link>
                <Link href = ""><FaInstagram /></Link>
                <Link href = ""><AiFillTikTok /></Link>
                <Link href = ""><FaXTwitter /></Link>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex md:gap-1 md:items-center md:justify-center md:my-10  ">
        <Link href="">AD Choice |</Link>
        <Link href="">Privacy Policy |</Link>
        <Link href="">Cookie Notice |</Link>
        <Link href="">CN Notice |</Link>
        <Link href="">Terms and Policies |</Link>
        <Link href="">Accessibility</Link>
      </div>

      <p className="mt-4 text-sm text-center">
        &copy; 2025 Movie Site. All rights reserved.
      </p>
    </footer>
  );
}
