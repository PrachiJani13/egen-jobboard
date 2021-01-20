import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Filters from "../components/filters/Filters";
import Card from "../components/card/Card";
// import FilterBar from "../components/FilterBar";
import { loadJobs } from "../store/views/home-page/actions";
import "./HomePage.css";

const initialInputElements = {
  company: {
    order: 1,
    type: "text",
    value: "",
    placeHolder: "Filter by title, companies, expertise..",
    width: "20rem",
    iconType: "Search",
  },
  location: {
    order: 2,
    type: "text",
    value: "",
    placeHolder: "Filter by location..",
    width: "14rem",
    iconType: "Location",
  },
  jobType: {
    order: 3,
    type: "checkbox",
    value: false,
  },
};
const initialJobCount = 8;
const jobCountIncrement = 8;

const HomeContainer = (props) => {
  const { jobs, loadJobs, lightMode } = props;

  const [inputElements, setInputElements] = useState(initialInputElements);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobCount, setJobCount] = useState(initialJobCount);

  const handleChange = (e) => {
    const tempInputElements = { ...inputElements };
    if (e.target.name === "jobType")
      tempInputElements.jobType.value = !tempInputElements.jobType.value;
    else tempInputElements[e.target.name].value = e.target.value;

    setInputElements(tempInputElements);
  };
  const handleSearch = () => {
    let filteredJobs = [...jobs];
    if (inputElements.company.value.length > 0) {
      const value = inputElements.company.value.toLowerCase();
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(value) ||
          job.company.toLowerCase().includes(value)
      );
    }
    if (inputElements.location.value.length > 0) {
      const value = inputElements.location.value.toLowerCase();
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(value)
      );
    }
    if (inputElements.jobType.value) {
      filteredJobs = filteredJobs.filter((job) => job.type === "Full Time");
    }
    setFilteredJobs(filteredJobs);
    setJobCount(initialJobCount);
  };
  const handleLoadMore = () => {
    setJobCount(Math.min(jobCount + jobCountIncrement, filteredJobs.length));
  };
  useEffect(() => {
    loadJobs();
  }, [loadJobs]);
  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <div className={`home__main ${lightMode ? "" : "home__main__dark"}`}>
      <Navbar />
      <div className="home__filters__wrapper">
        <Filters
          inputElements={inputElements}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      </div>
      <div className="home__cards__wrapper">
        {filteredJobs.slice(0, jobCount).map((job) => (
          <Card company={job} lightMode={lightMode} />
        ))}
      </div>
      {filteredJobs && filteredJobs.length > jobCount && (
        <button onClick={handleLoadMore} className="home__button">
          Load More
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobReducer.jobs,
    lightMode: state.jobReducer.lightMode,
  };
};

const mapDispatchToProps = { loadJobs };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
