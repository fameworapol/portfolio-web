import Carousel from "react-multi-carousel";
export default function About() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="about" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" >
              <h1>About</h1>
              <br/>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h4>2022 - Present</h4>
                  <ul>
                    <li><h5 style={{textAlign:'start'}}>
                    Master's Degree in Computer science, Faculty of Science and
                    Technology , Thammasat University (Saturday-Sunday classes)
                    , GPA : 4.00
                  </h5></li>
                  </ul>
                </div>
                <div className="item">
                  <h4>2018 - 2022</h4>
                  <ul style={{textAlign:'start'}}>
                    <li><h5>Second Class Honors in Bachelor's Degree in Industrial Chemistry, Faculty of Science, Chiang Mai University, GPA : 3.42 </h5></li>
                    <li><h5>Cerficate for Academic Excellent Award in the academic year of 2019</h5></li>
                    <li><h5>Cerficate for Academic Excellent Award in the academic year of 2020</h5></li>
                    <li><h5>Certificate for Outstanding Academic Improvement Award in the academic year of 2019</h5></li>
                  </ul>
                </div>
                <div className="item">
                  <h4>2022 - 2017</h4>
                  <ul style={{textAlign:'start'}}>
                    <li><h5>Lomkaophitthayakom School : Grade 7-12</h5></li>
                  </ul>
                </div>
                <div className="item">
                  <h4>2006 - 2011</h4>
                  <ul style={{textAlign:'start'}}>
                    <li><h5>Hueykoi School : Grade 1-6</h5></li>
                  </ul>
                </div>
              </Carousel>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
