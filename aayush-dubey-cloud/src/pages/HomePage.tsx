import { Carousel, Container, Col, Row } from "react-bootstrap";
import homeData from "../data/home.json";

function HomePage() {
  return (
    <Container>
      <h1 className="text-6xl max-w-300" style={{ visibility: "hidden"}}>Aayush Dubey</h1>
      <Row>
        <Col sm={8}>
        <h1 className="text-6xl max-w-300">Aayush Dubey</h1>
          <p style={{ textIndent: "2em",  textAlign: "left" }}>I was a backend SWE at VMware assisting in the development of Aria Automation, part of CMBU. I graduated MSCS at Georgia Tech specializing in Robotics, which covered topics like mobile manipulation, computer vision, NLP, human-robot interaction and AI/ML. My academic projects included Gazebo simulations of robots performing and optimizing tasks, a learning agent combining RL and LfD for boosted scores in video games, a small-scale KBAI chatbot, traffic sign recognition, and emoji classification.</p>
          <Col>
            <a href="#" className="socialIcons">
              <i className="bi bi-envelope-fill" style={{ fontSize: "xx-large"}} />
            </a>
            <a href="#" className="socialIcons">
              <i className="bi bi-linkedin" style={{ fontSize: "xx-large"}} />
            </a>
            <a href="#" className="socialIcons">
              <i className="bi bi-github" style={{ fontSize: "xx-large"}} />
            </a>
          </Col>
        </Col>
        <Col sm={4}>
          <Carousel style={{ width: "500px", height: "500px" }}>
            {homeData.carouselDetails.map((item) => (
              <Carousel.Item key={item.imgSrc}>
                <img src={item.imgSrc} className="d-block w-100" alt="..." style={{ width: "500px", height: "500px", objectFit: "cover" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
