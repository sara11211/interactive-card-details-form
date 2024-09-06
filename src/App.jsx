import { useState } from "react";
import CardBack from "./components/CardBack";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import CardsLayout from "./layouts/CardsLayout";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [showThanks, setShowThanks] = useState(false);

  const onSubmit = () => {
    setShowThanks(true);
  };

  return (
    <main className="w-full h-screen font-medium font-space-grotesk lg:flex lg:items-center ">
      <div className="bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat bg-cover bg-center h-[40%] flex justify-center items-center max-lg:w-full lg:bg-[url('../src/assets/images/bg-main-desktop.png')] lg:h-full lg:w-[35%]">
        <div className="min-w-[300px] max-lg:h-full relative max-lg:pt-24 lg:flex lg:items-center lg:justify-center lg:min-h-[350px] lg:left-[40%] lg:min-w-[300px] xl:min-w-[350px]">
          <CardFront
            cardholderName={cardholderName}
            cardNumber={cardNumber}
            expMonth={expMonth}
            expYear={expYear}
            cvc={cvc}
          />
          <CardBack cvc={cvc} />
        </div>
      </div>
      <div className="max-lg:pt-20 px-4 mx-auto lg:w-[70%] flex items-center justify-center max-w-[350px] relative">
        {!showThanks && <CardForm
          setCardholderName={setCardholderName}
          setCardNumber={setCardNumber}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
          onSubmit={onSubmit}
        />}
        {showThanks && <ThankYou />}
      </div>
    </main>
  );
};

export default App;
