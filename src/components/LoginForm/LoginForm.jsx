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

    return (
        <div className="login-container">
        <div className="login">
            <h1>Login</h1>
             <input type="text" placeholder="username" value={username} onChange={getUserNameHandler} />
             <input type="password" placeholder="password" value={password} onChange={passwordHandler} />
             <button type="submit" className="login-button" /*onClick*/ >login</button> 
             <button type="submit" className="reset-button" onClick={resetButton} >reset</button> 
        </div>
        </div>
    )
}