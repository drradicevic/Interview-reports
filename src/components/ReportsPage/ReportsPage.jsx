import { Fragment } from "react/cjs/react.production.min";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutCandidate from "./AboutCandidate/AboutCandidate";
import Reports from "./ReportsPage/ReportsPage";

const ReportsPage = () => {
  return (
    <Fragment>
      <Header />
      <AboutCandidate/>
      <Reports />
      <Footer />
    </Fragment>
  );
};

export default ReportsPage;