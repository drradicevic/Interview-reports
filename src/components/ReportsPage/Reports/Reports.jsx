import "./Reports.css";

const Reports = ({ reports, modalHandler}) => {

  return (
      <table className="table table-striped table-hover my-5">
        <thead className="fs-4">
          <tr>
            <th>
              Company
            </th>
            <th>
              Interview Date
            </th>
            <th colSpan="2">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => {
            return (
              <tr key={index}>
              <td>{report.companyName}</td>
              <td>{report.interviewDate}</td>
              <td>{report.status}</td>
              <td><span onClick={() => {modalHandler(report.id)}}><i className="far fa-eye"></i></span></td>
            </tr>
            )
          })}
        </tbody>
      </table>
  );
};

export default Reports;