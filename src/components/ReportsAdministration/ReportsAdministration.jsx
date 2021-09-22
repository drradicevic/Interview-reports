import { useState, useEffect } from "react";
import { getCandidateReportsAPI } from "../../services/services";

import SingleReport from "./SingleReport/SingleReport";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

import "./ReportsAdministration.css";

const ReportsAdministration = () => {
  const [reports, setReports] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalReport, setModalReport] = useState(null);
 
  const token = localStorage.getItem("token");

  const modalHandler = (singleReport) => {
    setModalReport(singleReport);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  const cancelHandler = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }


  useEffect(() => {
    getCandidateReportsAPI(token)
    .then((reports) => setReports(reports));
  }, []);
  return (
    reports && (
      <div className="reports-list-wrapper mx-auto">
        {reports.map((report, index) => (
          <div key={index} className="reports-wrapper d-flex flex-wrap mb-4 py-2 ">
          <SingleReport report={report} modalHandler={modalHandler} />
          </div>
        ))}
        <Backdrop showModal={showModal} cancelModal={cancelHandler} />
        <Modal showModal={showModal} cancelModal={cancelHandler} modalReport={modalReport} />
      </div>
    )
  );
};

export default ReportsAdministration;
