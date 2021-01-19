import React from "react";
import "./App.css";
import TeamDataTable from "./components/TeamDataTable";

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
    position: "Quarterback",
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
  {
    team: "Buffalo Bills",
    number: 17,
    position: "Quarterback",
    name: "Josh Allen",
    years: 3,
  },
  {
    team: "Buffalo Bills",
    number: 11,
    position: "Wide Receiver",
    name: "Cole Beasley",
    years: 9,
  },
  {
    team: "Buffalo Bills",
    number: 14,
    position: "Wide Receiver",
    name: "Stefon Diggs",
    years: 6,
  },
  {
    team: "Buffalo Bills",
    number: 25,
    position: "Running Back",
    name: "Taiwan Jones",
    years: 10,
  },
  {
    team: "Buffalo Bills",
    number: 88,
    position: "Tight End",
    name: "Dawson Know",
    years: 2,
  },
  {
    team: "Kansas City Chiefs",
    number: 25,
    position: "Running Back",
    name: "Clyde Edwards-Helaire",
    years: 1,
  },
  {
    team: "Kansas City Chiefs",
    number: 38,
    position: "Cornerback",
    name: "L'Jarius Sneed",
    years: 1,
  },
  {
    team: "Kansas City Chiefs",
    number: 50,
    position: "Linebacker",
    name: "Willie Gay",
    years: 1,
  },
];

class App extends React.Component {
  render() {
    return <TeamDataTable players={players} />;
  }
}

export default App;
