import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <Container as="main">
            <h1>Page not found</h1>
            <p>The page you requested could not be found.</p>
            <Link to="/">Return home</Link>
        </Container>
    );
}

export default NotFoundPage;
