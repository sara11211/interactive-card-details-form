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
    <main className="w-full h-screen font-medium font-space-grotesk">
      <div className="bg-[url('../src/assets/images/bg-main-mobile.png')] bg-no-repeat bg-cover bg-center h-[50%] flex justify-center items-center w-full">
        <div className="min-w-[300px] border-2 h-full border-yellow-500 relative">
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
      <div className="mt-24 max-w-[500px] mx-4">
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
