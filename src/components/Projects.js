import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-3.png";
import { Container, Row, Col, Nav,Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp2.png"


export default function Projects() {
  const projects = [
    {
      title: "E-commerce Application",
      description: "",
      imgUrl: projImg1,
      linkProject:'https://e-commerce-app-fame.netlify.app/',
    },
    {
      title: "To do List Application",
      description: "",
      imgUrl: projImg2,
      linkProject:'https://todolist-fameworapol.netlify.app/',
    },
    {
      title: "Blogging Web",
      description: "",
      imgUrl: projImg3,
      linkProject:'https://bloging-web.netlify.app/',
    }
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <br/>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
            {/* <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav> */}
            <Tab.Content>
                <Tab.Pane eventKey={"first"}>
                    <Row>
                        {projects.map((project,index)=>{
                            return (
                                <ProjectCard 
                                    key={index}
                                    {...project}
                                />
                            )
                        })}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"second"}>
                    <p>2</p>
                </Tab.Pane>
                <Tab.Pane eventKey={"third"}>
                    <p>3</p>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <p>See another project and Source code on GitHub <a href="https://github.com/fameworapol">github.com/fameworapol</a>.</p>
      </Container>
      <img className="background-image-right" src={colorSharp}></img>
    </section>
  );
}
