import React from "react";
import creator1 from "../assets/creator1.png";
import creator2 from "../assets/creator2.png";
import creator3 from "../assets/creator3.png";
import creator4 from "../assets/creator4.png";
// import ImageOverlay from "./ImageOverlay";
import playButton from "../assets/playButton.png";

const images = [
  {
    id: 1,

    imageUrl: creator1,
  },
  {
    id: 2,

    imageUrl: creator2,
  },
  {
    id: 3,

    imageUrl: creator3,
  },
  {
    id: 4,

    imageUrl: creator4,
  },
];

const CryptoCreators = () => {
  return (
    <>
      <div className="w-full py-24 sm:py-32 border-b border-gray-700 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-24">
          <div className="mx-auto w-full lg:mx-0">
            <h1 className="flex justify-center text-[#fff] text-2xl">
              Top Crypto Creators and Projects to Follow
            </h1>
            <p className="flex justify-center text-[#919191]">
              Answers to your crypto doubts, straight from the experts
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {images.map((item, index) => (
              <li key={index}>
                <img
                  alt="logo"
                  src={item.imageUrl}
                  className="rounded-2xl object-cover"
                />
                <div className="relative flex items-center rounded-full justify-center bg-black bg-opacity-50 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <img
                    src={playButton}
                    alt="Play Button"
                    className="w-12 h-12 bg-blend-difference"
                  /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CryptoCreators;
