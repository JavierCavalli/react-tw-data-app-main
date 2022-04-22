import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Free</h2>
          <p className="text-center text-4xl font-bold">$0</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Files up to 2GB</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Ad-supported </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Basic</h2>
          <p className="text-center text-4xl font-bold">$20</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Files up to 10GB</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Ad-free </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Premium</h2>
          <p className="text-center text-4xl font-bold">$99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Files up to 100GB</p>
            <p className="py-2 border-b mx-8">5 Granted User</p>
            <p className="py-2 border-b mx-8">Ad-free</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
