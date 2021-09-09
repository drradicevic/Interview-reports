import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./LoginForm.css";


export const LoginForm = (props) => {
    
    return (
        <div className="vh-100 fo-fa">
    <div className="d-flex justify-content-center align-items-center backgcol h-100">
        <div className="d-flex justify-content-center align-items-center bg-white bgshadow h-75 w-75 bradius">
            <div className=" border border-dark bradius formStyle">
                <form className="px-4 py-3" onSubmit={props.submitForm}>
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
                    ><Link to="/homepage"> 
                    LOG IN
                    </Link>
                </button>
            </form>
        </div>
    </div>
</div>
</div>
    )
}