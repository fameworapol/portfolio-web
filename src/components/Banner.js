import {Container,Row,Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import meIng from "../assets/img/Astronuat.png"
import "animate.css"

export default function Banner(){
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Web Developer`}<span className="wrap"></span></h1>
                        <p>Computer Science students with extensive knowledge and education in software design and application development. Fast learner with strong time management. can work well Strong problem-solving and problem-solving skills with analytical thinking.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={meIng} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}