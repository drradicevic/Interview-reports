import "./Reports.css";

const Reports = ({ reports }) => {
  return (
    <div className="my-5 mx-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" rowSpan="2">
              Company
            </th>
            <th scope="col" rowSpan="2">
              Interview Date
            </th>
            <th scope="col" rowSpan="2">
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
