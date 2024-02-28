import React from "react";
import './Certificates.css';
import certification_img16 from './images/certification_img16.svg';
import certification_img15 from './images/certification_img15.webp';
import certification_img14 from './images/certification_img14.webp';
import certification_img13 from './images/certification_img13.webp';
import Odoo_line1 from './images/Odoo_line1.webp';
import Odoo_line2 from './images/Odoo_line2.webp';

import { Container, Row, Col } from 'react-grid-system';

function Certificates() {
    return (
        <section className="certificate_section" >
            <Container className="certificate_heading" >
                <p className="certificate_head">CERTIFICATES</p>
                <p className="certificate_headtext">Attain Excellence And Ensure Quality Project Delivery!</p>
            </Container>
            <Container className="certificate_history" >
                <p className="certificate_h1" >Our History</p>
                <p className="certificate_h2">Odoo Certification</p>
                <p className="certificate_text">At Jupical, we proudly hold an official Odoo certification, underscoring our expertise in deploying and optimizing Odoo’s suite of business applications. This accreditation reflects our commitment to delivering tailored solutions that seamlessly integrate with your operations, empowering your business to thrive in today’s competitive landscape</p>
            </Container>
            <Container className="certifications" >
                <Row className="certification_row" >
                    <Col sm={3.3} className="certification_imgCol1">
                        <div>
                            <div className="square_1_1" ></div>
                            <div className="square_1_2" >
                                <img className="certification_img" src={certification_img16} alt="" srcset="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4.5} className="certification_textCol1" >
                        <p className="certification_head1" >Gathering Information</p>
                        <div className="certification_text1" >
                            <p>
                                Our Odoo 16 certification is a testament to our commitment to staying at the forefront of the ERP industry, and to providing our clients with the most advanced and effective solutions available.
                            </p>
                        </div>
                    </Col>
                    <Col sm={3.3} className="certification_designCol1" >
                        <div>
                            <div className="Oddo_textCol1" >
                                <h2 className="Odoo_text1" >
                                    O
                                </h2>
                                <h2 className="Odoo_text1" >
                                    D
                                </h2>
                                <h2 className="Odoo_text1" >
                                    O
                                </h2>
                                <h2 className="Odoo_text1" >
                                    O
                                </h2>
                            </div>
                            <div className="Oddo_textCol1" >
                                <h2 className="Odoo_number1" >16</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="Odoo_line_img1" >
                    <img className="Odoo_line1" src={Odoo_line1} alt="" srcset="" />
                </div>
                <Row className="certification_row" >
                    <Col sm={3.3} className="certification_designCol2" >
                        <div>
                            <div className="Oddo_textCol2" >
                                <h2 className="Odoo_text2" >
                                    O
                                </h2>
                                <h2 className="Odoo_text2" >
                                    D
                                </h2>
                                <h2 className="Odoo_text2" >
                                    O
                                </h2>
                                <h2 className="Odoo_text2" >
                                    O
                                </h2>
                            </div>
                            <div className="Oddo_textCol2" >
                                <h2 className="Odoo_number2" >15</h2>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3.3} className="certification_imgCol">
                        <div>
                            <div className="square_2_1" ></div>
                            <div className="square_2_2" >
                                <img className="certification_img" src={certification_img15} alt="" srcset="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4.5} className="certification_textCol2" >
                        <p className="certification_head2" >Gathering Information</p>
                        <div className="certification_text2" >
                            <p>
                                Proud to announce our certification as an official Odoo version 15 partner, offering top-of-the-line services and solutions to help businesses stay ahead of the game with the newest features and innovations in the platform.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="Odoo_line_img2" >
                    <img className="Odoo_line2" src={Odoo_line2} alt="" srcset="" />
                </div>
                <Row className="certification_row" >
                    <Col sm={3.3} className="certification_imgCol1">
                        <div>
                            <div className="square_1_1" ></div>
                            <div className="square_1_2" >
                                <img className="certification_img" src={certification_img14} alt="" srcset="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4.5} className="certification_textCol1" >
                        <p className="certification_head1" >Gathering Information</p>
                        <div className="certification_text1" >
                            <p>
                                Our Odoo 16 certification is a testament to our commitment to staying at the forefront of the ERP industry, and to providing our clients with the most advanced and effective solutions available.
                            </p>
                        </div>
                    </Col>
                    <Col sm={3.3} className="certification_designCol1" >
                        <div>
                            <div className="Oddo_textCol1" >
                                <h2 className="Odoo_text1" >
                                    O
                                </h2>
                                <h2 className="Odoo_text1" >
                                    D
                                </h2>
                                <h2 className="Odoo_text1" >
                                    O
                                </h2>
                                <h2 className="Odoo_text1" >
                                    O
                                </h2>
                            </div>
                            <div className="Oddo_textCol1" >
                                <h2 className="Odoo_number1" >14</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="Odoo_line_img1" >
                    <img className="Odoo_line1" src={Odoo_line1} alt="" srcset="" />
                </div>
                <Row className="certification_row" >
                    <Col sm={3.3} className="certification_designCol2" >
                        <div>
                            <div className="Oddo_textCol2" >
                                <h2 className="Odoo_text2" >
                                    O
                                </h2>
                                <h2 className="Odoo_text2" >
                                    D
                                </h2>
                                <h2 className="Odoo_text2" >
                                    O
                                </h2>
                                <h2 className="Odoo_text2" >
                                    O
                                </h2>
                            </div>
                            <div className="Oddo_textCol2" >
                                <h2 className="Odoo_number2" >13</h2>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3.3} className="certification_imgCol">
                        <div>
                            <div className="square_2_1" ></div>
                            <div className="square_2_2" >
                                <img className="certification_img" src={certification_img13} alt="" srcset="" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4.5} className="certification_textCol2" >
                        <p className="certification_head2" >Gathering Information</p>
                        <div className="certification_text2" >
                            <p>
                                Proud to announce our certification as an official Odoo version 15 partner, offering top-of-the-line services and solutions to help businesses stay ahead of the game with the newest features and innovations in the platform.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Certificates;