import { Container, Row, Col } from "react-bootstrap";
import UserName from "./containers/Student";
import Bot from "./containers/Box";
import List from "./containers/List";
import People from "./containers/People";
import NewCom from "./containers/NewCom";

const Main = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <UserName age={25} esmesh="ali" id="1" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Bot title="click me" id="1" />
          <List />
        </Col>
        <Col>
          <People />
          <NewCom />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
