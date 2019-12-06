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

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Lego Stars</h1>
        <SearchBox
          placeholder="Search for user"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
        <p>
          Made with love By <a href="https://github.com/AWIXOR">@Awixor</a>
        </p>
      </div>
    );
  }
}

export default App;
