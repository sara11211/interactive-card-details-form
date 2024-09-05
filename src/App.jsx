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
    <main className="w-full h-screen font-medium font-space-grotesk">
      <div className="bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat bg-cover bg-center h-[40%] flex justify-center items-center max-md:w-full md:bg-[url('../src/assets/images/bg-main-desktop.png')] md:absolute md:top-0 md:left-0 md:h-full">
        <div className="min-w-[300px] max-md:h-full relative max-md:pt-24 md:flex md:items-center md:justify-center min-h-[350px] md:left-[30%] md:min-w-[350px]">
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
      {/* <div className="pt-24 max-w-[500px] px-4 mx-auto">
        <CardForm
          setCardholderName={setCardholderName}
          setCardNumber={setCardNumber}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
        />
      </div> */}
      {/* <div className="my-24 max-w-[280px] grid mx-auto">
      <ThankYou />
      </div> */}
    </main>
  );
};

export default App;
