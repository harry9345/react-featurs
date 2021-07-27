// import { Component } from "react";
import { Container } from "react-bootstrap";
import propTypes from "prop-types";

const About = (props) => {
  return (
    <>
      <Container>
        <h1> Who we are</h1>
        <br />
        <hr />
        <p>{props.temp}</p>
      </Container>
    </>
  );
};
About.defaultProps = {
  temp: null,
};
About.propTypes = {
  temp: propTypes.string.isRequired,
};

// class About extends Component {
//   static defaultProps = {
//     temp: 20,
//   };
//   render() {
//     return (
//       <>
//         <Container>
//           <h1> Who we are</h1>
//           <br />
//           <hr />
//           <p>{this.props.temp}</p>
//         </Container>
//       </>
//     );
//   }
// }
// About.propTypes = {
//   temp: propTypes.string,
// };

export default About;
