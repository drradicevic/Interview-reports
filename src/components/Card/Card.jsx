import "./Card.css";

const Card = () => {
    return (
        <div className="w-75 mx-auto mt-5 mb-5">
            <div className="d-flex justify-content-between">
              <h1>Candidates</h1>
              <input type="search" />
            </div>
            <div className="d-flex flex-wrap text-center">
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
                <div className="candidate border me-2 flex-fill">
                    <img className="candidateImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                    <h2>Pera Peric</h2>
                    <h4>peraperic@gmail.com</h4>
                </div>
            </div>
        </div>
    )
};

export default Card;