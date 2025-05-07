import { useState, useEffect } from "react";

import {
  Nav,
  Navbar,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

function Navigation() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") !== null
      ? localStorage.getItem("isDarkMode") == "false"
        ? false
        : true
      : prefersDarkMode
  );
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode ? "true" : "false");
  };
  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <Navbar sticky="top" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <img src="/android-chrome-512x512.png" width="50" height="50" />{" "}
          Aayush Dubey
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/about" eventKey="about">
              <i className="bi bi-person-lines-fill"></i> About
            </Nav.Link>
            <Nav.Link href="/experience" eventKey="experience">
              <i className="bi bi-briefcase-fill"></i> Experience
            </Nav.Link>
            <Nav.Link href="/projects" eventKey="projects">
              <i className="bi bi-file-code-fill"></i> Projects
            </Nav.Link>
            <Nav.Link href="/resume" eventKey="resume">
              <i className="bi bi-file-earmark-text-fill"></i> Resume
            </Nav.Link>
          </Nav>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              </Tooltip>
            }
          >
            <input
              type="image"
              src={
                isDarkMode
                  ? "/assets/img/moon.jpg"
                  : "https://i2-prod.walesonline.co.uk/article27890008.ece/ALTERNATES/s1200c/1_maxresdefault.jpg"
              }
              onChange={toggleDarkMode}
              onClick={toggleDarkMode}
              checked={isDarkMode}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
          </OverlayTrigger>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
