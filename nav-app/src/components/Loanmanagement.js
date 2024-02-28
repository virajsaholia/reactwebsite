import React from "react";
import "./Loanmanagement.css";
import loan_manage_purpose from "./images/loan_manage_purpose.webp";
import Loan_Management_System from "./images/Loan-Management-System-1-2.svg";
import product_features_Benefit_LMS from "./images/product_features_Benefit-LMS.webp";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Loanmanagement() {
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
                <p className="product_head">LOAN MANAGEMENT</p>
                <p className="product_headtext">your ultimate solution for end-to-end finance loan business.</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_cover">LOAN MANAGEMENT</p>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">Whether it’s planned events like weddings, vacations, or home renovations, or unexpected emergencies such as medical procedures, or personal Loans, bring your finance business hassle-free of paperwork & headache which not only calculates automatic amortization schedule but also calculates your business’s future growth 2x. Our LMS is designed by software developers and lending professionals, boasting years of experience in fintech. Our future-proof technology and long-term partnerships render it simple, fast and cost-effective to expand your services portfolio and client base, allowing your business to scale up or reinvigorate itself effectively at any stage of its life-cycle.
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={loan_manage_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Loan_Management_System} alt="" />
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
                                <p className="product_card_heading">Amortization Schedule</p>
                                <p className="product_card_text">Create a table of loan payments showing dates, amount of principal, amount of interest, and remaining balance</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Payment Collection</p>
                                <p className="product_card_text">Track and manage customer payments that are overdue</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Document Management</p>
                                <p className="product_card_text">Collect, upload, store, and share all documents in a centralized location making it easier for everyone involved to access information.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Accounting</p>
                                <p className="product_card_text"> Built-in accounting or integration with a third party accounting system</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Loan Portfolio Management</p>
                                <p className="product_card_text"> Assess and control risks associated with the credit process of each loan portfolio/account</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Audit Trail</p>
                                <p className="product_card_text"> Track changes and view date/time records xyzxyzxyzxyzxyzyxxyzxyz</p>
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
                        <img className="product_features_Benefit_LMS" src={product_features_Benefit_LMS} alt="" />
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
export default Loanmanagement;