import Container from "react-bootstrap/esm/Container";
import "../styles/Menu.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Menu() {
  return (
    <Container
      className="vh-100 d-flex align-items-center justify-content-center"
      id="menu"
    >
      <Row>
        <Col md={6}>
          <img src="https://5.imimg.com/data5/OY/XN/BK/ANDROID-16238010/product-jpeg-500x500.jpg" />
        </Col>
        <Col md={6} className="col-sm-6 justify-content-between" >
          <Row md={2}>
            <p>
              <b>Benefit</b>
            </p>{" "}
          </Row>
          <Row md={2}>
            <h1>Why choose us?</h1>
          </Row>
          <Row md={2}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minus unde, ipsa facilis eaque excepturi? Sapiente voluptas
              dolorem praesentium dolorum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione similique amet dolores
              voluptas molestiae assumenda provident magnam asperiores, rerum
              error sed? Doloribus sapiente maiores facere incidunt mollitia
              enim inventore praesentium iure voluptatem et libero vel quo fugit
              voluptate at, placeat distinctio culpa natus. Dolore vel sit
              eligendi exercitationem laboriosam eveniet.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
