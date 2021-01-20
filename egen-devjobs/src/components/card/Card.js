import React from "react";
import ReactTimeAgo from "react-time-ago";
import { useHistory } from "react-router";
import "./Card.css";
import DefaultLogo from "../../assets/default_logo.png";

const Card = (props) => {
  const { company, lightMode } = props;
  const history = useHistory();
  if (!company) return <div></div>;

  const {
    company: companyName,
    company_logo: companyLogoUrl,
    title,
    location,
    type,
    id,
    created_at: date,
  } = company;

  const handleClick = () => {
    history.push({
      pathname: `/job/${id}`,
      state: { company },
    });
  };
  return (
    <div className="card__wrapper">
      <div className="card__logo">
        <img src={companyLogoUrl || DefaultLogo} alt="Logo" />
      </div>

      <div
        onClick={handleClick}
        className={`card__main ${lightMode ? "" : "card__main__dark"}`}
      >
        <div className="card__job__type card__item">
          <span>
            <ReactTimeAgo date={date} locale="en-US" /> &nbsp; &nbsp; &nbsp;
            &nbsp;
          </span>
          <ul>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card__title card__item">
          {title ? (title.length > 30 ? title.substr(0, 30) : title) : ""}
        </div>
        <div className="card__company card__item">{companyName}</div>
        <div className="card__location card__item">{location}</div>

        <br />
      </div>
    </div>
  );
};

export default Card;
