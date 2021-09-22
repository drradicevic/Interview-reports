import { Fragment } from "react";
import "./SingleReport.css";

const SingleReport = ({ report}) => {
  return (
    <Fragment>
      <div className="report-item col-3 ps-3 border-end border-dark">
        <p className="fs-4 mb-1">{report.companyName}</p>
        <h6 className="list-title fw-normal text-black-50">Company</h6>
      </div>

      <div className="report-item col-3 ps-3 border-end border-dark">
        <p className="fs-4 mb-1">{report.candidateName}</p>
        <h6 className="list-title fw-normal text-black-50">Candidate</h6>
      </div>
      <div className="report-item col-3 ps-3 border-end border-dark">
        <p className="fs-4 mb-1">
          {new Date(report.interviewDate).toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
        <h6 className="list-title fw-normal text-black-50">Interview Date</h6>
      </div>
      <div className="report-item col-2 ps-3 border-end border-dark">
        <p className="fs-4 mb-1">{report.status}</p>
        <h6 className="list-title fw-normal text-black-50">Status</h6>
      </div>
      <div className="report-item col-1 text-center">
        <i className="far fa-eye py-4 pe-4 fs-3 click-icon"></i>
        <i className="fas fa-times fs-3 click-icon"></i>
      </div>
      </Fragment>
  );
};

export default SingleReport;
