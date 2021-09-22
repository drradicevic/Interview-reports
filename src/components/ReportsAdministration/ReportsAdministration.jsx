import { useState, useEffect } from "react";
import { getCandidateReportsAPI } from "../../services/services";

import SingleReport from "./SingleReport/SingleReport";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

import "./ReportsAdministration.css";

const ReportsAdministration = () => {
  const [reports, setReports] = useState([]);

 
  const token = localStorage.getItem("token");


  useEffect(() => {
    getCandidateReportsAPI(token)
    .then((reports) => setReports(reports));
  }, []);
  return (
    reports && (
      <div className="reports-list-wrapper mx-auto">
        {reports.map((report, index) => (
          <div key={index} className="reports-wrapper d-flex flex-wrap mb-4 py-2 ">
          <SingleReport report={report}/>
          </div>
        ))}
      </div>
    )
  );
};

export default ReportsAdministration;
