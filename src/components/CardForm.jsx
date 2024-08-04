import { set, useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const CardForm = ({ cardholderName, setCardholderName }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">

      <label htmlFor="cardholderName" className="input-label">
        cardholder name
      </label>

      <input
        {...register("cardholderName", {
          required: "Can't be blank",
          pattern: {
            value: /^[A-Za-zÀ-ÿ]+$/,
            message: "Wrong format, letters only",
          },
          maxLength: 30,
          onChange: (e) => setCardholderName(e.target.value)
        })}
        type="text"
        id="cardholderName"
        placeholder="e.g. Jane Appleseed"
        className="input-field"
      />

      {errors.cardholderName && <span className="error">{errors.cardholderName.message}</span>}

      <label htmlFor="cardholderNumber" className="input-label">
        card number
      </label>

      <InputMask 
        mask="**** **** **** ****"
        maskChar=""
        {...register("cardholderNumber", {
          required: "Can't be blank",
          validate: value => /^\d{0,4} ?\d{0,4} ?\d{0,4} ?\d{0,4}$/.test(value) || "Wrong format, numbers only",
        })}
        id="cardholderNumber"
        placeholder="e.g. 1234 5678 9123 0000"
        className="input-field"
      />

      {errors.cardholderNumber && <span className="error">{errors.cardholderNumber.message}</span>}

      <div className="flex items-center justify-between">
        <div>
          <label htmlFor="expMonth" className="input-label">
            exp. date (mm/yy)
          </label>

          <div className="flex items-center gap-2">
            <InputMask
              mask="99"
              maskChar=""
              {...register("expMonth", {
                required: "Can't be blank",
              })}
              id="expMonth"
              placeholder="MM"
              className="input-field w-16"
            />
            <input
              type="text"
              id="expYear"
              placeholder="YY"
              className="input-field w-16"
            />
            
          </div>
        </div>

        <div>
          <label htmlFor="cvc" className="input-label">
            cvc
          </label>

          <input
            type="text"
            id="cvc"
            placeholder="e.g. 123"
            className="input-field w-44"
          />
        </div>

      </div>

      <button type="submit" className="button">Confirm</button>

    </form>
  );
};

export default CardForm;
