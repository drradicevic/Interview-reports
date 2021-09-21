import { useState, useEffect } from "react";
import { getCandidateReportsAPI } from "../../services/services";

import "./ReportsAdministration.css";

const ReportsAdministration = () => {
  const [reports, setReports] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getCandidateReportsAPI(token).then((reports) => setReports(reports));
  }, []);
  console.log(reports);
  return (
    reports && (
        <div className="reports-list-wrapper">
      <table className="table table-striped reports-list-table">
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="reports-row">
              <td>{report.companyName}
              <span className="list-title">Company</span></td>
              <td>{report.candidateName}
              <span className="list-title">Candidate</span></td>
              <td>
                {new Date(report.interviewDate).toLocaleString("en-GB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
                <span className="list-title">Interview Date</span>
              </td>
              <td>{report.status}
              <span className="list-title">Status</span></td>
              <td>
                <span>
                  <i className="far fa-eye"></i>
                </span>
                <span>
                <i className="fas fa-times"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
  );
};

export default ReportsAdministration;
