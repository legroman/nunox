import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlayCircle, faSlidersH} from '@fortawesome/free-solid-svg-icons'
import {faWpforms} from "@fortawesome/free-brands-svg-icons"

export default function Features() {
    return (
        <section id="features" className="offset">
            <div className="jumbotron">
                <div className="narrow text-center">
                    <div className="col-12">
                        <h3 className="heading">Features</h3>
                        <div className="heading-underline"></div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="feature">
                                <FontAwesomeIcon icon={faPlayCircle} size="4x" color="#00B29A" transform="shrink-3 up-5"/>
                                <h3>Custom Animation</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda,
                                    dolores illo ipsum iste iure rem repellat soluta temporibus vel.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <FontAwesomeIcon icon={faSlidersH} size="4x" color="#00B29A" transform="shrink-4.5 up-4.5"/>
                                <h3>Content Slider</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
                                    consequatur culpa fugiat in incidunt laboriosam minus placeat reprehenderit
                                    vitae?</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <FontAwesomeIcon icon={faWpforms} size="4x" color="#00B29A" transform="shrink-4.5 up-4"/>
                                <h3>Contact Form</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
                                    consequatur culpa fugiat in incidunt laboriosam minus placeat reprehenderit
                                    vitae?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}