import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faBold} from "@fortawesome/free-solid-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons"

export default function Resources() {
    return (
        <section id="resources" className="offset">
            <div className="fixed-background">
                <div className="row dark text-center">
                    <div className="col-12">
                        <h3 className="heading">Build With Core</h3>
                        <div className="heading-underline"></div>
                    </div>
                    <div className="col-md-4">
                        <h3>HTML 5</h3>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCode} size="3x" color="#00B29A" transform="shrink-3 up-5"/>
                        </div>
                        <p className="lead">Build with the latest, HTML 5</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Bootstrap 4</h3>
                        <div className="feature">
                            <FontAwesomeIcon icon={faBold} size="3x" color="#00B29A" transform="shrink-3 up-5"/>
                        </div>
                        <p className="lead">Build with the latest, HTML 5</p>
                    </div>
                    <div className="col-md-4">
                        <h3>CSS 3</h3>
                        <div className="feature">
                            <FontAwesomeIcon icon={faCss3} size="3x" color="#00B29A" transform="shrink-3 up-5"/>
                        </div>
                        <p className="lead">Build with the latest, HTML 5</p>
                    </div>
                </div>
                {/*<div className="fixed-wrap">*/}
                {/*    <div className="fixed">*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}