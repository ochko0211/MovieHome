"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-4  w-full z-50 text-white ">
      <div className="max-w-screen-xl h-18 flex flex-wrap items-center justify-between mx-auto px-4 bg-gray-800/25">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/Logo.png" className="h-18" alt="Logo" />
        </Link>
        <div className="flex h-10 md:order-2 space-x-2 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Хайх"
              className="hidden md:block border-2 w-[200px] border-white p-2 rounded-full text-white bg-transparent h-full pl-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-40 top-1/2 transform -translate-y-1/2 text-white"
            />
          </div>
          <button className="border-white border-2 px-4 py-2 rounded-full h-full flex items-center cursor-pointer">
            Нэвтрэх
          </button>
          <button className="border-white border-2 px-4 py-2 rounded-full h-full flex items-center cursor-pointer">
            Бүртгүүлэх
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto md:order-1`}
        >
          <ul className=" pl-40 flex flex-col md:flex-row md:space-x-5 text-[14px]">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 border-b-5 border-b-blue-600"
              >
                Эхлэл
              </Link>
            </li>
            <li>
              <Link href="/soon" className="block py-2 px-3">
                Тун удахгүй
              </Link>
            </li>
            <li>
              <Link href="/order" className="block py-2 px-3">
                Захиалга
              </Link>
            </li>
            <li>
              <Link href="/help" className="block py-2 px-3">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
