import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-grid-system';
import Homeimage1 from "./images/HomePage1st-1.webp";
import dotimage from "./images/dot.webp";
import partners from "./images/partner.svg";
import experience from "./images/experience.webp";
import country from "./images/country.webp";
import project from "./images/project.svg";
import proffessional from "./images/proffessional.svg";
import procom from "./images/procom.webp";
import flyt from "./images/flyt.webp";
import pi from "./images/pi.webp";
import mitmut from "./images/mitmut.webp";
import gloo from "./images/gloo.webp";
import softdev from "./images/softdev.webp";
import erp from "./images/erp.webp";
import webapp from "./images/webapp.webp";
import trainning from "./images/trainning.webp";
import support from "./images/support.webp";
import datamigration from "./images/datamigration.webp";
import about from "./images/about.webp";
import growbusiness from "./images/GrowBusiness.webp";
import clientsaying from "./images/ClientsSaying.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');

        const formData = {
            name,
            email,
            phone,
            subject,
            message,
        };

        try {
            const response = await axios.post("http://localhost:8000/contact", formData);
            console.log("Server Response:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Subject:", subject);
        console.log("Message:", message);
    };
    return (
        <section className="home_start">
            <Container className="container1">
                <Row>
                    <Col lg={6} md={12} sm={12} className="homehead">
                        <div>
                            <p className="home_head1">Customized Solutions For All Enterprises</p>
                            <p className="home_text1">One of the rapidly expanding enterprises in the field of ERP implementations in Gujarat, this company possesses extensive expertise in Odoo, both in terms of functional and technical aspects. It has successfully provided ERP services to more than 40 countries worldwide, with a consistent record of achieving 100% client satisfaction.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="headimg">
                        <img className="Homeimage1" src={Homeimage1} alt="" />
                        <img className="dotimage" src={dotimage} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="home_states_services">
                <div className="statestics">
                    <Row className="states">
                        <Col lg={2} md={4} className="column">
                            <img className="partners" src={partners} alt="" />
                            <Row>
                                <Col lg={6} md={6} className="partner_state_col">
                                    <p className="patner_state">7+</p>
                                </Col>
                                <Col lg={6} md={6} className="partner_text_col">
                                    <p className="partner_text">Tech Partners</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2} md={4}  className="column">
                            <img className="partners" src={experience} alt="" />
                            <Row>
                                <Col lg={6} md={6} className="partner_state_col">
                                    <p className="patner_state">12+</p>
                                </Col>
                                <Col lg={6} md={6} className="partner_text_col">
                                    <p className="partner_text">Years of Experience</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2} md={4} className="column">
                            <img className="partners" src={country} alt="" />
                            <Row>
                                <Col lg={6} md={6} className="partner_state_col">
                                    <p className="patner_state">45+</p>
                                </Col>
                                <Col lg={6} md={6} className="partner_text_col">
                                    <p className="partner_text">Global ountries</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2} md={6} className="column">
                            <img className="partners" src={project} alt="" />
                            <Row>
                                <Col lg={6} md={6} className="partner_state_col">
                                    <p className="patner_state">111+</p>
                                </Col>
                                <Col lg={6} md={6} className="partner_text_col">
                                    <p className="partner_text">Success Project</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2} md={6} className="column">
                            <img className="partners" src={proffessional} alt="" />
                            <Row>
                                <Col lg={6} md={6} className="partner_state_col">
                                    <p className="patner_state">25+</p>
                                </Col>
                                <Col lg={6} md={6} className="partner_text_col">
                                    <p className="partner_text">IT Proffessionals</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="services">
                    <Row>
                        <Col lg={12} className="column">
                            <p className="services_head">OUR SERVICES</p>
                            <p className="services_text">Explore Opprtunities In Our Company For Long-Term Profitability</p>
                        </Col>
                    </Row>
                    <div className="services_cards">
                        <Row className="card_style">
                            <Col lg={4} md={6} sm={4}>
                                <div className="card">
                                    <img className="softdev" src={softdev} alt="" />
                                    <p className="card_heading">Custom Software Development</p>
                                    <p className="card_text">We create custom solutions from scratch to suit your unique business needs, tailoring functionalities for individuals, organizations, and businesses.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={4}>
                                <div className="card">
                                    <img className="erp" src={erp} alt="" />
                                    <p className="card_heading">ERP Implementation</p>
                                    <p className="card_text">Collaborate with us for effective open resource ERP implementation services like Odoo, customized to address your distinct business requirements.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={12} sm={4}>
                                <div className="card">
                                    <img className="webapp" src={webapp} alt="" />
                                    <p className="card_heading">Web Application Development</p>
                                    <p className="card_text">Strengthen your e-commerce business needs through the deployment of resilient and flexible web application development solutions.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={4}>
                                <div className="card">
                                    <img className="trainning" src={trainning} alt="" />
                                    <p className="card_heading">Training</p>
                                    <p className="card_text">Receive comprehensive training from our experienced professionals on the services we offer and the implementation solutions tailored to your business needs.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={4}>
                                <div className="card">
                                    <img className="support" src={support} alt="" />
                                    <p className="card_heading">Support</p>
                                    <p className="card_text">We provide continuous support for swift issue resolution, with regular system updates, security patching, and performance improvements.</p>
                                </div>
                            </Col>
                            <Col lg={4} md={12} sm={4}>
                                <div className="card">
                                    <img className="datamigration" src={datamigration} alt="" />
                                    <p className="card_heading">Data Migration</p>
                                    <p className="card_text">Our team offers seamless migration, handling the business workflow assessment, system configuration and integration with precision.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <Container className="about_section">
                <Row>
                    <Col md={12} lg={6} className="aboutimg">
                        <img className="about" src={about} alt="" />
                    </Col>
                    <Col md={12} lg={6} className="about_text">
                        <p className="about_text_head">ABOUT JUPICAL.IO</p>
                        <p className="about_text_subtext">Jupical is a leading IT company specializing in global ERP services. We have expertise in Odoo, NextERP, Tryton, Zoho, and other open-source solutions. With over a decade of experience, we create custom systems using technologies like Django and Ruby on Rails. Our dedicated team focuses on delivering tailored solutions for each client, guiding them through digital transformation for growth and efficiency. Join us in shaping the future of ERP software services with a commitment to customer satisfaction and success.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="grow_business">
                <Row>
                    <Col lg={6} className="grow_business_text">
                        <p className="grow_business_cover">WE'VE GOT YOU COVERED</p>
                        <p className="grow_business_head">Grow Your Business With Us!</p>
                        <p className="grow_business_text">With the innovative team at Jupical.io, you may succeed in the fast-paced digital market and accomplish your business goals with well-planned and methodical software improvements.
                        </p>
                        <Row className="points">
                            <Col lg={1} md={1} sm={1} className="symbol">
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="circle">
                                    <i className="fas fa-check"></i>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="point_text">
                                <div className="point1">
                                    <p>Odoo Experts</p>
                                </div>
                                <div className="point1">
                                    <p>Customized Software Developers</p>
                                </div>
                                <div className="point1">
                                    <p>Mobile Application Developers</p>
                                </div>
                                <div className="point1">
                                    <p>ERP Consultants</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="grow_business_img">
                        <img className="growbusiness" src={growbusiness} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="happyclient">
                <Row>
                    <Col lg={6} md={12} sm={12} className='ClientImgContainer' >
                        <img className='clientsaying' src={clientsaying} alt="clientSaying" />
                    </Col>
                    <Col lg={6} md={12} sm={12} className='ClientContentContainer ClientContentContainer.reviews'>
                        <span className='happy_client_cover' >Happy Clients</span>
                        <div className='ClientHeadingContainer' >
                            <h2 className='happy_client_head' >What our clients are saying </h2>
                        </div>
                        <Slider {...settings} className='happy_client_text' >
                            <p>""I wholeheartedly recommend the services provided. The level of communication and the profound understanding of our requirements demonstrated by the team have been truly exceptional.""
                                <p className='client_id' >- Rami Harfouch (Manager), Procom Middle East – Dubai</p>
                            </p>
                            <p>""My sincere appreciation for Jupical.io’s exceptional team and ability to deliver the best results. Their unwavering commitment to completing tasks without unnecessary delays is truly commendable!""
                                <p className='client_id' >Alex Marcou (Managing Director), MCIT -Cyprus</p>
                            </p>

                            <p>""The overall service has proven to be commendable. Our application's requirements were meticulously revised and fulfilled to our satisfaction. Jupical.io exhibited an exemplary level of responsiveness, both through email correspondence and diligent follow-up meetings, further underscoring their commitment to providing an exceptional service.""
                                <p className='client_id' >- Lorenzo Zavalla, Owner, Exceed Digital Solutions</p>
                            </p>

                            <p>""We had the privilege of collaborating with Jupical.io on a critical project for the University UNAM in Mexico. Based on our positive experience, we eagerly anticipate the opportunity to engage in future projects and continue our successful partnership with them.""
                                <p className='client_id' >
                                    - Mauricio Rodriguez, CEO, MitMut
                                </p>
                            </p>

                            <p>""Jupical.io consistently provides valuable technical support, excels in issue responsiveness and improvements, and demonstrates a strong commitment to collaboration. We eagerly look forward to continuing our partnership with them.""
                                <p className='ClientName' >
                                    - Jakob Hansen-Tangen, CEO, Flyt Consulting AS
                                </p>
                            </p>
                        </Slider>
                    </Col>
                </Row>
            </Container>
            <Container className="grow_together grow_together_mq">
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <p className="grow_together_cover">FREE CONSULTATION</p>
                        <p className="grow_together_head">Schedule Your Free Consultation Today!</p>
                        <Row className="address">
                            <Col lg={1} md={1} sm={1} className="add_symbol">
                                <div className="location">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="at">
                                    <i className="fas fa-at"></i>
                                </div>
                                <div className="call">
                                    <i className="fas fa-phone"></i>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="add_points">
                                <div className="add_point">
                                    <p>808, RK World Tower, 150ft Ring Road, Rajkot-360006.</p>
                                </div>
                                <div className="add_point">
                                    <p>hello@jupical.com</p>
                                </div>
                                <div className="add_point">
                                    <p>+91 7405449936</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <div className="grow_form">
                            <div className="grow_form_head">
                                <p className="form_head">Let's Grow Together</p>
                            </div>
                            <div className="grow_form_text">
                                <p>Seeking expert guidance on elevating your business and digital presence to the next level? Reach out to us!</p>
                            </div>
                            <div className="grow_together_form">
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={6} md={12} >
                                        <input className="home_contact_form_text"
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Col>
                                    <Col lg={6} md={12} >
                                        <input  className="home_contact_form_email"
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Col>
                                    <Col lg={6} md={12} >
                                        <input  className="home_contact_form_phone"
                                            type="Number"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Col>
                                    <Col lg={6} md={12} >
                                        <input  className="home_contact_form_subject"
                                            type="text"
                                            placeholder="Subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} md={12} >
                                        <textarea  className="home_contact_form_textarea"
                                            placeholder="Message"
                                            cols={30}
                                            rows={7}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <button className='Form_btn' >
                                    Send Message
                                </button>
                            </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Home;