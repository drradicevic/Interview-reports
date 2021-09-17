import React from "react";
import { Link } from "react-router-dom";
import { getTokenAPI } from "../../services/getTokenAPI";

import "./LoginForm.css";


const LoginForm = ({onLogin}) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        getTokenAPI("http://localhost:3333/login", {
          email: "dev@dev.com",
          password: "developer",
        }).then((data) => {
            localStorage.setItem("token", data.accessToken);
            onLogin(true);
        });
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
                                    className="form-control fas form-input-style border-rad"
                                    id="exampleDropdownFormEmail1"
                                    placeholder="&#xf0e0; email@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control fas form-input-style border-rad"
                                    id="exampleDropdownFormPassword1"
                                    placeholder="&#xf023; Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100 button-col border-rad my-4"
                            > LOG IN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;