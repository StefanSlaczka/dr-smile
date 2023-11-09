import { Button, Col, Row } from 'react-bootstrap';
import './HeaderFoot.css';
import food from '../../assets/food.png';

const HeaderFoot = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={food} alt="header-footer" className='img-fluid' />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>Uncover the game-changing tool that will redefine how you experience dental care.</h1>
              <p className='text-secondary my-4'>Revolutionize your dental care routine with our latest innovation, setting a new standard in oral health. We've developed a solution that makes dental care more accessible, efficient, and effective.</p>
              <p className='text-secondary'>Say farewell to the traditional hassles of maintaining oral hygiene and embrace a new era of simplicity. Our cutting-edge technology is meticulously crafted to streamline your oral care regimen, providing you with a brighter, healthier smile and saving you valuable time. Join us on this transformative journey toward superior oral health, where convenience meets exceptional dental care.</p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0'>Nake An Appointment</Button>
                <Button className='contact_btn'>contact us</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HeaderFoot