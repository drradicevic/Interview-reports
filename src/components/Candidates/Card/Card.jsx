import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ candidateInfo, avatar }) => {
  return (
    <Link
      to={`/reports/${candidateInfo.id}`}
      className="card-candidate col-8 col-sm-7 col-md-5 col-lg-4"
    >
      <img className="card-img" src={avatar} alt="" />
      <h4 className="card-username">{candidateInfo.name}</h4>
      <p className="card-email">{candidateInfo.email}</p>
    </Link>
  );
};

export default Card;
