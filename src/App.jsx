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

  return (
    <main className="w-full h-screen font-medium font-space-grotesk xl:flex xl:items-center xl:justify-center">
      <div className="bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat bg-cover bg-center h-[40%] flex justify-center items-center max-xl:w-full xl:bg-[url('../src/assets/images/bg-main-desktop.png')] xl:h-full xl:w-[30%]">
        <div className="min-w-[300px] max-xl:h-full relative max-xl:pt-24 xl:flex xl:items-center xl:justify-center xl:min-h-[350px] xl:left-[30%] xl:min-w-[350px]">
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
      <div className="max-xl:pt-24 px-4 max-xl:mx-auto xl:w-[70%] flex items-center justify-center">
        <CardForm
          setCardholderName={setCardholderName}
          setCardNumber={setCardNumber}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
        />
      </div>
    </main>
  );
};

export default App;
