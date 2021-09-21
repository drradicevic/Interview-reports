import { useState, useEffect} from "react";
import { useParams } from "react-router";
import useTokenValidator from "../../hooks/useTokenValidator";

import AboutCandidate from "./AboutCandidate/AboutCandidate";
import Reports from "./Reports/Reports";
import Modal from "./Modal/Modal";
import Backdrop from "./Modal/Backdrop";
import Spinner  from "../Spinner/Spinner";


import { getSingleCandidateInfo } from "../../services/services"; 
import { getCandidateReportsAPI } from "../../services/services";

const ReportsPage = ({setIsLoggedIn}) => {
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [reports, setReports] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalReport, setModalReport] = useState(null);

  const validate = useTokenValidator();
  const singleCandidateId = useParams();
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    getSingleCandidateInfo(singleCandidateId.id, token)
    .then(info => {
      validate(info, setIsLoggedIn)
      setCandidateInfo(info)
    });
  }, [setIsLoggedIn, validate])

  useEffect(() => {
    getCandidateReportsAPI(token)
      .then(reports => {
        validate(reports, setIsLoggedIn)
        setReports(reports.filter(el => el.candidateId === parseInt(singleCandidateId.id)))
      })
  }, [setIsLoggedIn, validate])

  const modalHandler = (singleReport) => {
    setModalReport(singleReport);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  const cancelHandler = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }

 
  return (
    (reports && candidateInfo) ?
    <div>
    <AboutCandidate candidateData={candidateInfo}/>
    <Reports reports={reports} modalHandler={modalHandler} />
    <Backdrop showModal={showModal} cancelModal={cancelHandler} />
    <Modal showModal={showModal} cancelModal={cancelHandler} modalReport={modalReport} />
    </div>
    :
    <Spinner />
    );
  };
  
  export default ReportsPage;