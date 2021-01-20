import React from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import "./Filter.css";

const Filters = (props) => {
  const { inputElements, handleChange, handleSearch } = props;
  const inputElementsArray = [];
  Object.keys(inputElements).forEach((element) => {
    inputElementsArray.push({
      id: element,
      config: inputElements[element],
    });
  });

  return (
    <div className="filters__main">
      {inputElementsArray.map((element) => {
        if (element.id === "jobType")
          return (
            <Select
              key={element.id}
              id={element.id}
              {...element.config}
              onChange={handleChange}
              onSearch={handleSearch}
            />
          );
        return (
          <Input
            key={element.id}
            id={element.id}
            {...element.config}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default Filters;
