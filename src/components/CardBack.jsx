const CardBack = ({ cvc }) => {
  return (
    <div className="border-2 border-red bg-[url('../src/assets/images/bg-card-back.png')] bg-center bg-no-repeat card py-16 flex items-center justify-end px-8 bottom-12 right-0">
      <p className="text-[0.7rem] tracking-widest">{cvc || '000'}</p>
    </div>
  );
}

export default CardBack