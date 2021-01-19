import React from "react";
import FilterDropDown from "./FilterDropDown";
import Table from "./Table";

class TeamDataTable extends React.Component {
  state = {
    players: this.props.players,
    sort: {
      team: { isDescending: false },
      number: { isDescending: false },
      position: { isDescending: false },
      name: { isDescending: false },
      years: { isDescending: false },
    },
  };
  /**
   * @function updatePosition - callback passed to filter to return selection
   * @param {string} value
   * @return {} - updates table state object
   */

  updatePosition = (value) => {
    if (value !== "No / Clear Filter") {
      let newPlayers = this.state.players.filter(
        (player) => player.position === value
      );
      this.setState({ players: newPlayers });
    } else if (value === "No / Clear Filter") {
      this.setState({ players: this.props.players });
    }
  };

  updateTeam = (value) => {
    if (value !== "No / Clear Filter") {
      let newPlayers = this.state.players.filter(
        (player) => player.team === value
      );
      this.setState({ players: newPlayers });
    } else if (value === "No / Clear Filter") {
      this.setState({ players: this.props.players });
    }
  };

  /**
   * @function sortColumn - onclick, update table state to toggle the boolean for the value and the
   * order of the table values fed to the table component
   * @param {string} key - the column name that we want to toggle
   * @return - updates the state of each individual column, as well as the players array sorted in
   * ASC or DESC order
   */

  sortColumn = (key) => {
    let currentColumn = this.state.sort[key];
    if (currentColumn.isDescending) {
      let ascendingPlayers = this.state.players.sort((a, b) => a[key] - b[key]);
      this.setState({ players: ascendingPlayers }, console.log("I was sorted"));
    } else {
      let descendingPlayers = this.state.players.sort(
        (a, b) => b[key] - a[key]
      );
      this.setState({ players: descendingPlayers });
    }
    let sort = { ...this.state.sort };
    sort[key].isDescending = !sort[key].isDescending;
  };

  render() {
    return (
      <div className="player-table">
        <h2 className="player-table__title">Bills and Chiefs Players</h2>
        <div className="player-table__filters">
          <FilterDropDown
            items={this.props.players}
            value="position"
            getValue={this.updatePosition}
          />
          <FilterDropDown
            items={this.props.players}
            value="team"
            getValue={this.updateTeam}
          />
        </div>
        <div className="player-table__table">
          <Table items={this.state.players} sortColumn={this.sortColumn} />
        </div>
      </div>
    );
  }
}

export default TeamDataTable;
