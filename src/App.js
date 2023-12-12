import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function App() {
  return (
    <div >
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/520e0d72e4b03c465ef78310/1649167671731-78EVRTN353F3U1E6PCSW/BLDesign_034_IMG_0583H.jpg?format=1000w" />
        <Card.Body>
          <Card.Title> Ibanez Bass Guitar </Card.Title>{" "}
          <Card.Text>
            Ibanez electric Bass guitar.{" "}
          </Card.Text>{" "}
          <Button variant="primary"> BUY </Button>{" "}
        </Card.Body>{" "}
      </Card>{" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0256/1900/5522/files/1_319e9b0f-243a-444e-92f3-ac957df3a57b_600x600.jpg?v=1631592003" />
        <Card.Body>
          <Card.Title> LesPaul electric guita </Card.Title>{" "}
          <Card.Text>
            r.{" "}
          </Card.Text>{" "}
          <Button variant="primary"> BUY </Button>{" "}
        </Card.Body>{" "}
      </Card>{" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ae01.alicdn.com/kf/H39822ca07b634411a1c7ac9308e890f3L/Classic-transparent-acrylic-electric-guitar-dream-Blu-ray-high-end-Maple-neck-beautiful-timbre-free-delivery.jpg" />
        <Card.Body>
          <Card.Title> Telecast Electric Guitar </Card.Title>{" "}
          <Card.Text>
          Transparent Telecast Electric Guitar.{" "}
          </Card.Text>{" "}
          <Button variant="primary"> BUY </Button>{" "}
        </Card.Body>{" "}
      </Card>{" "}
    </div>
    </div>
    
  );
}

export default App;
