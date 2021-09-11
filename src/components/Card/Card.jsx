import { useEffect, useState } from "react";

import { getCandidatesAPI } from "../../services/getCandidatesAPI";
import Candidate from "./Candidate/Candidate";

import "./Card.css";

const avatars = [
    "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
    "https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg",
    "https://scholly-www.s3.amazonaws.com/wp/wp-content/uploads/2020/10/KtCFjlD4.jpg",
    "https://www.kcl.ac.uk/importedimages/schools/business/news-images/elisa-russo500x499.xe1f2b6fd.jpg?w=376&h=375&crop=368,208,8,35",
    "https://directuslive.employeeoutlook.com/uploads/_/originals/b4909f1b-aafb-4865-b01c-9ee51d85c1c2.jpeg",
    "https://i.insider.com/5e206d2db6d52d705b5a6b03?width=1136&format=jpeg",
    "https://uifaces.co/our-content/donated/ukegoVAy.jpg",
    
]

const Card = () => {

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
                <Candidate candidateInfo={candidate} key={index} avatar={avatars[index]} />
            )
            }
            </div>
            
        </div>
    )
};

export default Card;