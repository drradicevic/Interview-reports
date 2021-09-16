import { useEffect, useState } from "react";

import { getCandidatesAPI } from "../../services/getCandidatesAPI";
import Card from "./Card/Card";

import "./Candidates.css";


const avatar = "https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg";
    

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const [filteredCandidates, setfilteredCandidates] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        getCandidatesAPI("http://localhost:3333/api/candidates", token)
            .then(candidates => {
                setCandidates(candidates)
                setfilteredCandidates(candidates)});
    }, [])

    const onTypingHandler = (e) => {
        setInputValue(e.target.value);
        const filtered = candidates.filter(candidate => candidate.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setfilteredCandidates(filtered);
    }


    return (
        <div className="w-75 mx-auto mt-5 mb-5">
            <div className="d-flex justify-content-between">
              <h2>Candidates</h2>
              <input
                value={inputValue}
                placeholder= "search..."
                type="text"
                onChange={onTypingHandler}
                />
            </div>
            <div className="d-flex flex-wrap justify-content-between text-center mt-5">
            {
            filteredCandidates.map((candidate, index) => 
                <Card candidateInfo={candidate} key={index} avatar={avatar} />
            )
            }
            </div>
            
        </div>
    )
};

export default Candidates;