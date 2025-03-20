"use client";

import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useSwipeable } from "react-swipeable";
import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // ✅ Use this instead of swiper-bundle.min.css
import "swiper/css/navigation"; // ✅ Add specific styles for navigation
import { motion } from "framer-motion";
import Timer from "../public/Icons/timer"; // Import Timer component
import Calendar from "@/public/Icons/calendar";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "Avatar",
      genre: "Sci-Fi",
      poster: "/avatar.jpg",
      airDate: "2010-07-16",
      duration: "2 цаг",
    },
    {
      id: 2,
      title: "Batman",
      genre: "Sci-Fi",
      poster: "/batman.jpg",
      airDate: "2014-11-07",
      duration: "2 цаг",
    },
    {
      id: 3,
      title: "Beetle",
      genre: "Fantasy",
      poster: "/beetle.jpg",
      airDate: "2009-12-18",
      duration: "2 цаг",
    },
    {
      id: 4,
      title: "Dunkirk",
      genre: "Drama",
      poster: "/dunkirk.jpg",
      airDate: "1997-12-19",
      duration: "2 цаг",
    },
    {
      id: 5,
      title: "Oppenheimer",
      genre: "Action",
      poster: "/oppenheimer.jpg",
      airDate: "2008-07-18",
      duration: "2 цаг",
    },
    {
      id: 6,
      title: "Spiderman",
      genre: "Sci-Fi",
      poster: "/spiderman.jpg",
      airDate: "1999-03-31",
      duration: "2 цаг",
    },
  ];

  const sliders = ["/car1.jpg", "/car3.jpeg", "/dunkirk.jpg"];
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  const transformStyle = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index]
  );

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const width = e.currentTarget.offsetWidth;
    const clickPosition = e.clientX;

    // If clicked on the left side
    if (clickPosition < width / 2) {
      prevSlide(); // Trigger the previous slide
    } else {
      nextSlide();
    }
  };

  const movies1 = [
    {
      title: "Us",
      image: "/us.jpg",
      releaseDate: "2023.09.23",
      duration: "150 мин",
    },
    {
      title: "Interstellar",
      image: "/interstellar.jpg",
      releaseDate: "2023.09.23",
      duration: "150 мин",
    },
    {
      title: "Jhon Wick",
      image: "/johnwick.jpg",
      releaseDate: "2023.09.23",
      duration: "150 мин",
    },
    {
      title: "Spiderman",
      image: "/spiderman.jpg",
      releaseDate: "2023.09.23",
      duration: "150 мин",
    },
    {
      title: "Starwars",
      image: "/starwars.jpg",
      releaseDate: "2023.08.23",
      duration: "150 мин",
    },
    {
      title: "The departed",
      image: "/thedeparted.jpg",
      releaseDate: "2023.08.23",
      duration: "150 мин",
    },
    {
      title: "The last of us",
      image: "/thelastofus.jpg",
      releaseDate: "2023.08.23",
      duration: "150 мин",
    },
    {
      title: "The Simpsons",
      image: "/thesimpsons.jpg",
      releaseDate: "2023.08.23",
      duration: "150 мин",
    },
    {
      title: "The Witcher",
      image: "/TheWitcher.jpg",
      releaseDate: "2023.08.23",
      duration: "150 мин",
    },
    {
      title: "Up",
      image: "/up.jpg",
      releaseDate: "2023.08.23",
      duration: "150 мин",
    },
  ];
  return (
    <div className="bg-black">
      <div className="relative w-full h-[700px] overflow-hidden">
        <Header />
        <div
          {...handlers}
          className="relative w-full overflow-hidden"
          onClick={(e) => handleTap(e)} // Added tap event handler
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={transformStyle}
          >
            {sliders.map((src, i) => (
              <div key={i} className="min-w-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`sliders ${i + 1}`}
                  width={2000}
                  height={500}
                  className="w-full h-full"
                />
              </div>
            ))}
            <Image
              src="/thesimpsons.jpg"
              alt="iamge"
              width={2000}
              height={500}
              className="relative"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className=" text-[48px] font-bold text-center text-white mb-6">
          Манай дэлгэцнээ
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 border-amber-50">
          {movies.map(({ id, title, genre, poster, airDate, duration }) => (
            <div
              key={id}
              className=" mt-5 h-[520px] rounded-lg shadow-2xl border overflow-hidden"
            >
              <div className="relative w-full h-[390px]">
                <Image className="object-cover" src={poster} alt={title} fill />
              </div>

              <div className="p-4 text-black">
                <div className="flex justify-between items-center">
                  <p className="text-[14px] text-white uppercase">
                    {new Date(airDate).toLocaleDateString()}
                  </p>
                  <button className="text-blue-500 font-bold text-[12px] hover:underline">
                    Дэлгэрэнгүй
                  </button>
                </div>
                <h3 className="text-[32px] text-white font-bold">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Төрөл: {genre} · Үргэлжлэх хугацаа: {duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mb-2 rounded-full border-t-2 border-white w-[200px] mx-auto">
        <div className="flex border-b-[4px] border-blue-500 items-center justify-center rounded-full active:border-0 transform duration-[50ms] w-[200px]">
          <button className="text-white justify-center px-4 py-2 rounded-full h-full w-full flex items-center cursor-pointer">
            Бусад
          </button>
        </div>
      </div>

      <section id="advertise">
        <Image src="/banner.png" alt="banner" width={2000} height={500} />
      </section>

      <div className="flex justify-between h-full px-36">
        <h2 className="text-2xl text-white font-bold mt-8">ТУН УДАХГҮЙ</h2>
        <h2 className="text-2xl text-blue-700 font-bold mt-8">IMAX</h2>
      </div>

      <div className=" border-t-2 border-b-2 border-white max-w-6xl mx-auto mb-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 5 },
          }}
          className="relative my-3"
        >
          {movies1.map((movie, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{
                  scale: 1.3,
                }}
                className={` py-10 px-6 rounded-lg shadow-lg`}
              >
                <Image
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h3 className="text-center text-white mt-2 font-semibold">
                  {movie.title}
                </h3>
                <div className="flex justify-between items-center text-xs">
                  <p className=" gap-1 flex items-center text-gray-400 text-center">
                    <Timer />
                    {movie.duration}
                  </p>
                  <p className=" gap-1 flex items-center text-gray-400 text-center">
                    <Calendar />
                    {movie.releaseDate}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center space-x-4 mt-5 mb-8">
        {[
          { icon: <FaFacebookF />, link: "#" },
          { icon: <FaTwitter />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
          { icon: <FaPinterest />, link: "#" },
          { icon: <FaYoutube />, link: "#" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
}
