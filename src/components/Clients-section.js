import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import client1 from "../image/client-1.jpg";
import client2 from "../image/client-2.jpg";

export default function Clients() {
    return(
        <section id="clients" className="offset">
            <div className="jumbotron">
                <div className="col-12 text-center">
                    <h3 className="heading">Clients</h3>
                    <div className="heading-underline"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 clients">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={client1} alt=""/>
                            </div>
                            <div className="col-md-8">
                                <blockquote>
                                    <FontAwesomeIcon className="quote" icon={faQuoteLeft} color="#00B29A"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur, doloribus excepturi minima minus molestias non odit perferendis ratione, reiciendis soluta sunt suscipit tempore vel velit veniam voluptas. Assumenda commodi culpa cum delectus, ducimus ex, impedit nobis nulla omnis quis quo reprehenderit sapiente vero voluptates?
                                    <hr className="client-hr"/>
                                    <cite>&#8213; Nina, Professional Photographer</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 clients">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={client2} alt=""/>
                            </div>
                            <div className="col-md-8">
                                <blockquote>
                                    <FontAwesomeIcon className="quote" icon={faQuoteLeft} color="#00B29A"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, accusantium assumenda consequuntur dicta distinctio dolore dolores, iste modi mollitia obcaecati optio perferendis possimus quibusdam sint tempora temporibus. Animi aspernatur enim et iure labore minus mollitia, natus necessitatibus perspiciatis sed? Blanditiis debitis inventore sint? Debitis id ipsa nulla placeat sint?
                                    <hr className="client-hr"/>
                                    <cite>&#8213; Roman, Small Business Owner</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 narrow text-center">
                    <p className="lead">Want to learn more about developing Bootstrap themes?</p>
                    <a href="#!" className="btn btn-secondary btn-md" target="_blank">Bootstrap Course</a>
                </div>
            </div>
        </section>
    )
}