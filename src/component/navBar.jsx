import { Navbar, Container } from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="primary">
        <Container>
          <Navbar.Brand href="#">FakeShop</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
