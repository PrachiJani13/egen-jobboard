import React from "react";
import "./Select.css";

const Select = (props) => {
  const { id, type, width, onSearch, onChange } = props;
  return (
    <div className="select__main" style={{ width: width }}>
      <input type={type} name={id} onChange={onChange} />
      <p>Full Time Only</p>
      <button type="submit" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Select;
