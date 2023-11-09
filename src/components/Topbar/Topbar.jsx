import './Topbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/logo.png';
import { Button } from 'react-bootstrap';

const Topbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-transparent shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{width:"15%", height:"15%", objectFit:'cover'}}/>
            <h2></h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link href="#home" className='text-secondary fw-bold'>Home</Nav.Link>
              <Nav.Link href="#home" className='text-secondary fw-bold'>About Us</Nav.Link>
              <Nav.Link href="#home" className='text-secondary fw-bold'>Contact</Nav.Link>
              <Nav.Link href="#home" className='text-secondary fw-bold'>Reviews</Nav.Link>
              <Nav.Link href="#home" className='text-secondary fw-bold text-decoration-none border-0'>
                <Button  size="sm" className="bg_login fw-bold text-decoration-none border-0">login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar