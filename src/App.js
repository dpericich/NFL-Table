import React, { useState } from "react";
import "./App.css";

const players = [
  {
    team: "Kansas City Chiefs",
    number: 87,
    position: "Tight End",
    name: "Travis Kelce",
    years: 9,
  },
  {
    team: "Kansas City Chiefs",
    number: 10,
    position: "Wide Receiver",
    name: "Tyreek Hill",
    years: 5,
  },
  {
    team: "Kansas City Chiefs",
    number: 15,
    position: "QuarterBack",
    name: "Patrick Mahomes",
    years: 4,
  },
  {
    team: "Kansas City Chiefs",
    number: 95,
    position: "Defensive Tackle",
    name: "Chris Jones",
    years: 5,
  },
  {
    team: "Kansas City Chiefs",
    number: 14,
    position: "Wide Receiver",
    name: "Sammy Watkins",
    years: 8,
  },
];

function App() {
  // Create instances of useState array for each key in the first array object to allow
  // us to sort in ASC & DESC order
  const [sortedPlayers, setSortedPlayers] = useState(players);

  const sortByNumber = () => {
    let sortedNumbers = sortedPlayers.sort((a, b) => a.number - b.number);
    setSortedPlayers((sortedPlayers) => [...sortedNumbers]);
  };

  // Create array of tableHeaders JSX elements based off of the keys for the first object
  // in our players array
  const tableHeaders = [];
  for (let key in players[0]) {
    tableHeaders.push(<th>{key}</th>);
  }

  return (
    <table>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>
        {sortedPlayers.map((player) => (
          <tr key={`${player.number} ${player.name}`}>
            <td>{player.team}</td>
            <td>{player.number}</td>
            <td>{player.position}</td>
            <td>{player.name}</td>
            <td>{player.years}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
