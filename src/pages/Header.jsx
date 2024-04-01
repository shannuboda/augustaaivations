import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import logo from './assets/logo.png'

function Header() {
  let navigate = useNavigate()
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><h3 style={{marginLeft:'.6rem'}}> Augusta Aviation</h3></Navbar.Brand>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            <NavDropdown title="About Us" id="navbarScrollingDropdown" >
              <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/whyaugusta">
                Why Augusta ??
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item as = {Link} to="/airportmanagement">Airport Management</NavDropdown.Item>

              <NavDropdown.Item as = {Link} to="/groundstaff">
                Ground Staffing Training
              </NavDropdown.Item>

              <NavDropdown.Item as = {Link} to="/ticketing">
                Ticketing
              </NavDropdown.Item>
              
              <NavDropdown.Item as = {Link} to="/cabincrew">
                Cabin Crew Course
              </NavDropdown.Item>

              <NavDropdown.Item as = {Link} to="/cargo">
                Air Cargo Course
              </NavDropdown.Item>

              <NavDropdown.Item as = {Link} to="/pilot">
                Pilot Course
              </NavDropdown.Item>         
            
            </NavDropdown>
           
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contactForm">Contact Us</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header