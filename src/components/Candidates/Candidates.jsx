import { useEffect, useState } from "react";

import { getCandidatesAPI } from "../../services/getCandidatesAPI";
import Card from "./Card/Card";

import "./Candidates.css";


const avatar = "https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg";
    

const Candidates = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        getCandidatesAPI("http://localhost:3333/api/candidates", token)
            .then(candidates => setCandidates(candidates));
    }, [])

    return (
        <div className="w-75 mx-auto mt-5 mb-5">
            <div className="d-flex justify-content-between">
              <h2>Candidates</h2>
              <input type="search" />
            </div>
            <div className="d-flex flex-wrap justify-content-between text-center mt-5">
            {
            candidates.map((candidate, index) => 
                <Card candidateInfo={candidate} key={index} avatar={avatar} />
            )
            }
            </div>
            
        </div>
    )
};

export default Candidates;