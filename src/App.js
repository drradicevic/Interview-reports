import React, { useState, useEfect } from "react";
import { Route, Switch } from "react-router";
import { LoginForm } from "./components/LoginForm/LoginForm.jsx";
import { getTokenAPI } from "./services/getTokenAPI";
import Main from "./components/Main/Main";
import ReportsPage from "./components/ReportsPage/ReportsPage.jsx";

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
      localStorage.setItem("token", data.accessToken);
    });
  };
  console.log(token);
  return (
    !token ? 
      <LoginForm submitForm={onSubmitHandler} /> 
      :
      <Switch>
      <Route path="/homepage" component={Main} />
      <Route exact path="/reports/:id" component={ReportsPage} />
      </Switch>
  )
}

export default App;
