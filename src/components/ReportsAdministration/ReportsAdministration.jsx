import { useState, useEffect } from "react";
import { getCandidateReportsAPI } from "../../services/services";
import useTokenValidator from "../../hooks/useTokenValidator";
import { Link } from "react-router-dom";

import SingleReport from "./SingleReport/SingleReport";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

import "./ReportsAdministration.css";

const ReportsAdministration = ({setIsLoggedIn}) => {
  const [reports, setReports] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalReport, setModalReport] = useState(null);
  const [deleteReport, setDeleteReport] = useState(null);

  const validate = useTokenValidator();
 
  const token = localStorage.getItem("token");

  useEffect(() => {
    getCandidateReportsAPI(token, validate, setIsLoggedIn)
    .then((reports) => setReports(reports));
  }, [deleteReport, setIsLoggedIn]);

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
    reports && (
      <div className="reports-list-wrapper mx-auto">
        {reports.map((report, index) => (
          <div key={index} className="reports-wrapper d-flex flex-wrap mb-4 py-2 ">
          <SingleReport report={report} modalHandler={modalHandler} setDeleteReport={setDeleteReport}/>
          </div>
        ))}
        <Backdrop showModal={showModal} cancelModal={cancelHandler} />
        <Modal showModal={showModal} cancelModal={cancelHandler} modalReport={modalReport} />
        {/*<Link to="/wizard">
          <button className="wizard-button"><i className="fas fa-folder-plus fs-2"></i></button>
        </Link>*/}
      </div>
    )
  );
};

export default ReportsAdministration;
