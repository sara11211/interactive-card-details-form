import { useState } from "react";
import CardBack from "./components/CardBack";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import CardsLayout from "./layouts/CardsLayout";

const App = () => {

  const [cardholderName, setCardholderName] = useState('')

  return (
    <main className="relative font-space-grotesk font-medium h-screen w-screen flex items-center justify-center">
      <CardsLayout>
        <CardFront cardholderName={cardholderName} />
        <CardBack />
        <CardForm cardholderName={cardholderName} setCardholderName={setCardholderName} />
      </CardsLayout>
    </main>
  );
};

export default App;
