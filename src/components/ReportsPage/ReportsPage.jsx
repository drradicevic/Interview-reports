import { Fragment, useState, useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutCandidate from "./AboutCandidate/AboutCandidate";
import Reports from "./Reports/Reports"
import { getSingleCandidateInfo } from "../../services/getSingleCandidateInfo"; 

const ReportsPage = (props) => {
  
  const [candidateInfo, setCandidateInfo] = useState(null);
  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    getSingleCandidateInfo(`http://localhost:3333/api/candidates/${props.match.params.id}`, token)
    .then(info => setCandidateInfo(info));
  }, [])
  
  
  return (
    <Fragment>
    <Header />
    {candidateInfo && <AboutCandidate candidateData={candidateInfo}/>}
    
    <Reports />
    <Footer />
    </Fragment>
    );
  };
  
  export default ReportsPage;