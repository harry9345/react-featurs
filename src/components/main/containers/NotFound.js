import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container>
      <h1>Not found</h1>
      <h3>THis is 404 page</h3>
      <Link to="/Main">
        <Button variant="secondary">Back to home page</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
