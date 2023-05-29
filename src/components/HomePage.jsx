import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const HomePage = () => {
  return (
    <Container
      className="vh-100 d-flex align-items-center justify-content-center"
      id="home"
    >
      <Row>
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            culpa.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            harum animi omnis cumque optio dolorum odio dignissimos dolorem
            inventore tempore, quasi vel ut officiis repellendus cum architecto
            exercitationem nostrum ab! Dolorem tempore officia ullam quisquam
            architecto aspernatur tempora, deserunt placeat vel, sunt laudantium
            quis eius dolore voluptatem eveniet doloribus earum.
          </p>
          <Col>
            <Button className="d-flex align-items-end">Get started</Button>
          </Col>
        </Col>
        <Col md={6}>
          <img className="img-fluid" src={require("../assets/sodacans.jpg")} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
