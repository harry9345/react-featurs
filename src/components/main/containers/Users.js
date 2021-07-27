import { useState } from "react";
import { Container } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState(["ali", "amir", "salman"]);

  return (
    <>
      <Container>
        {users.map((user, index) => (
          <div key={index}>{user}</div>
        ))}
      </Container>
    </>
  );
};

export default Users;
