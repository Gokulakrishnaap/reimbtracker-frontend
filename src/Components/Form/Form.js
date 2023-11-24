import "./Form.css";
import { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [amount, setAmount] = useState("");
  const [bankacc, setBankacc] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [ackMsg, setAckMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      employeeId,
      amount,
      bankacc,
      category,
      desc,
    };

    console.log("Form data...", formData);

    fetch("http://localhost:8000/api/auth/formsubmit", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message === "Form Submitted Successfully") {
          setAckMsg("Form Submitted Successfully");
        } else {
          setErrMsg(res.message);
        }
      });
  };

  return (
    <div className="form">
      <form className="formContainer" onSubmit={formSubmit}>
        <div className="formDetails">
          <h2>Reimbursement Form</h2>
          <div className="formData">
            <p className="formKey">Name : </p>
            <input
              type="text"
              className="formField"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="formData">
            <p className="formKey">Employee ID : </p>
            <input
              type="number"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="formField"
              placeholder="Enter Employee ID"
            />
          </div>
          <div className="formData">
            <p className="formKey">Amount : </p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="formField"
              placeholder="Enter Amount"
            />
          </div>
          <div className="formData">
            <p className="formKey">Bank Account Number : </p>
            <input
              type="number"
              value={bankacc}
              onChange={(e) => setBankacc(e.target.value)}
              className="formField"
              placeholder="Enter Bank Account Number"
            />
          </div>
          <div className="formData">
            <p className="formKey">Category : </p>
            <select
              className="formDropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Internet and Phone bills">
                Internet and Phone bills
              </option>
              <option value="Training and Development">
                Training and Development
              </option>
              <option value="Softwares">Softwares</option>
              <option value="Equipments">Equipments</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="formData">
            <p className="formKey">Description : </p>
            <textarea
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="formTextArea"
              placeholder="Provide Description..."
            />
          </div>
          <div className="formData">
            <p className="formKey">Upload Document : </p>
            <button type="button" disabled className="formDoc">
              Click Here
            </button>
          </div>
          <button type="submit" className="formSubmit">
            Submit
          </button>
          {ackMsg ? <p className="ackMsg">{ackMsg}</p> : <></>}
          {errMsg ? <p className="errorMsg">{errMsg}</p> : <></>}
        </div>
      </form>
    </div>
  );
}
