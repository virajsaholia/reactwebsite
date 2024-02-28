import React from "react";
import "./Educationmanagement.css";
import Education_Mgmt_purpose from "./images/Education-Mgmt-purpose.webp";
import Education_Management_System from "./images/Education-Management-System-1.svg";
import Benefit_EMS from "./images/Benefit-EMS-2.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Educationmanagement() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="sub_products">
            <Container className="heading_sub_products">
                <p className="product_head">EDUCATION MANAGEMENT</p>
                <p className="product_headtext">Eliminate Manual Operational Processes And Implement An Automated Solution Designed For Your Business.</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">EDUCATIONAL MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">In the contemporary landscape of educational institutions, proficient management is pivotal for ensuring a seamless learning experience. Utilize the Education Management ERP solution to establish a platform that streamlines paperless management and enhances productivity within a unified system.</p>
                        <p className="product_purpose_text">
                        Crafted to revamp management processes, promote collaboration, and provide outstanding learning experiences, our Educational ERP solution is comprehensive. Covering student information management, course planning, seamless integration of online learning experiences, strong financial management, and proficient data reporting capabilities, Education ERP stands as an all-in-one solution. This tool is designed to boost productivity and enable organizations to work proactively towards achieving their goals!
                        
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={Education_Mgmt_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Education_Management_System} alt="" />
                </div>
            </Container>
            <Container className="product_features">
                <div className="product_features_text">
                    <p className="product_features_texthead">Features</p>
                </div>
                <div className="product_features_card_process">
                    <Row className="product_features_card_style">
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Attendance Tracking</p>
                                <p className="product_card_text">Monitors and records student and staff attendance, helping institutions keep track of attendance patterns and compliance.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Grade Management</p>
                                <p className="product_card_text">Facilitates the recording and management of grades and academic performance, allowing educators to track student progress.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Admissions And Enrollment</p>
                                <p className="product_card_text">Streamlines the admissions process, from application submission to enrollment, ensuring a smooth experience for both students and administrators  </p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Financial & Fees Aid</p>
                                <p className="product_card_text"> Handles financial transactions, such as fee collection, budgeting, payroll processing, and other accounting functions specific to educational institutions.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Library Management</p>
                                <p className="product_card_text"> Manages library resources, including book cataloging, circulation, and tracking overdue books.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Integration Capabilities</p>
                                <p className="product_card_text"> Integrates with other systems and applications, such as finance software, communication tools, and third-party services.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Data Analytics & Reporting</p>
                                <p className="product_card_text"> Generates reports and analytics to help administrators and educators make data-driven decisions for continuous improvement.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Learning Management System</p>
                                <p className="product_card_text">Supports online learning by offering a platform for course management, content delivery, and assessment.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Security And Access Controls</p>
                                <p className="product_card_text">Role-based access controls and security measures to ensure that sensitive information is protected and accessed only by authorized personnel.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Benefit_EMS} alt="" />
                    </div>
                </div>
            </Container>
            <Container className="product_feature_happyclient">
                <Row>
                    <Col sm={6} className='ClientContentContainer' >
                        <span className='product_feature_happy_client_cover' >Happy Clients</span>
                        <div className='ClientHeadingContainer' >
                            <h2 className='product_feature_happy_client_head' >What our clients are saying </h2>
                        </div>
                        <Slider {...settings} className='product_feature_happy_client_text' >
                            <p>""I wholeheartedly recommend the services provided. The level of communication and the profound understanding of our requirements demonstrated by the team have been truly exceptional.""
                                <p className='product_feature_happy_client_id' >- Rami Harfouch (Manager), Procom Middle East – Dubai</p>
                            </p>
                            <p>""My sincere appreciation for Jupical.io’s exceptional team and ability to deliver the best results. Their unwavering commitment to completing tasks without unnecessary delays is truly commendable!""
                                <p className='product_feature_happy_client_id' >Alex Marcou (Managing Director), MCIT -Cyprus</p>
                            </p>

                            <p>""The overall service has proven to be commendable. Our application's requirements were meticulously revised and fulfilled to our satisfaction. Jupical.io exhibited an exemplary level of responsiveness, both through email correspondence and diligent follow-up meetings, further underscoring their commitment to providing an exceptional service.""
                                <p className='product_feature_happy_client_id' >- Lorenzo Zavalla, Owner, Exceed Digital Solutions</p>
                            </p>

                            <p>""We had the privilege of collaborating with Jupical.io on a critical project for the University UNAM in Mexico. Based on our positive experience, we eagerly anticipate the opportunity to engage in future projects and continue our successful partnership with them.""
                                <p className='product_feature_happy_client_id' >
                                    - Mauricio Rodriguez, CEO, MitMut
                                </p>
                            </p>

                            <p>""Jupical.io consistently provides valuable technical support, excels in issue responsiveness and improvements, and demonstrates a strong commitment to collaboration. We eagerly look forward to continuing our partnership with them.""
                                <p className='product_feature_happy_client_id' >
                                    - Jakob Hansen-Tangen, CEO, Flyt Consulting AS
                                </p>
                            </p>
                        </Slider>
                    </Col>
                    <Col sm={6} className='ClientImgContainer' >
                        <img className='product_feature_clientsaying' src={clientsaying} alt="clientSaying" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Educationmanagement;