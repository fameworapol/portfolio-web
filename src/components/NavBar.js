import {Navbar,Container,Nav} from "react-bootstrap"
import {useState,useEffect} from "react"
import logo from "../assets/img/logo.png"
import NavIcon1 from "../assets/img/nav-icon1.svg"
import NavIcon2 from "../assets/img/nav-icon2.svg"
import NavIcon3 from "../assets/img/nav-icon3.svg"
import NavIcon4 from "../assets/img/line.svg"
import NavIcon5 from "../assets/img/github.svg"

export const NavBar =()=>{
    const [activeLink, setactiveLink] = useState('home')
    const [scolled, setscolled] = useState(false)
    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY>50) {
                setscolled(true)
            }else{
                setscolled(false)
            }
        }
        window.addEventListener("scroll",onScroll)
        return ()=> window.removeEventListener("scroll",onScroll)
    }, [])
    
    function onUUpdateActivateLink(value) {
        setactiveLink(value)
    }

    return (
    <Navbar expand="lg" className={scolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==="home" ? "active navbar-link":"navbar-link"} onClick={()=>{onUUpdateActivateLink("home")}}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==="skills" ? "active navbar-link":"navbar-link"} onClick={()=>{onUUpdateActivateLink("skills")}}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==="projects" ? "active navbar-link":"navbar-link"} onClick={()=>{onUUpdateActivateLink("projects")}}>Projects</Nav.Link>
            <Nav.Link href="#about" className={activeLink==="about" ? "active navbar-link":"navbar-link"} onClick={()=>{onUUpdateActivateLink("about")}}>About</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/worrapon-thongmook-75372115b/"><img src={NavIcon1} alt=""/></a>
                <a href="https://www.facebook.com/Fameworapol/"><img src={NavIcon2} alt=""/></a>
                <a href="#https://www.instagram.com/fame_worapol/?next=%2F"><img src={NavIcon3} alt=""/></a>
                <a href="https://github.com/fameworapol"><img src={NavIcon4} alt=""/></a>
                <a href="https://github.com/fameworapol"><img src={NavIcon5} alt=""/></a>
            </div>
            {/* <button className="vvd" onClick={()=>console.log("connect")}><span>Let’s Connect</span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}