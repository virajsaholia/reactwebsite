import React from "react";
import "./Roastermanagement.css";
import Roster_purpose from "./images/Roster-purpose.webp";
import Real_Estate_Management_System from "./images/Real-Estate-Management-System-1.webp";
import Roster_Mgmt_benifit from "./images/Roster-Mgmt-benifit.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Roastermanagement() {
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
                <p className="product_head">ROSTER MANAGEMENT</p>
                <p className="product_headtext">Streamline And Optimize The Process Of Managing Your Workforce Easily.</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">ROSTER MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Roster Management ERP (Enterprise Resource Planning) software is a comprehensive solution tailored to streamline and enhance the management of personnel, schedules, and associated resources within an organization. 
                        </p>
                        <p className="product_purpose_text">
                        This software is meticulously designed to offer a range of functionalities that cater to the specific requirements of efficient roster management. These features encompass aspects such as employee information management, automated scheduling tools, shift management, leave and absence tracking, skill and certification monitoring, compliance management, real-time updates, and much more. By providing a centralized platform for these tasks, Roster Management ERP software aims to optimize workforce efficiency, reduce errors, and facilitate informed decision-making in workforce management.
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={Roster_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Real_Estate_Management_System} alt="" />
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
                                <p className="product_card_heading">Employee Information Management</p>
                                <p className="product_card_text">Centralized database for storing and managing employee information, including contact details, skills, qualifications, and work preferences.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Leave And Absence Management
</p>
                                <p className="product_card_text">Tracking and managing employee leave requests, including vacation days, sick leave, and other types of absences.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Skill And Certification
Tracking</p>
                                <p className="product_card_text">Capability to record and track employee skills, certifications, and training, ensuring that only qualified individuals are assigned to specific tasks.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Scheduling</p>
                                <p className="product_card_text">Automated scheduling tools to create, modify, and manage employee work schedules, taking into account factors such as shifts, working hours, and days off.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Shift Management</p>
                                <p className="product_card_text">Tools for defining and managing different types of shifts, including regular shifts, overtime, on-call, and rotating shifts.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Performance Tracking</p>
                                <p className="product_card_text">Tools to monitor and evaluate employee performance, attendance, and adherence to schedules.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Reporting And Analytics</p>
                                <p className="product_card_text">Reporting features that provide insights into workforce trends, scheduling efficiency, and other key metrics to support data-driven decision-making.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Integration With HR And Payroll</p>
                                <p className="product_card_text">Seamless integration with HR and payroll systems to ensure accurate and efficient processing of employee-related information and compensation.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Customization And Scalability</p>
                                <p className="product_card_text"> Customization options to adapt the software to the specific needs of the organization, and scalability to accommodate growth.

</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Roster_Mgmt_benifit} alt="" />
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
export default Roastermanagement;