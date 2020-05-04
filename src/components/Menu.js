import React from "react";
import $ from "jquery";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../image/nunox_logo.png";

export default function Menu() {

    $(document).on("click", "nav .nav-item", function(e) {
        e.preventDefault();
        let id  = $(this).attr('href');
        let top = $(id).offset().top; // отримуємо координати блока
        $('body, html').animate({scrollTop: top}, 800); // плавно переходимо до блоку
    });

    return(
        <div id="home">
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