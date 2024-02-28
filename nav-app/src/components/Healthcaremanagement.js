import React from "react";
import "./Healthcaremanagement.css";
import Healthcare_Mgmt_purpose from "./images/Healthcare-Mgmt-purpose.webp";
import Hotel_Management_System from "./images/Hotel-Management-System-1 (1).svg";
import Benefit_HealthCare from "./images/Benefit-HealthCare.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Healthcaremanagement() {
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
                <p className="product_head">HEALTHCARE MANAGEMENT</p>
                <p className="product_headtext">End-To-End Solution To Enhance Patient Care And Operational Needs</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">HEALTHCARE MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Effortlessly oversee your healthcare organization with dedicated and secure software readily available. Transform your healthcare requirements by implementing optimal management processes, secure patient portals, and delivering exceptional patient care.</p>
                        <p className="product_purpose_text">
                        Our solution is designed to meet all your needs, covering from patient management and electronic health records to appointment scheduling, medical billing, and comprehensive reporting. It guarantees operational efficiency and improved patient outcomes. Thrive with end-to-end management alongside us and witness your business flourish twofold!
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={Healthcare_Mgmt_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Hotel_Management_System} alt="" />
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
                                <p className="product_card_heading">Patient Management</p>
                                <p className="product_card_text">Maintain digital records of patient health information, including medical history, diagnoses, medications, and treatment plans. Streamline the process of admitting and registering patients. </p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Health Records</p>
                                <p className="product_card_text">Digitize patient records and securely store electronic health records for quick access to patient information, medical histories, diagnostic reports, and treatment plans. Ensure data privacy and streamline care coordination.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Appointment Scheduling</p>
                                <p className="product_card_text">Empower patients to book appointments online, view available slots, and receive automated reminders. Provide healthcare providers with an integrated calendar, minimizing scheduling conflicts and enhancing productivity.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Medical & Claims Management</p>
                                <p className="product_card_text">Streamline medical billing and claims. Generate precise invoices, automate claims submission, and track payments efficiently. Seamlessly integrate with accounting modules for streamlined financial management and accurate revenue tracking.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Laboratory Information System</p>
                                <p className="product_card_text">Test Orders and Results: Facilitate the ordering of laboratory tests and manage the results.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Reporting And Analysis</p>
                                <p className="product_card_text"> Leverage data analytics for insights into patient outcomes and resource utilization, enabling informed decisions and operational efficiency. This ensures adaptability and success in a dynamic healthcare environment. </p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Security And Compliance</p>
                                <p className="product_card_text">Adhere to healthcare regulations, including compliance with the Health Insurance Portability and Accountability Act (HIPAA), to safeguard sensitive information and uphold industry standards for privacy and security.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Supply CHain Management</p>
                                <p className="product_card_text">Efficiently handle the acquisition of medical supplies and equipment through streamlined procurement. Optimize healthcare inventory management for enhanced control and organization.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Human Resource Management</p>
                                <p className="product_card_text"> Streamline healthcare staff scheduling for efficiency. Track and manage staff certifications and training requirements to ensure compliance and competence.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Benefit_HealthCare} alt="" />
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
export default Healthcaremanagement;