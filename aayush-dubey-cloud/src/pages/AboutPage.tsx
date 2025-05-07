import {
  Container,
  Tab,
  Tabs,
  Card,
  Col,
  // Dropdown,
  // DropdownButton,
  // ButtonGroup,
  Button,
  Figure,
  Row,
  Placeholder,
  Stack,
} from "react-bootstrap";

import skillsData from "../data/skills.json";

function Education() {
  return (
    <Stack gap={5}>
      <Row>
        <Col
          sm={12}
          style={{
            textAlign: "left",
            display: "flex",
          }}
        >
          {/* <Card> */}
          <Card.Header>
            <img
              src="https://brand.gatech.edu/sites/default/files/inline-images/gt-seal_0.png"
              style={{
                width: "100px",
                background: "wheat",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title
              as="h3"
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Georgia Institute of Technology
              <span>May 2021</span>
            </Card.Title>
            <Card.Subtitle
              as="h5"
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Master of Science, Computer Science
              {/* <span>GPA: 3.80 / 4.00</span> */}
            </Card.Subtitle>
            {/* <Card.Text> */}
            <ul>
              <li>
                Specialization in Computational Perception and Robotics (CPR)
              </li>
            </ul>
            {/* </Card.Text> */}
          </Card.Body>
          {/* </Card> */}
        </Col>
      </Row>
      <Row>
        <Col
          sm={12}
          style={{
            textAlign: "left",
            display: "flex",
          }}
        >
          {/* <Card> */}
          <Card.Header>
            <img
              src="https://marcom.purdue.edu/app/uploads/2022/09/PU-Seal.jpg"
              style={{
                width: "100px",
                background: "wheat",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title
              as="h3"
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Purdue University
              <span>May 2019</span>
            </Card.Title>
            <Card.Subtitle
              as="h5"
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Bachelor of Science, Computer Science
            </Card.Subtitle>
            {/* <Card.Text> */}
            <ul>
              <li>Concentration in Machine Intelligence</li>
              <li>Minor in Statistics</li>
            </ul>
            {/* </Card.Text> */}
          </Card.Body>
          {/* </Card> */}
        </Col>
      </Row>
    </Stack>
  );
}

function Skills() {
  return (
    <>
      {skillsData.skills.map((obj) => (
        <div key={obj.mainTopic}>
          <h2>{obj.mainTopic}</h2>
          {/* <Button variant="primary">
      //   Profile <Badge bg="secondary">9</Badge>
      //   <span className="visually-hidden">unread messages</span>
      // </Button> */}
          {/* <Stack direction="horizontal" gap={3}> */}
          <Row style={{ alignItems: "center", marginBottom: "25px" }}>
            <ul style={{ display: "block" }}>
              {obj.skillList.map((item) => (
                <li
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                  key={item.name}
                >
                  <Card style={{ width: "100%", background: "grey" }}>
                    <Figure.Image
                      src={
                        item.logo === ""
                          ? "https://icons.getbootstrap.com/assets/icons/image.svg"
                          : item.logo
                      }
                      style={{
                        height: "50px",
                        padding: "15px",
                        marginBottom: 0,
                      }}
                    />
                    <Card.Body>
                      <Card.Text>{item.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>
            {/* </Stack> */}
          </Row>
        </div>
      ))}
    </>
  );
}

function AboutPage() {
  return (
    <Container>
      <h1 className="text-6xl max-w-300">About</h1>
      {/* <VerticalTimeline /> */}
      <Tabs
        defaultActiveKey="education"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="education" title="Education">
          <Education />
        </Tab>
        <Tab eventKey="skills" title="Skills">
          <Skills />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default AboutPage;
