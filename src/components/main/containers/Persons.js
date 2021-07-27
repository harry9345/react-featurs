import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";

// import React, { Component } from "react";

// import classes from "../style/All.module.css";

// class Persons extends Component {
//   //   handelRemove = () => {
//   //     this.props.removePerson(this.props.id);
//   //   };
//   render() {
//     return (
//       <>
//         <li className={classes.ListStyle}>
//           {this.props.name}
//           <button
//             onClick={() => {
//               this.props.removePerson(this.props.id);
//             }}
//             className={classes.RemoveBtn}
//           >
//             -
//           </button>
//         </li>
//         <hr />
//         <br />
//       </>
//     );
//   }
// }

const Persons = () => {
  const inputEl = useRef("inputEl");
  const handleClick = () => {
    let inputValue = inputEl.current.value;
    inputEl.current.style.backgroundColor = inputValue;
  };
  return (
    <Container>
      <input
        style={{ border: "none", backgroundColor: "red" }}
        type="text"
        id="txt"
        placeholder="your color"
        ref={inputEl}
      />
      <Button variant="outline-secondary" onClick={handleClick}>
        click me
      </Button>
    </Container>
  );
};

export default Persons;
