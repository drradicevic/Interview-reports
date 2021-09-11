import "./Candidate.css";

const Candidate = ({candidateInfo, avatar}) => {

    return (
            <div className="candidate border me-2 col-3">
                <img className="candidateImg" src={avatar} alt="" />
                <h4 className="card-username">{candidateInfo.name}</h4>
                <p className="card-email">{candidateInfo.email}</p>
            </div>
    )
}

export default Candidate;