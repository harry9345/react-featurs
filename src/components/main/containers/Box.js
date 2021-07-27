// import React, { Component } from "react";

// class Button extends Component {
//   showDate() {
//     document.getElementById(this.props.id).innerHTML =
//       new Date().toDateString();
//     console.log(this.props.id);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.showDate()}>
//           {this.props.id + "-" + this.props.title}
//         </button>
//       </div>
//     );
//   }
// }
// export default Button;

import { Button } from "react-bootstrap";

const Btn = (props) => {
  const showDate = (s) => {
    document.getElementById(props.id).innerHTML = new Date().toDateString();
    console.log(props.id, s);
  };
  return (
    <div>
      <Button variant="outline-secondary" onClick={() => showDate(25)}>
        {props.title}
      </Button>
    </div>
  );
};

export default Btn;
