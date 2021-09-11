import Header from "../Header/Header";
import Footer from "../Footer/Footer"


import "./Main.css";
import Candidates from "../Candidates/Candidates";

const Main = () => {


    return (
        <div className="main">
            <Header />
            <Candidates />
            <Footer />
        </div>
    )
};

export default Main;