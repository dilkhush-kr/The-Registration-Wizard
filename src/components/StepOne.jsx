import { useState } from "react";

export default function StepOne({ formData, setFormData, next }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (value.trim() === "") {
      setErrors({ ...errors, [name]: "This field is required" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const isValid =
    formData.firstName &&
    formData.lastName &&
    formData.dob &&
    !errors.firstName &&
    !errors.lastName;

  return (
    <div>
      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <p className="error">{errors.firstName}</p>

      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <p className="error">{errors.lastName}</p>

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />

      <br /><br />

      <div className="button-group">
       <button disabled={!isValid} onClick={next}   className="next-btn">
        Next
         </button>
      </div>
    </div>
  );
}