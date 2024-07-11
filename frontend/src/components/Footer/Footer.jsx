import React from 'react'
import "./footer.css"
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';

const quick__links1 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
  },
  {
    path: "/tours",
    display: "Tours"
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery"
  },
  {
    path: "/login",
    display: "Login"
  },
  {
    path: "/register",
    display: "Register "
  },
];





const Footer = () => {
  const year = new Date().getFullYear(); 
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3"   >
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#"><i className='ri-youtube-line' />
                  </Link>
                </span>
                <span>
                  <Link to="#"><i className='ri-github-fill' />
                  </Link>
                </span>
                <span>
                  <Link to="#"><i className='ri-facebook-circle-line' />
                  </Link>
                </span>
                <span>
                  <Link to="#"><i className='ri-instagram-line' />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className='footer__link-title'>Discovery</h5>
              <ListGroup className='footer__quick-links'>
              {quick__links1.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{ item.display}</Link>
                </ListGroupItem>
              ))}
             </ListGroup>         
          </Col>
          <Col lg="3">
          <h5 className='footer__link-title'>Quick Links</h5>
              <ListGroup className='footer__quick-links'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{ item.display}</Link>
                </ListGroupItem>
              ))}
              </ListGroup>
</Col>
          <Col lg="3">
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
          <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
            <h6 className='mb-0 d-flex align-items-center gap-2'>
              <span><i className='ri-map-pin-line' /></span>
              Address:
            </h6>
            <p className="mb-0">Chennai,India</p>
          </ListGroupItem>

          <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
            <h6 className='mb-0 d-flex align-items-center gap-2'>
              <span><i className='ri-mail-line' /></span>
              Email:
            </h6>
            <p className="mb-0">Dev.nytechno@gmail.com</p>
          </ListGroupItem>
           
          <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
            <h6 className='mb-0 d-flex align-items-center gap-2'>
              <span><i className='ri-phone-line' /></span>
              Phone:
            </h6>
            <p className="mb-0">+91 95763218</p>
              </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg="12" className='text-center pt-5'>
            <p className="copyright">Copyright { year},Design and Develop By Nytechno .All Rights Reserved</p>
                </Col>
          </Row>
      </Container>
    </footer>
  )
}

export default Footer