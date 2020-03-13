import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import employees from "./employee.json";
import "./App.css";

class App extends Component {
  state = { employees };

  render() {
  return (
    <Wrapper>
      <h1 className="title">Employee Directory</h1>

      {this.state.employees.map(friend => (
        <EmployeeTable
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
        removeFriend={this.removeFriend}
      />
      ))}
    </Wrapper>
  );
  };
};

export default App;
