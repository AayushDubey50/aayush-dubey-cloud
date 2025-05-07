import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="fixed-bottom"
      style={{
        minHeight: "50px",
        padding: "20px",
        width: "100%",
        // marginTop: "50px",
      }}
    >
      <Container fluid>
        <Row>
          <Col className="col-md-6">Copyright</Col>
          <Col className="col-md-6">
            <a href="#" className="socialIcons">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="#" className="socialIcons">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="socialIcons">
              <i className="bi bi-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
