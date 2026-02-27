import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function StepTwo({ formData, setFormData, next, back }) {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Email validation
    if (name === "email") {
      if (!value.includes("@")) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Password validation
    if (name === "password") {
      if (value.length < 8) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 8 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }

    // Confirm password validation
    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  };

  const isValid =
    formData.email.includes("@") &&
    formData.password.length >= 8 &&
    formData.confirmPassword === formData.password;

  return (
    <div>
      {/* Email */}
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="error">{errors.email}</p>

      {/* Password */}
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span
          className="eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <p className="error">{errors.password}</p>

      {/* Confirm Password */}
      <div className="password-wrapper">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span
          className="eye-icon"
          onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <p className="error">{errors.confirmPassword}</p>

      <div className="button-group">
        <button onClick={back} className="back-btn">
          Back
        </button>
        <button disabled={!isValid} onClick={next} className="next-btn">
          Next
        </button>
      </div>
    </div>
  );
}