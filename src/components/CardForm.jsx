import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleExpMonthChange = (e) => {
    setValue("expMonth", e.target.value, { shouldValidate: true });
    trigger("expMonth");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="absolute top-80">

      <label htmlFor="">cardholder name</label>  
      <input className="input-field block"
        {...register("cardholderName", {
          required: "Can't be blank",
          pattern: {
            value: /^[A-Za-zÀ-ÿ]+$/,
            message: "Wrong format, characters only",
          },
        })}
        type="text"
        placeholder="e.g. Jane Appleseed"
      />
      {errors.cardholderName && <div>{errors.cardholderName.message}</div>}

      <label htmlFor="">cardholder number</label> 
      <InputMask className="input-field"
        mask="9999 9999 9999 9999"
        maskChar=""
        {...register("cardNumber", {
          required: "Can't be blank",
          pattern: {
            value: /^\d{4} \d{4} \d{4} \d{4}$/,
            message: "Wrong format, numbers only",
          },
        })}
        onChange={(e) => {
          setValue("cardNumber", e.target.value, { shouldValidate: true });
          trigger("cardNumber");
        }}
        placeholder="e.g. 1234 5678 9123 0000"
      />
      {errors.cardNumber && <div>{errors.cardNumber.message}</div>}

      <div>
        <div>
        <label htmlFor="">cardholder name</label> 
          <InputMask className="input-field"
            mask="99"
            maskChar=""
            {...register("expMonth", {
              required: "Can't be blank",
              validate: (value) => {
                const month = parseInt(value, 10);
                return (month >= 1 && month <= 12) || "Invalid month";
              },
            })}
            onChange={handleExpMonthChange}
            placeholder="MM"
          />
          {errors.expMonth && <div>{errors.expMonth.message}</div>}

          <input className="input-field"
            {...register("expYear", {
              required: "Can't be blank",
            })}
            type="text"
            placeholder="YY"
          />
          {errors.expYear && <div>{errors.expYear.message}</div>}
        </div>

        <InputMask className="input-field"
          mask="999"
          maskChar=""
          {...register("cvc", {
            required: "Can't be blank",
          })}
          placeholder="e.g. 123"
        />
        {errors.cvc && <div>{errors.cvc.message}</div>}
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default CardForm;
