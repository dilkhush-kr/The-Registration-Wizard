import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Success from "./Success";
import "../styles/wizard.css";

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  if (isSubmitted) {
    return <Success />;
  }

 return (
  <div className="wizard-container">
    <h2 className="wizard-title">Step {step} of 3</h2>

    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${(step / 3) * 100}%` }}
      ></div>
    </div>

    {step === 1 && (
      <StepOne formData={formData} setFormData={setFormData} next={next} />
    )}

    {step === 2 && (
      <StepTwo formData={formData} setFormData={setFormData} next={next} back={back} />
    )}

    {step === 3 && (
      <StepThree
        formData={formData}
        back={back}
        submit={() => {
          console.log(formData);
          setIsSubmitted(true);
        }}
      />
    )}
  </div>
);
}