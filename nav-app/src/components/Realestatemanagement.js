import React from "react";
import "./Realestatemanagement.css";
import reales_purpose from "./images/reales-purpose.webp";
import reales_mgmt from "./images/reales-mgmt.webp";
import Real_Estate_Management_benifit from "./images/Real-Estate-Management-benifit.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Realestatemanagement() {
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
                <p className="product_head">REAL-ESTATE MANAGEMENT</p>
                <p className="product_headtext">Elevate Your Property Sales And Attract More Customers To Grow 2x.</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">REAL ESTATE MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Real Estate ERP (Enterprise Resource Planning) management software is designed to streamline and automate various business processes within the real estate industry.This type of software helps real estate companies manage their operations more efficiently, enhance productivity, and make informed decisions.
                        </p>
                        <p className="product_purpose_text">
                        Facilitate instant updates on property availability, maintain synchronized property details, and facilitate smooth lead generation. Enhance online presence to attract prospective buyers and tenants through seamlessly integrated property websites.Covering everything from property management and CRM to marketing automation, portfolio management, and robust reporting, our solution offers a holistic platform for effective real estate management.
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={reales_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={reales_mgmt} alt="" />
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
                                <p className="product_card_heading">Property Management</p>
                                <p className="product_card_text">The Real Estate ERP system integrates Listing and Portfolio Management for property oversight with Lease and Tenant Management for tracking agreements and rent. This streamlines property management for enhanced efficiency and organization.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">CRM</p>
                                <p className="product_card_text">In the CRM module, the Real Estate ERP system offers Lead Management for capturing leads and Communication Tracking to systematically record interactions, enhancing communication efficiency and improving customer relationship management.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Integration 3P Tools</p>
                                <p className="product_card_text">The Real Estate ERP system seamlessly links with Property Portals for effective listing and marketing, and with Accounting Software for synchronized financial data. These integrations enhance operational efficiency.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Marketing Automation</p>
                                <p className="product_card_text">Automate the generation of leads, monitor marketing activities, and assess campaign effectiveness. Create personalized marketing materials and implement automated email marketing campaigns tailored to specific customer segments.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Project Management</p>
                                <p className="product_card_text">In Project Management, the Real Estate ERP system monitors real-time construction progress, facilitates task assignment, and oversees workflows for efficient project tracking and coordination within the real estate landscape.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Sales And Lease Management</p>
                                <p className="product_card_text">Our Real Estate ERP Solution manages inquiries, coordinates viewings, monitors sales and leases, streamlines financial operations, and ensures efficient revenue management by handling contracts, rent schedules, and payment tracking.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Automatic Funds Distribution</p>
                                <p className="product_card_text"> Automatic transfers to/from a borrower¿s account on a regular, periodic basis</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Collateral Tracking</p>
                                <p className="product_card_text"> Assess and control risks associated with the credit process of each loan portfolio/account</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Compliance Management</p>
                                <p className="product_card_text"> Track and manage non-adherence to policies in a service, product, process, or supplier behavior</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Real_Estate_Management_benifit} alt="" />
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
export default Realestatemanagement;