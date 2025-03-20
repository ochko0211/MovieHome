"use client";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black ">
      <hr className=" border-gray-300 dark:border-gray-200" />

      <div className="mx-auto w-full max-w-screen-xl px-4">
        {/* Social icons */}
        <div className="flex flex-wrap justify-center pt-10 space-x-5 rtl:space-x-reverse"></div>
        {/* Footer links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-6 lg:py-8">
          {/* Links column: Үндсэн */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Үндсэн
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              {[
                { label: "Эхлэл", path: "/" },
                { label: "Тун Удахгүй", path: "/comingSoon" },
                { label: "Захиалга", path: "/movie" },
              ].map((item, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links column: Холбоос */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Холбоос
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              {["Facebook", "Twitter", "Instagram", "Tiktok", "Youtube"].map(
                (platform, index) => (
                  <li key={index} className="mb-4">
                    <a
                      href={`${platform.toLowerCase()}.com`}
                      className="hover:underline"
                    >
                      {platform}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Links column: Бидний тухай */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Бидний тухай
            </h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              {["Privacy Policy", "Licensing", "Terms & Conditions"].map(
                (policy, index) => (
                  <li key={index} className="mb-4">
                    <a href="#" className="hover:underline">
                      {policy}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Image column */}
          <div className="flex justify-center items-center h-32 w-48">
            <Image
              className="md:w-40 md:h-40"
              src="/FooterLogo.png"
              alt="Camera Icon"
            />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://flowbite.com/">ICinema™</a>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
