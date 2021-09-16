import { useState, useEffect} from "react";
import AboutCandidate from "./AboutCandidate/AboutCandidate";
import Reports from "./Reports/Reports"
import { getSingleCandidateInfo } from "../../services/getSingleCandidateInfo";
import { getCandidateReportsAPI } from "../../services/getCandidateReportsAPI"; 

const ReportsPage = (props) => {
  
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [reports, setReports] = useState(null);
  
  const singleCandidateId = props.match.params.id;
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    getSingleCandidateInfo(`http://localhost:3333/api/candidates/${singleCandidateId}`, token)
    .then(info => setCandidateInfo(info));
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCandidateReportsAPI(`http://localhost:3333/api/reports`, token)
    .then(reports => setReports(reports.filter(el => el.candidateId === parseInt(singleCandidateId))));
  }, [])
  
  
  return (
    (reports && candidateInfo) 
    ?
    <div className="main">
      <AboutCandidate candidateData={candidateInfo} />
      <Reports reports={reports}/>
    </div>
    :
    <p>Loading...</p>
    );
  };
  
  export default ReportsPage;