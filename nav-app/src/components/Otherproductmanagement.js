import React from "react";
import "./Otherproductmanagement.css";
import other_product_purpose from "./images/other-product-purpose.webp";
// import Loan_Management_System from "./images/Loan-Management-System-1-2.svg";
import Other_Products_benifit from "./images/Other-Products-benifit.webp";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Otherproductmanagement() {
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
                <p className="product_head">OTHER PRODUCTS</p>
                <p className="product_headtext">Streamline And Optimize The Process Of Managing Your Business Easily.</p>
            </Container>
            <Container className="product_purpose">
                <Row>
                    <Col lg={6}>
                        <p className="product_purpose_head">Purpose Of Using</p>
                        <p className="product_purpose_text">At Jupical, our unwavering dedication is directed towards the provision of services catered specifically to new products and enterprises, with the overarching objective of fostering their prosperity. We specialize in delivering end-to-end cutting-edge solutions, offering comprehensive support to streamline and enhance their business processes. This commitment underscores our proactive approach to facilitating the growth and efficiency of the entities we serve.
                        </p>
                    </Col>
                    <Col lg={6} className="product_manage_purpose_img">
                        <img className="product_manage_purpose" src={other_product_purpose} alt="" />
                    </Col>
                </Row>
            </Container>
            {/* <Container className="product_process">
                <div className="product_process_image">
                    <img className="Loan_Management_System" src={Loan_Management_System} alt="" />
                </div>
            </Container> */}
            <Container className="product_features">
                <div className="product_features_text">
                    <p className="product_features_texthead">We Are Also Committed To Help Following Industries In The Business</p>
                </div>
                <div className="product_features_card_process">
                    <Row className="product_features_card_style">
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">E-Commerce</p>
                                <p className="product_card_text">Ecommerce ERP optimizes operations, integrates inventory, orders, and customer data, enhancing efficiency and adaptability to market changes for improved customer experiences and overall performance.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Sports Club</p>
                                <p className="product_card_text">Sports club ERP streamlines tasks like membership, scheduling, and finances, ensuring efficient management and improved coordination. Real-time insights enable resource optimization, enhancing player experiences and overall organizational performance.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Artists And Museums</p>
                                <p className="product_card_text"> Art and museum ERP streamlines collection, inventory, sales, and exhibit planning, optimizing resources and improving visitor experiences for efficient operations.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Automobile Industry</p>
                                <p className="product_card_text"> Auto industry ERP streamlines production, supply chain, and inventory, enhancing collaboration, order fulfillment, and decision-making with real-time insights. Integrated processes help automakers boost efficiency, cut costs, and stay competitive.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Clothing And Boutiques</p>
                                <p className="product_card_text">Clothing store ERP streamlines inventory, orders, and customer data, optimizing stock, enhancing customer experiences, and ensuring efficient retail operations.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="product_features_card_design">
                            <div className="sub_product_card">
                                <p className="product_card_heading">Non-Profit Organizations</p>
                                <p className="product_card_text"> Non-profit ERP streamlines donor management, finances, and program coordination, enhancing transparency and efficiency with real-time insights for better resource allocation and accountability.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="product_benifit_image">
                        <img className="product_features_Benefit_LMS" src={Other_Products_benifit} alt="" />
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
export default Otherproductmanagement;