import React from "react";
import "./Gymmanagement.css";
import gym_mgmt_purpose from "./images/gym-mgmt-purpose.webp";
import Gym_Management_System from "./images/Gym-Management-System-1.svg";
import Benefit_GYM from "./images/Benefit-GYM-1.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Gymmanagement() {
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
                <p className="product_head">GYM MANAGEMENT</p>
                <p className="product_headtext">Incorporate Our Management System To Stay Current With Business Processes</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">GYM MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Our customized solution empowers gym proprietors and administrators to streamline their operations, elevate member experiences, and stimulate business expansion. Covering everything from membership management and class scheduling to attendance tracking, billing, and thorough reporting, our solution guarantees efficient processes and outstanding fitness services.
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={gym_mgmt_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Gym_Management_System} alt="" />
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
                                <p className="product_card_heading">Membership Management</p>
                                <p className="product_card_text">Simplify membership management; capture member details effortlessly, track membership plans, and automate renewals. Manage contracts with terms, payment schedules, and access privileges. Deliver personalized services for seamless member experiences.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Class & Schedule Management</p>
                                <p className="product_card_text">Streamline classes and schedules, easily manage types, schedules, and instructors. Members can book classes online, view slots, and receive reminders. Optimize resource allocation for a seamless fitness class experience.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Attendance Tracking</p>
                                <p className="product_card_text">Effortlessly track member attendance, members can check-in using cards, fingerprint scanners, or QR codes. Analyze attendance patterns for insights into member behavior. Optimize class schedules and resource allocation using attendance data.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Inventory Management</p>
                                <p className="product_card_text">Control gym equipment inventory seamlessly with our solution.Monitor usage, maintenance, and repairs. Streamline equipment checkouts and returns for efficient management, minimizing downtime and ensuring availability to enhance member satisfaction.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Billing And Invoicing</p>
                                <p className="product_card_text">Simplify payments and billing, create precise invoices, automate recurring payments, and monitor payment statuses. Offer multiple payment options, including credit cards, online transfers, and direct debits for member convenience. Streamline financial management and revenue tracking.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">CRM</p>
                                <p className="product_card_text">CRM at its best: Enhance engagement with robust communication tools, efficient feedback management, and seamless member communication in our system, ensuring a proactive approach to concerns. Stay informed with timely notifications for engaged members.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Benefit_GYM} alt="" />
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
export default Gymmanagement;