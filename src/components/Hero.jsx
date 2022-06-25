import React from "react";
import dp from "../assets/dp.jpg";
import useTyping from "../hooks/useTyping";

function Hero() {
  let intro = useTyping("It's me Sargam Poudel.");
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={dp} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold"> {intro}</h1>
          <p className="py-6">
            Full stack web developer based in Nepal who likes to get things done
            with javascript and python.
          </p>
          <button className="btn btn-primary">Download my résumé</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
