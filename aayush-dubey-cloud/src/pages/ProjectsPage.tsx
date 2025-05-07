import {
  Card,
  Form,
  Button,
  Container,
  // Badge,
  Stack,
  Col,
  Row,
} from "react-bootstrap";
// import SidebarMenu from "react-bootstrap-sidebar-menu";

import projectsData from "../data/projects.json";

function MyStickyBox() {
  return (
    <div
      style={{
        position: "sticky",
        top: "100px",
      }}
    >
      <Form
        style={{
          textAlign: "left",
          border: "1px gold solid",
          borderRadius: "10px",
          padding: "15px",
          height: "fit-content",
        }}
      >
        <h2>Filter Projects</h2>
        <Form.Group className="mb-3" controlId="projectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="projectTech">
          <Form.Label>Search by technology</Form.Label>
          <Form.Control type="text" placeholder="Technology" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="projectSkill">
          <Form.Label>Search by skill</Form.Label>
          <Form.Control type="text" placeholder="Skill" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Apply Filters
        </Button>
      </Form>
    </div>
  );
}

function ProjectList() {
  return (
    <Stack gap={3}>
      {projectsData.projectsList.map((project) => (
        <Card key={project.name} style={{ textAlign: "left" }}>
          <Card.Header as="h5">{project.name}</Card.Header>
          <Card.Body>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          {project.link.toString() === "" ? null : (
            <Card.Footer>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.logo ? (
                  <img
                    src={project.logo}
                    style={{ borderRadius: "50%", width: "20px" }}
                  />
                ) : (
                  <i className="bi bi-github"></i>
                )}{" "}
                Open Project
              </a>
            </Card.Footer>
          )}
        </Card>
      ))}
    </Stack>
  );
}

function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-6xl max-w-300">Projects</h1>
      <Row>
        <Col xs={4}>
          <MyStickyBox />
        </Col>
        <Col xs={8}>
          <ProjectList />
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsPage;
