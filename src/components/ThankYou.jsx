import React from "react";
import { iconCompleted } from "../assets/images";

const ThankYou = () => {
  return (
    <div className="grid w-full text-center gap-7 lg:absolute lg:left-[15%]">
      <div className="mx-auto">
        <img src={iconCompleted} alt="icon completed submission" />
      </div>
      <div className="grid gap-3">
        <h2 className="text-xl font-semibold tracking-widest uppercase">thank you!</h2>
        <p className="text-sm tracking-wide md:text-base text-dark-grayish-violet">
          We've added your card details
        </p>
      </div>
      <button className="py-2 mb-6 button">Continue</button>
    </div>
  );
};

export default ThankYou;
