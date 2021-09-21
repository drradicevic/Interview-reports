import { useEffect, useState } from "react";

import { getCandidatesAPI } from "../../services/getCandidatesAPI";
import Card from "./Card/Card";

import avatar from "../../assets/avatar.jpg";

import "./Candidates.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setfilteredCandidates] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCandidatesAPI("http://localhost:3333/api/candidates", token).then(
      (candidates) => {
        setCandidates(candidates);
        setfilteredCandidates(candidates);
      }
    );
  }, []);

  const onTypingHandler = (e) => {
    setInputValue(e.target.value);
    const filtered = candidates.filter((candidate) =>
      candidate?.name?.toLowerCase().includes(e?.target?.value?.toLowerCase())
    );
    setfilteredCandidates(filtered);
  };

  return (
    <div className="w-75 mx-auto mt-5 mb-5">
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-md-between text-center">
        <h2 className="candidates-title col-12 col-md-6 text-md-start">
          Candidates
        </h2>
        <div className="col-12 col-md-6 text-md-end">
          <input
            value={inputValue}
            placeholder="Search..."
            type="text"
            onChange={onTypingHandler}
            className="w-50 w-sm-25 w-md-25 ps-3 py-2 input-search"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between mt-5">
        {filteredCandidates.map((candidate, index) => (
          <Card candidateInfo={candidate} key={index} avatar={avatar} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
