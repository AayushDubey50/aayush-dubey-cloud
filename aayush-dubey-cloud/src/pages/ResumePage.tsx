import { useState, useRef } from "react";
import { Button, Container, Overlay, Tooltip } from "react-bootstrap";

function ResumePage() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Container>
      <h1 className="text-6xl max-w-300">Resume</h1>
      <Button
        ref={target}
        onClick={() => setShow(!show)}
        // disabled
        variant="warning"
        // href="#"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        View my resume
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            In progress!
          </Tooltip>
        )}
      </Overlay>
    </Container>
  );
}

export default ResumePage;
