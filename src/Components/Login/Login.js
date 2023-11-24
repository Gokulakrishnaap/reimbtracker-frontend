import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const login = () => {
    const credentials = {
      email,
      password,
    };

    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message === "Login Successful") {
          localStorage.setItem("User Data", JSON.stringify(res.user));
          navigate("/");
        } else {
          setErrMsg(res.message);
        }
      });
  };

  return (
    <div className="login">
      <div className="loginLeft">
        <div className="loginCred">
          <h4>E-Mail</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="textFieldLogin"
            placeholder="Enter Email Id"
          />
        </div>
        <div className="loginCred">
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="textFieldLogin"
            placeholder="Enter Password"
          />
        </div>
        <button type="button" className="loginButton" onClick={login}>
          Login
        </button>
        {errMsg ? <p className="errorMsg">{errMsg}</p> : <></>}
        <p className="signUpButton">
          New User ?{" "}
          <span className="signUpLink" onClick={() => navigate("/signup")}>
            Sign Up for Free
          </span>
        </p>
      </div>
      <div className="loginRight">
        <img
          className="imageLogin"
          src="https://technofaq.org/wp-content/uploads/2022/05/loyalty-fi-man.png"
          alt="RI-Tracker"
        />
      </div>
    </div>
  );
}
