import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./Input.css";

const Input = (props) => {
  const { width, placeHolder, iconType, onChange, id } = props;
  return (
    <div className="input__main" style={{ width: width }}>
      {iconType === "Search" ? (
        <SearchIcon style={{ color: "#5865E0", fontSize: "30px" }} />
      ) : (
        <LocationOnIcon style={{ color: "#5865E0", fontSize: "25px" }} />
      )}
      <input
        type="text"
        name={id}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
