import "./Reports.css";

const Reports = () => {
  return (
    <div className="my-5 mx-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" rowSpan="2">
              First
            </th>
            <th scope="col" rowSpan="2">
              Last
            </th>
            <th scope="col" colSpan="3">
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className="fab fa-google"> Google</i>
            </td>
            <td>Otto</td>
            <td>@medo</td>
          </tr>
          <tr>
            <td> <i className="fab fa-facebook-f"> Facebook</i>
            </td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td><i className="fab fa-instagram"> Instagram</i>
            </td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>
              <i className="fab fa-linkedin-in"> Linkedin</i>
            </td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reports;