import { bgCardFront, cardLogo } from "../assets/images";

const CardFront = () => {
  return (
    // change top and left to be good for all screens
    // add shadow
    <div className="absolute top-32 left-[4%] z-10 bg-[url('../src/assets/images/bg-card-front.png')] bg-no-repeat bg-cover bg-center w-[285px] h-[155px] rounded-md p-5 text-light-grayish-violet grid gap-8">
      <img src={cardLogo} alt="card logo" width={50} />
      <div className="grid gap-3">
        {/* make text in center (num card) */}
        <p className="text-lg text-left tracking-widest">
          0000 0000 0000 0000
        </p>
        <div className="flex justify-between items-center text-[0.7rem]">
          <p className="uppercase">jane appleseed</p>
          <p>00/00</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
