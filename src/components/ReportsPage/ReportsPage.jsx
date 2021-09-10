import { Fragment } from "react/cjs/react.production.min";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutCandidate from "./AboutCandidate/AboutCandidate";

const ReportsPage = () => {
  return (
    <Fragment>
      <Header />
      <AboutCandidate/>
      <Footer />
    </Fragment>
  );
};

export default ReportsPage;