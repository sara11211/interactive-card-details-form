import CardBack from "./components/CardBack";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import CardsLayout from "./layouts/CardsLayout";

const App = () => {
  return (
    <main className="relative font-space-grotesk font-medium h-screen w-screen flex items-center justify-center">
      <CardsLayout>
        <CardFront />
        <CardBack />
        <CardForm />
      </CardsLayout>
    </main>
  );
};

export default App;
