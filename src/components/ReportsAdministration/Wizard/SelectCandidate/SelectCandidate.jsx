import { Fragment, useEffect, useState } from "react";
import { getCandidatesAPI } from "../../../../services/services";
import useTokenValidator from "../../../../hooks/useTokenValidator";

import "./SelectCandidate.css";
import avatar from "../../../../assets/avatar.jpg";

const SelectCandidate = ({setCreateReport, createReport, currentIndex, setIsLoggedIn}) => {
    const [candidates, setCandidates] = useState(null);
    const [activeCandidate, setActiveCandidate] = useState(false);
    const validator = useTokenValidator();

    useEffect(() => {
        getCandidatesAPI(validator, setIsLoggedIn)
        .then(candidate => setCandidates(candidate));
    }, [setIsLoggedIn]);


    const selectHandler = (event) => {
        event.stopPropagation();
        event.target.classList.toggle("pera");
    }
    // setCreateReport({...createReport, candidateId: a.id, candidateName: a.name, candidateEmail: a.email})
    return (
        <Fragment>
            {candidates && candidates.map((candidate, index) => (
                <div key={index} className="wizard-card d-flex col-5 border border-dark mb-2 ms-2" onClick={selectHandler}>
                    <img src={avatar} alt="" className="wizard-avatar px-1 py-1" />
                    <div className="pt-3 ps-4">
                        <p>{candidate.name}</p>
                        <span>{candidate.email}</span>
                    </div>
                </div>
                
            ))}
            <div>
                <button>Next</button>
            </div>
        
        
        </Fragment>
    )

}

export default SelectCandidate;