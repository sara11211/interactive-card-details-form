import { bgCardFront, cardLogo } from "../assets/images";

const CardFront = ({ cardholderName, cardNumber, expMonth, expYear }) => {
  return (
    <div className="card bg-[url('../src/assets/images/bg-card-front.png')] z-10 p-5 grid gap-8 right-[10%] bottom-[-25%] border-2 border-green-400">
      <img src={cardLogo} alt="card logo" width={50} />
      <div className="grid gap-3">
        <p className="text-lg text-left tracking-widest">
          {cardNumber || '0000 0000 0000 0000'}
        </p>
        <div className="flex justify-between items-center text-[0.6rem]">
          <p className="uppercase">{cardholderName || 'Jane Appleseed'}</p>
          <p>{expMonth || '00'}/{expYear || '00'}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
