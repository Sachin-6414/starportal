import React from "react";
import dictionary from "../assets/dictionary.svg";

const CryptoDictionary = () => {
  return (
    <>
      <div className="w-full py-24 sm:py-32 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h1 className="flex justify-center text-[#fff] text-xl">
              Crypto Dictionary
            </h1>
            <p className="flex justify-center text-[#9e9e9e] ">
              Your one-stop to catch up on all crypto terms
            </p>
          </div>
          <div className="rounded-2xl">
            <img
              className="rounded-2xl h-full w-full mt-6 border-white"
              alt="logo"
              src={dictionary}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDictionary;
