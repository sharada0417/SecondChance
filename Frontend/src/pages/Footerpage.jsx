import React from 'react';
import { MdFacebook, MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";
import { BiLogoPinterest } from "react-icons/bi";

const Footerpage = () => {
  return (
    <footer className="bg-[#166835] text-white p-10 text-base ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Contact Info */}
        <div>
          <h3 className="text-yellow-400 uppercase font-bold mb-4 text-lg">Chat With Sales</h3>
          <p className="flex items-center mb-2 text-base">
            <FaPhone className="mr-2 text-xl" /> +(94) 70 2027117
          </p>
          <p className="flex items-center text-base">
            <MdOutlineEmail className="mr-2 text-xl" /> secondChance@gmail.com
          </p>
        </div>

        {/* Column 2: Trending Categories */}
        <div>
          <h3 className="text-yellow-400 uppercase font-bold mb-4 text-lg">Trending Categories</h3>
          <ul className="space-y-2">
            <li><a href="/furnitures/bedroom/beds" className="hover:underline">Bedroom Furniture</a></li>
            <li><a href="/fashion/women/dresses" className="hover:underline">Women's Fashion</a></li>
            <li><a href="/fashion/footware/boots" className="hover:underline">Footwear</a></li>
            <li><a href="/fashion/accessories/bags" className="hover:underline">Accessories</a></li>
            <li><a href="/books/fiction/historicalfiction" className="hover:underline">Fiction</a></li>
            <li><a href="/electronic/mobileacc/mobilephone" className="hover:underline">Mobile & Accessories</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-yellow-400 uppercase font-bold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li><a href="/aboutus" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Trending Products */}
        <div>
          <h3 className="text-yellow-400 uppercase font-bold mb-4 text-lg">Trending Products</h3>
          <ul className="space-y-2">
            <li><a href="/product/3" className="hover:underline">HTC 23</a></li>
            <li><a href="/product/2" className="hover:underline">Apple 13 pro</a></li>
            <li><a href="/product/19" className="hover:underline">Black Head Set</a></li>
            <li><a href="/product/24" className="hover:underline">Plastic Phone Protector</a></li>
            <li><a href="/product/27" className="hover:underline">Car Phone Holder</a></li>
          </ul>
        </div>

        {/* Column 5: Social Media */}
        <div className="flex flex-col items-center space-y-4">
          <a href="https://facebook.com/" className="text-white hover:text-yellow-400 text-2xl"><MdFacebook /></a>
          <a href="https://www.linkedin.com/" className="text-white hover:text-yellow-400 text-2xl"><FaLinkedin /></a>
          <a href="https://x.com/" className="text-white hover:text-yellow-400 text-2xl"><TbBrandTwitter /></a>
          <a href="https://www.instagram.com/" className="text-white hover:text-yellow-400 text-2xl"><FaInstagram /></a>
          <a href="https://www.pinterest.com/" className="text-white hover:text-yellow-400 text-2xl"><BiLogoPinterest /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div>© 2025 SecondChance. All rights reserved.</div>
        <div>Developed by @sharada_417</div>
      </div>
    </footer>
  );
};

export default Footerpage;
