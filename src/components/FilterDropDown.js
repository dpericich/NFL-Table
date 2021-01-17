import React from "react";

const FilterDropDown = ({ items, value }) => {
  // Create an empty array to store our unique items when iterate through our input
  let uniqueItems = [];

  console.log(value);

  // Loop over all items and if the value does not exist in the uniqueItems array, add it
  // to the array. Otherwise continue
  let selectOptions = items.map((item) => {
    if (!uniqueItems.includes(item[value])) {
      uniqueItems.push(item[value]);
    }
  });
  return (
    <div className="drop-down">
      <h2 className="drop-down__title">{value}</h2>
      <select
        className="drop-down__select"
        onChange={() =>
          console.log(
            "I will hold the callback function to update the wrapper state"
          )
        }
      >
        {uniqueItems.map((item) => (
          <option className="drop-down__option">{item}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropDown;
