import React from "react";
import "./Constructionmanagement.css";
import construction_purpose from "./images/construction-purpose.webp";
import Construction_Management_System from "./images/Construction-Management-System-1.svg";
import Benefit_Construction from "./images/Benefit-Construction-1.svg";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Constructionmanagement() {
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
                <p className="product_head">CONSTRUCTION MANAGEMENT</p>
                <p className="product_headtext">Build Your Business Expansion With Our Tailored Solution To Meet Your Requirements</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">CONSTRUCTION MANAGEMENT SYSTEM</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Optimize equipment maintenance processes effectively to schedule and monitor equipment maintenance tasks to maximize performance and reduce downtime. Maintain detailed maintenance records, monitor expenses, and adhere to safety regulations.
                        </p>
                        <p className="product_purpose_text">
                        The CMS solution empowers construction firms to streamline operations, improve project management, and maintain financial control. Everything from project planning and resource allocation to budgeting, subcontractor management, and detailed reporting, our solution offers a holistic platform for efficient construction management.
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={construction_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Construction_Management_System} alt="" />
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
                                <p className="product_card_heading">Project Management</p>
                                <p className="product_card_text">Facilitate project planning and execution using that clearly outline project milestones, tasks, and dependencies. Allocate resources, monitor progress, and oversee project timelines. Foster collaboration among team members and subcontractors and ensuring timely project delivery.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Supply Chain Management</p>
                                <p className="product_card_text">Our Supply Chain Management system integrates procurement, inventory management, and supplier collaboration to optimize processes, minimize lead times, and ensure timely material availability for businesses.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Job Costing</p>
                                <p className="product_card_text">Our construction system ensures real-time project cost tracking, strong budgeting, and effective variance analysis, promoting budget adherence, early identification of potential overruns, and improved financial planning for informed decision-making during the project lifecycle.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Estimation And Bidding</p>
                                <p className="product_card_text">Our construction system ensures precise cost estimation, efficient bid management, and seamless proposal creation for heightened accuracy, streamlined processes, and increased competitiveness in project estimation and bidding.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Human Resources And Payroll</p>
                                <p className="product_card_text">Our system streamlines workforce management with features like employee management, time tracking, and payroll processing. This ensures efficient operations, cost monitoring, and compliance with labor regulations, contributing to effective workforce management.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Mobile Accessibility</p>
                                <p className="product_card_text">Our Mobile Accessibility feature includes on-site data entry, collaboration, and real-time updates through mobile applications. This enhances communication between the field and office, improves accessibility, and facilitates efficient remote project management.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Benefit_Construction} alt="" />
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
export default Constructionmanagement;