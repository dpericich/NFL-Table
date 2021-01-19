import React from "react";

// Table headers will set themselves, but to set the table rows, you will need to fill in the
// table data elements with each of your object's keys

const Table = ({ items, sortColumn }) => {
  // Extract keys from items object to create table headers
  const tableHeaders = [];
  for (let key in items[0]) {
    tableHeaders.push(
      <th value={key} onClick={() => sortColumn(key)}>
        {key}
      </th>
    );
  }

  return (
    <table>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.team}</td>
            <td>{item.number}</td>
            <td>{item.position}</td>
            <td>{item.name}</td>
            <td>{item.years}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
