import { cardLogo } from "../assets/images";

const CardFront = ({ cardholderName, cardNumber, expMonth, expYear }) => {
  const formattedCardNumber = (cardNumber || "")
    .replace(/\s+/g, "")
    .padEnd(16, "0")
    .replace(/(\d{4})(?=\d)/g, "$1 ");

  return (
    <div className="card bg-[url('../src/assets/images/bg-card-front.png')] z-10 p-5 grid gap-8 max-lg:-bottom-10 lg:top-0 lg:left-0">
      <img src={cardLogo} alt="card logo" width={50} />
      <div className="grid gap-3">
        <p
          className="text-lg text-center trackigng-widest xl:text-2xl"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {formattedCardNumber}
        </p>
        <div className="flex justify-between items-center text-[0.6rem] lg:text-[0.7rem]">
          <p className="uppercase">{cardholderName || "Jane Appleseed"}</p>
          <p>
            {expMonth || "00"}/{expYear || "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
