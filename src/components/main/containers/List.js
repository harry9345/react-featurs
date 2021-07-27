import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Persons from "../../main/containers/Persons";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 0, name: "ali", age: 25 },
        { id: 1, name: "ami", age: 9 },
        { id: 2, name: "hasan", age: 18 },
      ],
      date: { date: new Date() },
      isLogin: true,
    };
  }
  handelType = (e) => {
    if (e.keyCode === 13) {
      let mainValue = e.target.value;
      let newUser = { name: mainValue, age: 10 };
      this.setState({
        users: [...this.state.users, newUser],
      });
      e.target.value = "";
    }
  };

  removePerson = (userId) => {
    let newUser = this.state.users.filter((user) => {
      if (userId !== user.id) {
        return user;
      }
      return null;
    });
    this.setState({
      users: newUser,
    });
  };

  render() {
    return (
      <Container>
        <input type="text" onKeyDown={this.handelType} />
        <Persons />
        {/* <ul>
          {this.state.users.map((user) => (
            <Persons
              key={user.id}
              id={user.id}
              removePerson={this.removePerson}
              name={user.name}
              age={user.age}
            />
          ))}
        </ul> */}
      </Container>
    );
  }
}

export default List;
