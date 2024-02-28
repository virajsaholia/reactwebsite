import React from "react";
import "./Android-application.css";
import ideaandplanning from "./images/idea-nd-planning.webp";
import developmentandroid from "./images/developemntandroid.webp";
import appdeployment from "./images/app-deployment.webp";
import designandroid from "./images/Designandroid.webp";
import apptesting from "./images/app-testing.webp";
import mobilegraphchart from "./images/mobilegraphchart.webp";
import { Container, Row, Col } from 'react-grid-system';
function Androidapplication() {
    return (
        <section className="sub_service">
            <Container className="heading_sub_service">
                <p className="service_head">MOBILE DEVELOPMENT</p>
                <p className="service_headtext">Develop Customized Solutions To Empower Your Mobile App Aspiratitons.</p>
            </Container>
            <Container className="why_service_first">
                <p className="why_service_head">Why Is Mobile Development Necessary For Your Business?</p>
                <p className="why_service_text1_anapp">Jupical stands at the forefront as a premier provider of services in Android mobile app development. We present a complete range of solutions aimed at assisting you in crafting cutting-edge, user-friendly, and high-performance applications tailored to fulfill your distinct business requirements and objectives</p>
                <p className="why_service_text2_anapp">Backed by a team of seasoned and dedicated Android developers, Jupical specializes in delivering customized solutions, empowering businesses to successfully attain their mobile app aspirations. Our team of iPhone app developers goes beyond mere technical considerations of your app idea. We dive into the app’s purpose and its impact on your business, ensuring that we can recommend and provide the most optimal solution for your needs. Through our enterprise iPhone application development services, we empower businesses with the potential and a competitive edge, fostering improved customer service and broader access to their respective markets.</p>
                <div className="card_process">
                    <Row className="card_style_anapp">
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img" src={ideaandplanning} alt="" />
                                <p className="service_card_heading">Idea and Planning</p>
                            </div>
                        </Col>
                        <Col sm={4} className="card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img" src={developmentandroid} alt="" />
                                <p className="service_card_heading">Development</p>
                            </div>
                        </Col>
                        <Col sm={4} className="card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img" src={appdeployment} alt="" />
                                <p className="service_card_heading">Deployment</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="card_style_anapp">
                        <Col sm={4} className="card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img" src={designandroid} alt="" />
                                <p className="service_card_heading">Design</p>
                            </div>
                        </Col>
                        <Col sm={4} className="card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img" src={apptesting} alt="" />
                                <p className="service_card_heading">Testing</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="graph_state">
                    <Row className="graph_chart_img">
                        <Col lg={6}>
                            <img className="servicegraphchart_anapp" src={mobilegraphchart} alt="" />
                        </Col>
                        <Col lg={6} className="">
                        <p className="why_service_head1">Why To Choose App Development?</p>
                        <p className="why_service_text">Jupical provides a comprehensive range of Android mobile app development services to empower your business
                        </p>
                        <Row className="points">
                            <Col lg={1} className="symbol">
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
                            <Col lg={6} className="point_text">
                                <div className="service_point1">
                                    <p>Personalization</p>
                                </div>
                                <div className="service_point1">
                                    <p>Increased Accessibility</p>
                                </div>
                                <div className="service_point1">
                                    <p>Competitive Advantage</p>
                                </div>
                                <div className="service_point1">
                                    <p>Innovative Opportunities</p>
                                </div>
                                <div className="service_point1">
                                    <p>Customer Loyalty & Engagement</p>
                                </div>
                                <div className="service_point1">
                                    <p>Data Synchronization</p>
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
export default Androidapplication;