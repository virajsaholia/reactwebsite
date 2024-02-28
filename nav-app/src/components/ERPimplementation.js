import React from "react";
import "./ERPimplementation.css";
import erpimp from "./images/erpimp.svg";
import development from "./images/Development.webp";
import support2 from "./images/Support2.webp";
import customization from "./images/Customization.webp";
import training from "./images/Training.webp";
import erpgraphchart from "./images/erpgraphchart.webp";
import { Container, Row, Col } from 'react-grid-system';
function ERPimplementation() {
    return (
        <section className="sub_service">
            <Container className="heading_sub_service">
                <p className="service_head">ODOO</p>
                <p className="service_headtext">Incorporate Odoo For Collaborative Growth In Your Business.</p>
            </Container>
            <Container className="why_service_first">
                <p className="why_service_head">Why Choose Odoo ?</p>
                <p className="why_service_text1 why_service_text1_erp_mq">Jupical.io stands as a prominent Odoo implementation partner, specializing in aiding businesses of diverse scales in maximizing the benefits derived from the formidable ERP platform. Our array of services encompasses a holistic range, commencing with the initial consultation and assessment, extending through to customized development solutions, and culminating in comprehensive training programs.</p>
                <p className="why_service_text2 why_service_text2_erp_mq">Odoo is a leading open-source ERP platform that helps businesses of all sizes improve their efficiency, productivity, and profitability. It offers a wide range of modules that cover all aspects of business operations, including accounting, CRM, manufacturing, e-commerce, and more. Odoo is highly customizable and scalable, making it a good fit for businesses of all sizes and industries.</p>
                <div className="card_process">
                    <Row className="card_style_erp card_style_erp_mq">
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_erp sub_service_img_erp_mq" src={erpimp} alt="" />
                                <p className="service_card_heading">ERP Implementation</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_erp sub_service_img_erp_mq" src={development} alt="" />
                                <p className="service_card_heading">Development</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_erp sub_service_img_erp_mq" src={support2} alt="" />
                                <p className="service_card_heading">Support</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="card_style_erp card_style_erp_mq">
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_erp sub_service_img_erp_mq" src={customization} alt="" />
                                <p className="service_card_heading">Customization</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_erp sub_service_img_erp_mq" src={training} alt="" />
                                <p className="service_card_heading">Training</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="graph_state">
                    <Row className="graph_chart_img">
                        <Col lg={6}>
                            <img className="servicegraphchart servicegraphchart_mq" src={erpgraphchart} alt="" />
                        </Col>
                        <Col lg={6} className="">
                        <p className="why_service_head1">Why Choose Odoo For Your Business?</p>
                        <p className="why_service_text">Incorporating Odoo into your current ecosystem might appear challenging, yet with Jupical.io as your integration ally, the process becomes a smooth and effortless journey.
                        </p>
                        <Row className="points">
                            <Col lg={1} md={1} sm={1} className="symbol">
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="point_text">
                                <div className="service_point1">
                                    <p>Enhance Operational Workflows</p>
                                </div>
                                <div className="service_point1">
                                    <p>Minimize Expenses</p>
                                </div>
                                <div className="service_point1">
                                    <p>Elevate User Experience</p>
                                </div>
                                <div className="service_point1">
                                    <p>Meet Custom Needs</p>
                                </div>
                                <div className="service_point1">
                                    <p>Scalability</p>
                                </div>
                                <div className="service_point1">
                                    <p>Automate Tasks</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
export default ERPimplementation;