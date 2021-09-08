import React, {useState} from "react";

import "./LoginForm.css";


export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const getUserNameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const resetButton = () => {
        setUsername("");
        setPassword("");
    };
}