import React, { useState } from "react";
import "./App.css";

const players = [
  {
    team: "Kansas City Chiefs",
    number: 87,
    position: "Tight End",
    name: "Travis Kelce",
  },
  {
    team: "Kansas City Chiefs",
    number: 10,
    position: "Wide Receiver",
    name: "Tyreek Hill",
  },
  {
    team: "Kansas City Chiefs",
    number: 15,
    position: "QuarterBack",
    name: "Patrick Mahomes",
  },
  {
    team: "Kansas City Chiefs",
    number: 95,
    position: "Defensive Tackle",
    name: "Chris Jones",
  },
];

function App() {
  const [sortedPlayers, setSortedPlayers] = useState(players);

  console.log(sortedPlayers);

  const sortByNumber = () => {
    let sortedNumbers = sortedPlayers.sort((a, b) => a.number - b.number);
    setSortedPlayers();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th onClick={sortByNumber}>Number</th>
          <th>Position</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayers.map((player) => (
          <tr key={`${player.number} ${player.name}`}>
            <td>{player.team}</td>
            <td>{player.number}</td>
            <td>{player.position}</td>
            <td>{player.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
