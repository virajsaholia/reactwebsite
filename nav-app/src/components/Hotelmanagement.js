import React from "react";
import "./Hotelmanagement.css";
import Hotel_Mgmt_purpose from "./images/Hotel-Mgmt-purpose.webp";
import Hotel_Management_System_1 from "./images/Hotel-Management-System-1.svg";
import Benefit_HotelMS from "./images/Benefit-HotelMS.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Hotelmanagement() {
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
                <p className="product_head">HOTEL MANAGEMENT</p>
                <p className="product_headtext">Dedicated Solution For All Your Operational And Financial Needs!</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">HOTEL MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Grow your business with a dedicated software solution that will help your hotel to efficiently and effectively manage diverse aspects of operations enhancing overall productivity.</p>
                        <p className="product_purpose_text">Our Hotel Management System (HMS) offers reporting and analytics features allowing you to generate tailor-made reports on metrics such as occupancy rates, revenue, guest satisfaction scores, and more. Utilize these insights to assess key performance indicators, recognize emerging trends, and make informed, data-driven decisions to enhance operations and boost revenue.</p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={Hotel_Mgmt_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Hotel_Management_System_1} alt="" />
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
                                <p className="product_card_heading">Handles Operations</p>
                                <p className="product_card_text">Streamline front desk activities with a user-friendly interface. Handle guest inquiries, bookings, and registrations efficiently.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Financial Management</p>
                                <p className="product_card_text">Generate invoices for room charges, additional services, and POS transactions. Handle payment processing and keep track of financial transactions.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Multiple Property Support</p>
                                <p className="product_card_text">Capability to manage multiple hotel properties from a centralized platform. Consistent data and operations across different locations.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Inventory Management</p>
                                <p className="product_card_text">Centralized control over hotel inventory, including room amenities and consumables. Alerts for low stock levels and automated reordering.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Security And Access Control</p>
                                <p className="product_card_text">Role-based access control to ensure data security.Integration with security systems for monitoring and control.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Employee Management</p>
                                <p className="product_card_text">HR modules for managing staff schedules, payroll, and performance. Training and development tracking for employee growth.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Benefit_HotelMS} alt="" />
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
        </section >
    )
}
export default Hotelmanagement;