const CardBack = ({ cvc }) => {
  const cvcFormatted = (cvc || "000").padEnd(3, "0");

  return (
    <div className="bg-[url('../src/assets/images/bg-card-back.png')] bg-center bg-no-repeat card py-16 flex items-center justify-end px-8 max-md:bottom-12 max-md:right-0 md:bottom-0 md:right-0">
      <p
        className="text-[0.7rem] tracking-widest"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {cvcFormatted}
      </p>
    </div>
  );
};

export default CardBack;
