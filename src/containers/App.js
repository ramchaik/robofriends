import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField } from "../actions";

const mapStateToProps = (state) => ({
  searchField: state.searchField,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});


function App(props) {
  const [robots, setRobots] = useState([]);
  const { searchField, onSearchChange } = props;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((robots) => setRobots(robots));
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robots.length ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
