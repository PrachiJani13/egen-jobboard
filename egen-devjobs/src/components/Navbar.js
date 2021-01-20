import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";

import Switch from "@material-ui/core/Switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { setMode } from "../store/views/home-page/actions";

const Topbar = (props) => {
  const { lightMode, setMode } = props;
  function handleChange() {
    setMode(!lightMode);
  }
  return (
    <div className="nav__main">
      <div className="nav__content">
        <div className="nav__title">devjobs</div>
        <div className="nav__toggle">
          <WbSunnyIcon style={{ color: "white" }} />
          <Switch
            style={{ color: "silver" }}
            checked={!lightMode}
            onChange={handleChange}
            aria-label="login switch"
          />
          <Brightness3Icon style={{ color: "white" }} />
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

const mapDispatchToProps = { setMode };

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
