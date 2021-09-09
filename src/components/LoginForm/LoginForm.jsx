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
        <div className="vh-100">
    <div className="d-flex justify-content-center align-items-center bg-secondary h-100">
        <div className="d-flex justify-content-center align-items-center bg-white h-75 w-75 rounded">
            <div className=" border border-dark rounded">
                <form className="px-4 py-3">
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                        <input
                        type="email"
                        className="form-control fas"
                        id="exampleDropdownFormEmail1"
                        placeholder="&#xf0e0; email@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormPassword1">Password</label>
                        <input
                        type="password"
                        className="form-control fas"
                        id="exampleDropdownFormPassword1"
                        placeholder="&#xf023; Password"
                        />
                    </div>
                    <button
                    type="submit"
                    className="btn btn-primary w-100 border-success bg-success my-4"
                    >
                    Sign in
                </button>
            </form>
        </div>
    </div>
</div>
</div>
    )
}