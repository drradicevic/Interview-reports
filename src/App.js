import React, { useState, useEfect } from "react";

import Header from "./components/Header/Header";
import { LoginForm } from "./components/LoginForm/LoginForm.jsx";
import { getTokenAPI } from "./services/getTokenAPI";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getTokenAPI("http://localhost:3333/login", {
      email: "dev@dev.com",
      password: "developer",
    }).then((data) => {
      setToken(data.accessToken); // JSON data parsed by `data.json()` call
    });
  };
  console.log(token);
  return <LoginForm submitForm={onSubmitHandler} />;
}

export default App;
