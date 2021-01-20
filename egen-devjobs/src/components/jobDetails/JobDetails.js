import React from "react";
import Navbar from "../Navbar";
import ReactTimeAgo from "react-time-ago";
import "./JobDetails.css";
import DefaultLogo from "../../assets/default_logo.png";
import { connect } from "react-redux";

const JobDetails = (props) => {
  const { lightMode } = props;
  const { company } = props.location.state;
  if (!company) return <div>null</div>;

  const {
    company: companyName,
    company_logo: companyLogoUrl,
    company_url: companyUrl,
    description,
    how_to_apply: howToApply,
    title,
    location,
    type,
    created_at: date,
  } = company;

  return (
    <div>
      <Navbar />
      <div
        className={`job__details__main ${
          lightMode ? "" : "job__details__main__dark"
        }`}
      >
        <div
          className={`job__details__header ${
            lightMode ? "" : "job__details__header__dark"
          }`}
        >
          <div className="job__details__logo">
            <img src={companyLogoUrl || DefaultLogo} alt={companyName} />
            <div className="job__details__company">
              <p className="job__details__companyname">{companyName}</p>
              <p className="job__details__companyurl"> {companyUrl}</p>
            </div>
          </div>

          <a className="job__details__companysite" href={companyUrl}>
            Company Site
          </a>
        </div>
        <div
          className={`job__details__body ${
            lightMode ? "" : "job__details__body__dark"
          }`}
        >
          <div className="job__details__body__heading">
            <div>
              <div className="job__details__body__time">
                <span>
                  <ReactTimeAgo date={date} locale="en-US" /> &nbsp; &nbsp;
                  &nbsp; &nbsp;
                </span>
                <ul>
                  <li>{type}</li>
                </ul>
              </div>

              <div className="job__details__body__location">
                <p className="job__details__body__location__title">{title}</p>
                <p className="job__details__body__location__city">
                  {" "}
                  {location}
                </p>
              </div>
            </div>
            <button className="job__details__apply__now">Apply Now</button>
          </div>
          <div className="job__details__body__description">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div>
            <h1> How To Apply </h1>
            <span dangerouslySetInnerHTML={{ __html: howToApply }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lightMode: state.jobReducer.lightMode,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
