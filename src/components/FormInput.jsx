import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [forcused, setForcused] = useState(false);

  const handleForcus = (e) => {
    setForcused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleForcus}
        onFocus={() =>
          inputProps.name === "confirmpassword" && setForcused(true)
        }
        forcused={forcused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
