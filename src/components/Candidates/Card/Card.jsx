import { useHistory } from "react-router";

import "./Card.css";

const Card = ({candidateInfo, avatar}) => {

    const history = useHistory();
    const clickHandler = () => {
        let path = `/reports/${candidateInfo.id}`
        history.push(path);
    }

    return (
            <div className="candidate border me-2 col-3" onClick={clickHandler}>
                <img className="candidateImg" src={avatar} alt="" />
                <h4 className="card-username">{candidateInfo.name}</h4>
                <p className="card-email">{candidateInfo.email}</p>
            </div>
    )
}

export default Card;