const CardBack = ({ cvc }) => {
  const cvcFormatted = (cvc || "000").padEnd(3, "0");

  return (
    <div className="bg-[url('../src/assets/images/bg-card-back.png')] bg-center bg-no-repeat card py-16 flex items-center justify-end px-8 lg:px-10 max-lg:bottom-12 max-lg:right-0 lg:bottom-0 lg:right-0">
      <p
        className="text-[0.7rem] tracking-widest xl:text-[0.9rem]"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {cvcFormatted}
      </p>
    </div>
  );
};

export default CardBack;
