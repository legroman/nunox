import React from "react";
import logo from "../image/nunox_logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return(
        <section id="contact" className="offset">
            <footer>
                <div className="row justify-content-center">
                    <div className="col-md-5 text-center">
                        <img src={logo} alt="nunox-logo"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsa maxime necessitatibus quas saepe sed velit voluptates voluptatibus. Beatae, eveniet, similique. Error iure natus nihil?</p>
                        <strong className="contact-info">Contact Info</strong>
                        <p>(099)20-26-70<br/>legromant@gmail.com</p>
                        <a href="#!" target="_blank"><FontAwesomeIcon className="social" icon={faFacebookSquare}/></a>
                        <a href="#!" target="_blank"><FontAwesomeIcon className="social" icon={faInstagram}/></a>
                        <a href="#!" target="_blank"><FontAwesomeIcon className="social" icon={faTwitterSquare}/></a>
                    </div>
                    <hr className="socket"/>
                    &copy; Nunox 2020
                </div>
            </footer>
        </section>
    )
}