import React from "react";
import "./Datamigration.css";
import depedencymgmt from "./images/sub_service_dependency-mgmt.webp";
import subservicegraph from "./images/sub_service_graph_img.webp";
import evaluation from "./images/sub_service_evaluation.webp";
import rollback from "./images/sub_service_rollback.webp";
import surveillance from "./images/sub_service_surveillance.webp";
import verification from "./images/sub_service_verification.webp";
import { Container, Row, Col } from 'react-grid-system';
function Datamigration() {
    return (
        <section className="sub_service">
            <Container className="heading_sub_service">
                <p className="service_head">Other Services</p>
                <p className="service_headtext">Empower Your Business Framework With Reliable IT Solutions For Optimized Infrastructure And Software Applications.</p>
            </Container>
            <Container className="why_service_first">
                <p className="why_service_head">Data And Code Migration With Jupical's Expert Services</p>
                <p className="why_service_text1_dami">Jupical specializes in delivering comprehensive data migration and code migration services tailored to the unique needs of businesses. Our expertise lies in facilitating the seamless transfer of data from one storage system, format, or database to another, employing meticulous processes that encompass moving, copying, and restructuring data. </p>
                <p className="why_service_text2_dami">Additionally, we excel in code migration, a crucial undertaking for businesses undergoing software upgrades, transitioning development tools, or relocating applications to different hosting environments. Our services ensure that organizations can navigate these technological transitions with precision, preserving data accessibility and code integrity in the new environments. At Jupical, we are committed to providing reliable solutions that empower companies to optimize their IT infrastructure and software applications effectively.</p>
                <div className="card_process">
                    <Row className="card_style_dami">
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_dami" src={evaluation} alt="" />
                                <p className="service_card_heading">Evaluation</p>
                            </div>
                        </Col>
                        <Col sm={4} className="card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_dami" src={verification} alt="" />
                                <p className="service_card_heading">Verification</p>
                            </div>
                        </Col>
                        <Col sm={4} className="card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="sub_service_card">
                                <img className="sub_service_img_dami" src={rollback} alt="" />
                                <p className="service_card_heading">Rollback Mechanisms

                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="card_style_dami">
                    <Col sm={4} className="card_design"></Col>
                    <Col sm={4} className="card_design">
                        <div className="sub_service_card">
                            <img className="sub_service_img_dami" src={depedencymgmt} alt="" />
                            <p className="service_card_heading">Dependency Management

                            </p>
                        </div>
                    </Col>
                    <Col sm={4} className="card_design"></Col>
                    <Col sm={4} className="card_design">
                        <div className="sub_service_card">
                            <img className="sub_service_img_dami" src={surveillance} alt="" />
                            <p className="service_card_heading">Surveillance</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="graph_state">
                <Row className="graph_chart_img">
                    <Col lg={6} md={12} sm={12}>
                        <img className="servicegraphchart_dami" src={subservicegraph} alt="" />
                    </Col>
                    <Col lg={6} md={12} sm={12} className="">
                        <p className="why_service_head1">
                            Why To Choose Data-Code Migration?</p>
                        <p className="why_service_text">Data and code migration offers a multitude of benefits for businesses, including
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
                            <Col lg={6} md={6} sm={12} className="point_text">
                                <div className="service_point1">
                                    <p>
                                        Modernized Infrastructure</p>
                                </div>
                                <div className="service_point1">
                                    <p>
                                        Enhanced Data Management</p>
                                </div>
                                <div className="service_point1">
                                    <p>Reduced IT Costs</p>
                                </div>
                                <div className="service_point1">
                                    <p>
                                        Improved Agility</p>
                                </div>
                                <div className="service_point1">
                                    <p>
                                        Maximized Digital Asset Value</p>
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
export default Datamigration;