import React, {useState} from "react";

import "./LoginForm.css";


export const LoginForm = () => {
    
    return (
        <div className="vh-100">
    <div className="d-flex justify-content-center align-items-center backgcol h-100">
        <div className="d-flex justify-content-center align-items-center bg-white bgshadow h-75 w-75 bradius">
            <div className=" border border-dark bradius formStyle">
                <form className="px-4 py-3">
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control fas inpstyle bradius"
                        id="exampleDropdownFormEmail1"
                        placeholder="&#xf0e0; email@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        className="form-control fas inpstyle bradius"
                        id="exampleDropdownFormPassword1"
                        placeholder="&#xf023; Password"
                        />
                    </div>
                    <button
                    type="submit"
                    className="btn btn-primary w-100 buttoncol bradius my-4"
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