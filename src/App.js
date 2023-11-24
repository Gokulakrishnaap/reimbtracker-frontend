import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { SignUp } from "./Components/SignUp/SignUp";
import { Login } from "./Components/Login/Login";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
