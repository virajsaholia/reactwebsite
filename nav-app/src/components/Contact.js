import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import Contact_Us_2 from './images/Contact-Us-2.webp';
import location_contact_us from './images/location-contact-us.webp';
import mail_contact_us from './images/mail-contact-us.webp';
import wp_contactus from './images/wp-contactus.webp';
import WhatsApp_QR_code from './images/WhatsApp-QR-code.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Contact() {
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
        <section className="contact_us">
            <Container className="our_contact">
                <Row>
                    <Col lg={6}>
                        <p className="contact_heading">Jupical Technologies</p>
                        <p className="contact_headtext">Let us transform your business together. Reach out to us anytime and we would be happy to solve your queries.</p>
                        <img className="Contact_Us_2" src={Contact_Us_2} alt="" />
                    </Col>
                    <Col lg={6}>
                        <div className="contact_form">
                            <div className="contact_form_head">
                                <p className="contact_form_head">Get In Touch With Us</p>
                            </div>
                            <div className="contact_together_form">
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6} >
                                            <input className="contact_form_name"
                                                type="text"
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Col>
                                        <Col lg={6} >
                                            <input className="contact_form_email"
                                                type="text"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Col>
                                        <Col lg={6} >
                                            <input className="contact_form_phone"
                                                type="Number"
                                                placeholder="Phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Col>
                                        <Col lg={6} >
                                            <input className="contact_form_subject"
                                                type="text"
                                                placeholder="Subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <textarea className="contact_form_textarea"
                                                placeholder="Message"
                                                cols={30}
                                                rows={7}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <button className="send_button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="different_contact">
                <Row className="contact_card_style">
                    <Col lg={4}>
                        <div className="contact_card1">
                            <Row>
                                <Col lg={4}>
                                    <img className="location_contact_us" src={location_contact_us} alt="" />
                                </Col>
                                <Col lg={8}>
                                    <p className="contact_card_heading">Office Address</p>
                                </Col>
                            </Row>
                            <div className="contact_info">808 RK World Tower, 150 Ft. ring Road, Rajkot – 360007 </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="contact_card2">
                            <Row>
                                <Col lg={4}>
                                    <img className="mail_contact_us" src={mail_contact_us} alt="" />
                                </Col>
                                <Col lg={8}>
                                    <p className="contact_card_heading">Mail Us</p>
                                </Col>
                            </Row>
                            <div className="contact_info">hello@jupical.com</div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="contact_card3">
                            <Row>
                                <Col lg={4}>
                                    <img className="wp_contactus" src={wp_contactus} alt="" />
                                </Col>
                                <Col lg={8}>
                                    <p className="contact_card_heading">Contact Now</p>
                                </Col>
                            </Row>

                            <img className="WhatsApp_QR_code" src={WhatsApp_QR_code} alt="" />

                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="globally_serving">
                <div className="globle_serve_head">
                    <p className="globle_serve_heading">WE SERVE GLOBALLY</p>
                </div>
                <div className="indian_area">
                    <div className="indian_area_head">INDIA</div>
                    <Row className="indian_area_card_style">
                        <Col lg={6}>
                            <div className="indian_area_card">
                                <p className="indian_address">
                                    808 RK World Tower, 150 Ft. ring Road,
                                </p>
                                <p className="indian_address_city">Rajkot-360006.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="indian_area_card">
                                <p className="indian_address">
                                    1304, RK World Tower, 150ft Ring Road,
                                </p>
                                <p className="indian_address_city">Rajkot-360006.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className="different_address">
                <div className="all_address_cards">
                    <Row className="address_card_style">
                        <Col sm={4} className="address_card_design">
                            <div className="all_address_card">
                                <p className="all_address_card_heading">NORWAY</p>
                                <p className="all_address_card_text">Sorkedalsveien 6,Oslo</p>
                            </div>
                        </Col>
                        <Col sm={4} className="address_card_design"></Col>
                        <Col sm={4} className="address_card_design">
                            <div className="all_address_card">
                                <p className="all_address_card_heading">SINGAPORE</p>
                                <p className="all_address_card_text">14 Venture Drive 14-02
                                    Vision Exchange
                                    Singapore – 608526</p>
                            </div>
                        </Col>
                        <Col sm={4} className="address_card_design"></Col>
                        <Col sm={4} className="card_design">
                            <div className="all_address_card">
                                <p className="all_address_card_heading">USA</p>
                                <p className="all_address_card_text">33-00 47th Ave.
                                    Long Island City, NY 11101</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="address_card_style">
                        <Col sm={4} className="address_card_design"></Col>
                        <Col sm={4} className="address_card_design">
                            <div className="all_address_card">
                                <p className="all_address_card_heading">MEXICO</p>
                                <p className="all_address_card_text">Av. Marina Nacional, 385, 6-606 Mexico,CDMX, Mexico.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="address_card_design"></Col>
                        <Col sm={4} className="address_card_design">
                            <div className="all_address_card">
                                <p className="all_address_card_heading">JAMAICA</p>
                                <p className="all_address_card_text">22B Old Hope Road Kingston 6 St. Andrew 0000 Jamaica​</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
export default Contact;