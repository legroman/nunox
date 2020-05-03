import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../image/nunox_logo.png";

export default function Menu() {
    return(
        <div id="home">
            {/*<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">*/}
            {/*    <a href="#!" className="navbar-brand"><img src={logo} alt="nunox-logo"/></a>*/}
            {/*    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">*/}
            {/*        <span className="navbar-toggler-icon"></span>*/}
            {/*    </button>*/}
            {/*    <div className="collapse navbar-collapse" id="navbarResponsive">*/}
            {/*        <ul className="navbar-nav ml-auto">*/}
            {/*            <li className="nav-item"><a href="#home" className="nav-link">home</a></li>*/}
            {/*            <li className="nav-item"><a href="#course" className="nav-link">course</a></li>*/}
            {/*            <li className="nav-item"><a href="#feature" className="nav-link">feature</a></li>*/}
            {/*            <li className="nav-item"><a href="#resources" className="nav-link">resources</a></li>*/}
            {/*            <li className="nav-item"><a href="#clients" className="nav-link">clients</a></li>*/}
            {/*            <li className="nav-item"><a href="#contact" className="nav-link">contact</a></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}


            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Navbar.Brand href="#home"><img src={logo} alt="nunox-logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-item" href="#course">Course</Nav.Link>
                        <Nav.Link className="nav-item" href="#features">Feature</Nav.Link>
                        <Nav.Link className="nav-item" href="#resources">Resources</Nav.Link>
                        <Nav.Link className="nav-item" href="#clients">Clients</Nav.Link>
                        <Nav.Link className="nav-item" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}