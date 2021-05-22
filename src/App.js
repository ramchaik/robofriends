import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
