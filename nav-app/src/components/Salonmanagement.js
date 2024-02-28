import React from "react";
import "./Salonmanagement.css";
import Salon_purpose from "./images/Salon-purpose.webp";
import Salon_Management_System from "./images/Salon-Management-System-1.svg";
import Benefit_Salon from "./images/Benefit-Salon.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Salonmanagement() {
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
                <p className="product_head">SALON MANAGEMENT</p>
                <p className="product_headtext">Elevate Customer Services And Propel Business Expansion!</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">SALON MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Boost customer engagement and loyalty using our Salon ERP. Execute focused marketing campaigns to draw in new customers and highlight special promotions. Establish loyalty programs to acknowledge repeat customers and stimulate referrals. Monitor the impact of marketing efforts and gauge customer satisfaction. Our salon ERP empowers salon proprietors to optimize operations, elevate customer experiences, and propel business expansion. Covering everything from appointment scheduling and inventory management to customer relationship management and extensive reporting, our solution offers a unified platform for effective salon management.  
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={Salon_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Salon_Management_System} alt="" />
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
                                <p className="product_card_heading">Appointment Scheduling</p>
                                <p className="product_card_text">Improve appointment scheduling efficiency with our solution. Monitor salon bookings, stylist availability, and treatment room usage. Enable online bookings with automated reminders, allowing easy client management. Optimize staff scheduling for efficient resource allocation.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Customer Management</p>
                                <p className="product_card_text">Strengthen customer connections with our ERP solution.Centralized customer data, including profiles, appointment histories, and preferences. Provide personalized recommendations, tailor services, and manage loyalty programs for exceptional customer service.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">POS Point Of Sale Integration</p>
                                <p className="product_card_text">Effortlessly link our  ERP with the Point of Sale module for streamlined billing and sales control. Conduct transactions, oversee product sales, and monitor inventory in real-time. Simplify checkouts, accept diverse payment methods, and generate precise invoices.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Inventory Management</p>
                                <p className="product_card_text">Effectively oversee salon inventory, monitor and regulate stock levels for hair products, beauty supplies, and salon equipment. Implement automated reordering based on set stock thresholds. Streamline purchase orders, deliveries, and stock transfers for efficient inventory management.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Staff Management</p>
                                <p className="product_card_text">Efficiently handle staff management by organizing schedules, monitor attendance, and track performance. Assign services and appointments based on staff expertise, while streamlining communication for effective collaboration among salon staff.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">lService And Pricing</p>
                                <p className="product_card_text">Organize service menus and prices seamlessly that define services, descriptions, and prices, with easy updates to adapt to trends. Guarantee precise and consistent pricing for all customer interactions.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Benefit_Salon} alt="" />
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
export default Salonmanagement;  