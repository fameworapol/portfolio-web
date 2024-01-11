import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <h3>Programming Language</h3><br/>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>Type Script</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>Go</h5>
                                </div>
                                <div className="item">
                                <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter1} alt="Image" />
                                    <h5>Html & CSS3</h5>
                                </div>
                            </Carousel>
                            <br/>
                            <h3>Framework</h3><br/>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter2} alt="Image" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter2} alt="Image" />
                                    <h5>Angular.js</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter2} alt="Image" />
                                    <h5>Nest.js</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter2} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Intermediate</h4>
                                    <img src={meter2} alt="Image" />
                                    <h5>Springboot</h5>
                                </div>
                            </Carousel>
                            <br/>
                            <h3>Tools</h3><br/>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter3} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter3} alt="Image" />
                                    <h5>Amazon Web Services</h5>
                                </div>
                                <div className="item">
                                    <h4 style={{position:"relative",top:"105px"}}>Basic</h4>
                                    <img src={meter3} alt="Image" />
                                    <h5>Azure DevOps</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}