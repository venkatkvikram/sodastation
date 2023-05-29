import Container from "react-bootstrap/esm/Container";

function About () {
    return (
        <Container className="vh-100 d-flex align-items-center justify-content-center" id="pricing">
            <img width="90%" src={require("../assets/prces.jpg.png")} />
        </Container>                    
    )
}

export default About;