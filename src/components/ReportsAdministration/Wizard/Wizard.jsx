import { useState } from "react";

import SelectCandidate from "./SelectCandidate/SelectCandidate";

import "./Wizard.css";

const Wizard = ({setIsLoggedIn}) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [createReport, setCreateReport] = useState({
        candidateEmail: null,
        candidateId: null,
        candidateName: null,
        companyId: null,
        companyName: null,
        id: null,
        inteviewDate: new Date(),
        note: null,
        phase: null,
        status: null
    });
    console.log("da da",createReport)

    const currentPage = () => {
        switch (currentIndex) {
            case 1:
                return <SelectCandidate setCreateReport={setCreateReport} createReport={createReport} currentIndex={currentIndex} setIsLoggedIn={setIsLoggedIn} />
                ;
            case 2:
                return (
                    <div>
                        <h2>SECOND PAGE</h2>
                    </div>
                );
            case 3: 
                return(
                    <div>
                        <h2>THIRD PAGE</h2>
                    </div>
                );
            default:
                break;
        }
    }


    return (
       <div className="d-flex">
           <div className="col-3">
               <h3>1 Select Candidate</h3>
               <h3>2 Select Company</h3>
               <h3>3 Fill Report Details</h3>
           </div>
           <div className="candidates-container d-flex flex-wrap ">
            {currentPage()}
            </div>
        </div>
    )
}

export default Wizard;