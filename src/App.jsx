import { useState } from "react";
import CardBack from "./components/CardBack";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import CardsLayout from "./layouts/CardsLayout";

const App = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <main className="relative font-space-grotesk font-medium h-screen w-screen">
      <div className="border-2 border-blue-400 w-full h-[40%] bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
        <div className="relative border-2 border-pink-500 w-[75%] max-w-[400px] h-full">
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
      {/* <div>
        <CardForm
          setCardholderName={setCardholderName}
          setCardNumber={setCardNumber}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
        />
      </div> */}
    </main>
  );
};

export default App;
