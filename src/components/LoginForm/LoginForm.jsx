import React from "react";

import useInput from "../../hooks/useInput";

import { getTokenAPI } from "../../services/getTokenAPI";

import "./LoginForm.css";


const LoginForm = ({onLogin}) => {
    const {
        value: emailValue,
        isValid: isEmailValid,
        isTouched: emailIsTouched,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmail
    } = useInput(value => value.includes("@"));

    const {
        value: passValue,
        isValid: isPassValid,
        isTouched: passIsTouched,
        valueChangeHandler: passChangeHandler,
        reset: resetPass
    } = useInput(value => value.trim() !== "" && value.length > 6);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (isPassValid && isEmailValid) {
                getTokenAPI("http://localhost:3333/login", {
                    email: emailValue,
                    password: passValue,
                }).then((data) => {
                    localStorage.setItem("token", data.accessToken); // JSON data parsed by `data.json()` call
                    onLogin(true);
                }).catch(err => alert(err.message)); 
        } else {
            alert("All fields are required!")
        }

        resetEmail();
        resetPass();
    };

    return (
        <div className="vh-100 font-fam">
            <div className="d-flex justify-content-center align-items-center bg-color h-100">
                <div className="d-flex justify-content-center align-items-center bg-img h-75 border-rad">
                    <div className="mini-cont border-rad">
                        <form className="px-4 py-3" onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control fas form-input-style border-rad placeholder-font"
                                    placeholder="&#xf0e0;  enter email"
                                    value={emailValue}
                                    onChange={emailChangeHandler}
                                />
                                {(!isEmailValid && emailIsTouched) && (<p className="error-msg mb-0">Invalid Email</p>)}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control fas form-input-style border-rad placeholder-font"
                                    placeholder="&#xf13e;  enter password"
                                    value={passValue}
                                    onChange={passChangeHandler}
                                />
                                {(!isPassValid && passIsTouched) && (<p className="error-msg mb-0">Invalid Password!</p>)}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100 button-col border-rad my-4">
                                LOG IN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;