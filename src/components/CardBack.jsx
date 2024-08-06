const CardBack = ({ cvc }) => {
  return (
    <div className="left-[10%] bottom-[20%] border-2 border-red bg-[url('../src/assets/images/bg-card-back.png')] card py-16">
      <p className="text-[0.7rem] tracking-widest">{cvc || '000'}</p>
    </div>
  );
}

export default CardBack