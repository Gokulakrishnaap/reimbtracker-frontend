import "./SignUp.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [ackMsg, setAckMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // const navigate = useNavigate();

  const signUp = () => {
    const addUser = {
      username,
      email,
      password,
      employeeId,
      contactNumber,
      city,
    };

    fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message === "User Added Successfully") {
          setAckMsg("User Added Successfully");
        } else {
          setErrMsg(res.message);
        }
      });
  };

  return (
    <div className="signup">
      <div className="signupLeft">
        <div className="signupCred">
          <h4>Username</h4>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="textField"
            placeholder="Enter Username"
          />
        </div>
        <div className="signupCred">
          <h4>E-Mail</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="textField"
            placeholder="Enter Email Id"
          />
        </div>
        <div className="signupCred">
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="textField"
            placeholder="Enter Password"
          />
        </div>
        <div className="signupCred">
          <h4>Employee ID</h4>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="textField"
            placeholder="Enter Employee Id"
          />
        </div>
        <div className="signupCred">
          <h4>Contact Number</h4>
          <input
            type="number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="textField"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className="signupCred">
          <h4>City</h4>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="textField"
            placeholder="Enter City"
          />
        </div>
        <button type="button" className="signupButton" onClick={signUp}>
          Sign Up
        </button>
        {ackMsg ? <p className="ackMsg">{ackMsg}</p> : <></>}
        {errMsg ? <p className="errorMsg">{errMsg}</p> : <></>}
      </div>
      <div className="signupRight">
        <img
          className="imageSignup"
          src="https://technofaq.org/wp-content/uploads/2022/05/loyalty-fi-man.png"
          alt="RI-Tracker"
        />
      </div>
    </div>
  );
}
