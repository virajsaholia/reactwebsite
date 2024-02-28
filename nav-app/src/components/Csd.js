import React from "react";
import "./Csd.css";
import portalmanage from "./images/portalmanage.webp";
import digitalexp from "./images/digitalexp.webp";
import analyticcloud from "./images/analyticcloud.webp";
import integrationcap from "./images/integrationcap.webp";
import themedev from "./images/themedev.webp";
import liferaygraphchart from "./images/liferaygraphchart.webp";
import { Container, Row, Col } from 'react-grid-system';
function Csd() {
    return (
        <section className="sub_service">
            <Container className="heading_sub_service">
                <p className="service_head">LIFERAY</p>
                <p className="service_headtext">Forge Outstanding Digital Experiences With LIFERAY To Attain Business Growth!</p>
            </Container>
            <Container className="why_service_first">
                <p className="why_service_head">Why Is Liferay Important For Businesses?</p>
                <p className="why_service_text1_csd">Jupical is the reliable ally to ensure your success with Liferay. Demonstrating a profound understanding of Liferay and a dedicated commitment to customer contentment, we deliver solutions that empower businesses to forge outstanding digital experiences, improve operational efficiency, and attain strategic goals. Embrace the formidable capabilities of Liferay and reshape your digital landscape with the expertise offered by Jupical.</p>
                <p className="why_service_text2_csd">Liferay stands as an open-source enterprise portal and digital experience platform, furnishing a framework and an array of tools for the creation and management of web applications, content, and portals. Its purpose is to streamline the development of business applications and unify various services into a cohesive platform.</p>
                <div className="card_process">
                    <Row className="card_style_csd">
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_csd" src={portalmanage} alt="" />
                                <p className="service_card_heading">Portal Management</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_csd" src={digitalexp} alt="" />
                                <p className="service_card_heading">Digital Experience Platform</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_csd" src={analyticcloud} alt="" />
                                <p className="service_card_heading">Analytics Cloud</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="card_style_csd">
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_csd" src={integrationcap} alt="" />
                                <p className="service_card_heading">Integration Capabilities</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} className="card_design"></Col>
                        <Col lg={4} md={4} sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_csd" src={themedev} alt="" />
                                <p className="service_card_heading">Theme Development</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="graph_state">
                    <Row className="graph_chart_img">
                        <Col lg={6} sm={12} md={12}>
                            <img className="servicegraphchart_csd" src={liferaygraphchart} alt="" />
                        </Col>
                        <Col lg={6} sm={12} md={12} className="">
                        <p className="why_service_head1">Why To Choose LIFERAY ?</p>
                        <p className="why_service_text">Jupical provides a wide range of Liferay services to empower your business
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
                            </Col>
                            <Col lg={6} md={6} sm={6} className="point_text">
                                <div className="service_point1">
                                    <p>Workflow Automation</p>
                                </div>
                                <div className="service_point1">
                                    <p>Responsive Design</p>
                                </div>
                                <div className="service_point1">
                                    <p>Security Features</p>
                                </div>
                                <div className="service_point1">
                                    <p>Robust Management</p>
                                </div>
                                <div className="service_point1">
                                    <p>Cost-Effectiveness</p>
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
export default Csd;