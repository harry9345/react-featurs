import React, { Component } from "react";
import { Container } from "react-bootstrap";

class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  id = this.props.id;
  esmesh = this.props.esmesh;

  render() {
    return (
      <Container>
        {this.props.age > 18 ? (
          <div>
            {" "}
            <h1 id={this.id}>
              {this.id + "-" + this.esmesh} shoma be panel dastresi darid
            </h1>
            <hr />
          </div>
        ) : (
          <div>
            <h1 id={this.id}>
              {this.id + "-" + this.esmesh} shoma be panel dastresi nadarid
            </h1>
            <hr />
          </div>
        )}
      </Container>
    );
  }
}
export default UserName;

// const UserName = () => {
//   return (
//     <div>
//       <h1>salam</h1>
//     </div>
//   );
// };
