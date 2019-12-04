import React, { Component } from "react";
import { CardList } from "./Components/list-card/card-list.component";
import { SearchBox } from "./Components/search-box/search.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search for user"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
