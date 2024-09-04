import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import ThankYou from "./ThankYou";

const CardForm = ({
  setCardholderName,
  setCardNumber,
  setExpMonth,
  setExpYear,
  setCvc,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const [showThanks, setShowThanks] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setShowThanks(true);
  };

  return (
    <>
      {!showThanks && (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label htmlFor="cardholderName" className="input-label">
            cardholder name
          </label>

          <input
            {...register("cardholderName", {
              required: "Can't be blank",
              pattern: {
                value: /^[A-Za-zÀ-ÿ ]+$/,
                message: "Wrong format, letters only",
              },
              onChange: (e) => setCardholderName(e.target.value),
            })}
            type="text"
            id="cardholderName"
            placeholder="e.g. Jane Appleseed"
            className={`input-field ${
              errors.cardholderName ? "border-red" : ""
            }`}
          />

          {errors.cardholderName && (
            <span className="error">{errors.cardholderName.message}</span>
          )}

          <label htmlFor="cardholderNumber" className="input-label">
            card number
          </label>

          <InputMask
            mask="**** **** **** ****"
            maskChar=""
            {...register("cardNumber", {
              required: "Can't be blank",
              validate: {
                pattern: (value) =>
                  /^\d{0,4} ?\d{0,4} ?\d{0,4} ?\d{0,4}$/.test(value) ||
                  "Wrong format, numbers only",
                length: (value) =>
                  value.length === 19 || "Card number is too short",
              },
              onChange: (e) => setCardNumber(e.target.value),
            })}
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            className={`input-field ${errors.cardNumber ? "border-red" : ""}`}
          />

          {errors.cardNumber && (
            <span className="error">{errors.cardNumber.message}</span>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="relative">
              <label htmlFor="expMonth" className="input-label">
                exp. date (mm/yy)
              </label>
              <div className="flex items-center gap-2">
                <InputMask
                  mask="99"
                  maskChar=""
                  {...register("expMonth", {
                    required: "Can't be blank",
                    validate: (value) =>
                      (value >= 1 && value <= 12) || "Invalid month",
                    onChange: (e) => setExpMonth(e.target.value),
                  })}
                  id="expMonth"
                  placeholder="MM"
                  className={`w-16 input-field ${
                    errors.expMonth ? "border-red" : ""
                  }`}
                />
                <InputMask
                  mask="99"
                  maskChar=""
                  {...register("expYear", {
                    required: "Can't be blank",
                    onChange: (e) => setExpYear(e.target.value),
                  })}
                  id="expYear"
                  placeholder="YY"
                  className={`w-16 input-field ${
                    errors.expYear ? "border-red" : ""
                  }`}
                />
              </div>
              {(errors.expMonth || errors.expYear) && (
                <span className="absolute left-0 -bottom-4 error">
                  {errors.expMonth?.message || errors.expYear?.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label htmlFor="cvc" className="input-label">
                cvc
              </label>

              <InputMask
                mask="999"
                maskChar=""
                {...register("cvc", {
                  required: "Can't be blank",
                  onChange: (e) => setCvc(e.target.value),
                })}
                id="cvc"
                placeholder="e.g. 123"
                className={`w-36 input-field ${errors.cvc ? "border-red" : ""}`}
              />
              {errors.cvc && (
                <span className="absolute left-0 error -bottom-4">
                  {errors.cvc.message}
                </span>
              )}
            </div>
          </div>

          <button type="submit" className="py-2 my-6 button">
            Confirm
          </button>
        </form>
      )}
      {showThanks && <ThankYou />}
    </>
  );
};

export default CardForm;
