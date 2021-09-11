

import "./AboutCandidate.css"

const AboutCandidate = () => {
  const candidate = {
    id: 54493806,
    name: "Tiffany Lynch",
    birthday:
      "Fri Mar 19 2021 23:14:47 GMT+0100 (Central European Standard Time)",
    email: "Rosalyn.Marquardt98@hotmail.com",
    education: "Director",
    avatar:
      "https://lh3.googleusercontent.com/proxy/1ceQ89PyMcejt45ISaI-KltBq4kOILWrP_7he8u3yzARgnmbcX_XTOkgJrt1X9jRvN_Zhfdp_yUluIqo21VNs1ZqUV3YS7fwDwC58Fpf3bv6eOOSPnMO5hriUL2Nn7T5pqeX",
  };

  return (
    <div className="d-flex mt-5 mx-5">
      <div className="col-4">
        <img src={candidate.avatar} alt="avatar img" />
      </div>

      <div className="col-8 d-flex flex-wrap align-items-start border border-dark">
        <div className="col-6 about-container">
            <h6>Name:</h6>
            <p className="p-about">{candidate.name}</p>

            <h6>Email:</h6>
            <p>{candidate.email}</p>
        </div>

        <div className="col-6 about-container">
            <h6>Date of birth:</h6>
            <p className="p-about">{candidate.birthday.slice(0, 15)}</p>

            <h6>Education:</h6>
            <p>{candidate.education}</p>
        </div>

       
      </div>
    </div>
  );
};

export default AboutCandidate;
