import "./Reports.css";

const Reports = ({ reports }) => {
  return (
      <table className="table table-striped table-hover my-5">
        <thead className="fs-4">
          <tr>
            <th>
              Company
            </th>
            <th >
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
                <td><span><i className="far fa-eye" /></span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

export default Reports;
