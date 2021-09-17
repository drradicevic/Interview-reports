import { useState, useEffect} from "react";

import AboutCandidate from "./AboutCandidate/AboutCandidate";
import Reports from "./Reports/Reports";
import Modal from "./Modal/Modal";
import Backdrop from "./Modal/Backdrop";


import { getSingleCandidateInfo } from "../../services/getSingleCandidateInfo"; 
import { getCandidateReportsAPI } from "../../services/getCandidateReportsAPI";

const ReportsPage = (props) => {
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [reports, setReports] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalReport, setModalReport] = useState(null)
 
  const singleCandidateId = props.match.params.id;
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    getSingleCandidateInfo(`http://localhost:3333/api/candidates/${singleCandidateId}`, token)
    .then(info => setCandidateInfo(info));
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token")
    getCandidateReportsAPI(`http://localhost:3333/api/reports`, token)
      .then(reports => setReports(reports.filter(el => el.candidateId === parseInt(singleCandidateId))))
  }, [])

  const modalHandler = (id) => {
    const company = reports.filter((report) => report.id === id)
    setModalReport(company);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  const cancelHandler = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }

 
  return (
    (reports && candidateInfo) ?
    <div className="main">
    <AboutCandidate candidateData={candidateInfo}/>
    <Reports reports={reports} modalHandler={modalHandler} />
    <Backdrop showModal={showModal} cancelModal={cancelHandler} />
    <Modal showModal={showModal} cancelModal={cancelHandler} modalReport={modalReport} />
    </div>
    :
    <p>Loading...</p>
    );
  };
  
  export default ReportsPage;