import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import employees from "./employee.json";
import "./App.css";

class App extends Component {
  state = { employees };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  };

  render() {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>

      {this.state.friends.map(friend => (
        <FriendCard
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
