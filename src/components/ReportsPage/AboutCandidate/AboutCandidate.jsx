

import "./AboutCandidate.css"

const AboutCandidate = (props) => {
  
  return (
    <div className="d-flex mt-5 mx-5">
    <div className="col-4">
    <img src="https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg"
    alt="avatar img" />
    </div>
    
    <div className="col-8 d-flex flex-wrap align-items-start border border-dark">
    <div className="col-6 about-container">
    <h6>Name:</h6>
    <p className="p-about">{props.candidateData.name}</p>
    
    <h6>Email:</h6>
    <p>{props.candidateData.email}</p>
    </div>
    
    <div className="col-6 about-container">
    <h6>Date of birth:</h6>
    <p className="p-about">{props.candidateData.birthday.slice(0, 15)}</p>
    
    <h6>Education:</h6>
    <p>{props.candidateData.education}</p>
    </div>
    
    
    </div>
    </div>
    );
  };
  
  export default AboutCandidate;
  