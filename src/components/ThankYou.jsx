import { iconCompleted } from "../assets/images";
import {motion as m} from 'framer-motion'

const ThankYou = () => {
  return (
    <m.div 
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{
      ease: 'easeInOut',
      duration: 0.5
    }}
    className="grid w-full text-center gap-7 lg:absolute lg:left-[10%] xl:left-[5%] 2xl:left-[0%] xl:gap-10">
      <div className="mx-auto">
        <img src={iconCompleted} alt="icon completed submission" />
      </div>
      <div className="grid gap-3 xl:gap-5">
        <h2 className="text-xl font-semibold tracking-widest uppercase">thank you!</h2>
        <p className="text-sm tracking-wide md:text-base text-dark-grayish-violet">
          We've added your card details
        </p>
      </div>
      <button className="mb-6 button">Continue</button>
    </m.div>
  );
};

export default ThankYou;
