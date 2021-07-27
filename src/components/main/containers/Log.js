import { Button, Container } from "react-bootstrap";

export const Log = (props) => {
  const chindel = (v) => {
    console.log("hichi", v);
  };
  return (
    <Container>
      <Button variant="outline-secondary" onClick={chindel}>
        click me only
      </Button>
    </Container>
  );
};
