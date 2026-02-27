export default function StepThree({ formData, back, submit }) {
  return (
    <div>
      <h3>Review Your Data</h3>

      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>DOB: {formData.dob}</p>
      <p>Email: {formData.email}</p>

      <br />

    <div className="button-group">
      <button onClick={back} className="back-btn">Back</button>
      <button onClick={submit} className="submit-btn">Submit</button>
     </div>
    </div>
  );
}