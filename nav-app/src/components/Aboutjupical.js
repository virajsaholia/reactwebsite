import React, { useState } from "react";
import axios from "axios";
import "./Aboutjupical.css";
import ourmission from "./images/ourmission.webp";
import ourvision from "./images/ourvision.webp";
import exceed_digital_solutions from "./images/exceed-digital-solutions.webp";
import logo_procom from "./images/logo-procom1_1___1_-removebg-preview.webp";
import Taffard_Fabric from "./images/Taffard-Fabric.webp";
import amcit from "./images/amcit.webp";
import tantra from "./images/tantra.svg";
import Gloo_logo from "./images/Gloo-logo.webp";
import mit_mut from "./images/mit-mut.webp";
import bz_capital_sas from "./images/BZ-CAPITAL-SAS.webp";
import unam from "./images/unam.svg";
import jjihs from "./images/jjihs.webp";
import Ranks_Guest_House from "./images/Ranks-Guest-House.webp";
import Certified_experts from "./images/Certified-experts-1.webp";
import Extensive_experience from "./images/Extensive-experience-2.webp";
import Integerity from "./images/Integerity.webp";
import End_to_end from "./images/End-to-end.webp";
import Quality_assurance from "./images/Quality-assurance.webp";
import Cost_effective from "./images/Cost-effective-1.webp";
import Systematic_approch from "./images/Systematic-approch.webp";
import Strong_ethics from "./images/Strong-ethics.webp";
import cover_value_image from "./images/cover-value-image.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Aboutjupical() {
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
        <section className="about_jupical">
            <Container className="head_about">
                <p className="ab_jupical_heading">ABOUT JUPICAL</p>
                <p className="ab_jupical_subheading">Empower Today, Shape Tomorrow: Your Journey To Success Rises With Jupical</p>
                <p className="ab_jupical_headtext">Founded in 2018, Jupical.io has a wealth of experience in implementing Odoo ERP and a team of highly skilled professionals, we have successfully assisted businesses spanning diverse industries in attaining their objectives and fully optimizing the potential of the platform. We take pride in our adeptness at delivering personalized solutions crafted to address your distinctive business requirements. Our unwavering commitment to quality, innovation, and excellence underscores our dedication to ensuring your success in leveraging Odoo ERP.</p>
            </Container>
            <Container className="whyus_about">
                <p className="head_whyus_about">WHY US?</p>
                <div className="whyus_head">
                    <Row className="card_head">
                        <Col lg={6}>
                            <p className="om_head">Our Mission</p>
                        </Col>
                        <Col lg={6}>
                            <p className="ov_head">Our Vision</p>
                        </Col>
                    </Row>
                    <Row className="whyus_card_style">
                        <Col sm={6} className="whyus_card_design">
                            <div className="whyus_card">
                                <img className="ourmission" src={ourmission} alt="" />
                                <p className="whyus_heading">Empowering Businesses Through Seamless Integration And Optimization</p>
                                <p className="whyus_text">At Jupical, we are dedicated to empowering businesses through the seamless integration of advanced ERP solutions. Our commitment lies in assisting clients to attain operational excellence, boost productivity, and unleash their full potential by implementing personalized ERP strategies.</p>
                            </div>
                        </Col>
                        <Col sm={6} className="whyus_card_design">
                            <div className="whyus_card">
                                <img className="ourvision" src={ourvision} alt="" />
                                <p className="whyus_heading">Transforming Businesses Into Agile, Data-Driven
                                    Enterprises</p>
                                <p className="whyus_text">At Jupical, we imagine a future where businesses function with unparalleled efficiency and agility. Our vision is to emerge as a leading catalyst in reshaping organizations into data-driven enterprises, ensuring their success in an ever-evolving business landscape.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className="success_story">
                <div className="sucess_story_head">
                    <p className="sucess_story_heading">Our Success Stories</p>
                </div>
                <div className="all_companies">
                    <Row className="first_four_company">
                        <Col lg={3}>
                            <img className="exceed_digital_solutions" src={exceed_digital_solutions} alt="" />
                        </Col>
                        <Col lg={3}>
                            <img className="logo_procom" src={logo_procom} alt="" />
                        </Col>
                        <Col lg={3}>
                            <img className="Taffard_Fabric" src={Taffard_Fabric} alt="" />
                        </Col>
                        <Col lg={3}>
                            <img className="amcit" src={amcit} alt="" />
                        </Col>
                    </Row>
                    <Row className="second_three_company">
                        <Col lg={4}>
                            <img className="tantra" src={tantra} alt="" />
                        </Col>
                        <Col lg={4}>
                            <img className="Gloo_logo" src={Gloo_logo} alt="" />
                        </Col>
                        <Col lg={4}>
                            <img className="mit_mut" src={mit_mut} alt="" />
                        </Col>
                    </Row>
                    <Row className="third_four_company">
                        <Col lg={3}>
                            <img className="BZ_CAPITAL_SAS" src={bz_capital_sas} alt="" />
                        </Col>
                        <Col lg={3}>
                            <img className="unam" src={unam} alt="" />
                        </Col>
                        <Col lg={3}>
                            <img className="jjihs" src={jjihs} alt="" />
                        </Col>
                        <Col lg={3}>
                            <img className="Ranks_Guest_House" src={Ranks_Guest_House} alt="" />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className="core_values">
                <div className="core_value_head">
                    <p className="core_value_heading">Core Values</p>
                </div>
                <Row className="core_value_card_style">
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Certified_experts" src={Certified_experts} alt="" />
                            </div>
                            <p className="core_value_card_heading">Certified Experts</p>
                            <p className="core_value_card_text">Rest assured that your business data and operations are in safe hands, with our state-of-the-art security measures and protocols designed to protect your business from cyber threats and vulnerabilities.</p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Extensive_experience" src={Extensive_experience} alt="" />
                            </div>
                            <p className="core_value_card_heading">Extensive Experience</p>
                            <p className="core_value_card_text">Benefit from our years of experience working with businesses across various industries, as we apply our deep understanding of Odoo ERP to help you achieve your goals and drive your </p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Integerity" src={Integerity} alt="" />
                            </div>
                            <p className="core_value_card_heading">Integerity</p>
                            <p className="core_value_card_text">Trust in our unwavering commitment to integrity, honesty, and transparency, as we work together to achieve your business objectives with the utmost professionalism and ethical standards.</p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="End_to_end" src={End_to_end} alt="" />
                            </div>
                            <p className="core_value_card_heading">End To End</p>
                            <p className="core_value_card_text">End-to-End Excellence reflects in our meticulous project management, thorough customization, and a relentless pursuit of solutions that address your unique challenges. growth forward with confidence </p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Quality_assurance" src={Quality_assurance} alt="" />
                            </div>
                            <p className="core_value_card_heading">Quality Assurance</p>
                            <p className="core_value_card_text">Quality is the cornerstone of our commitment to you. At Jupical, our core value of Quality Assurance underscores our pledge to deliver products and services that meet and exceed industry standards.</p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Cost_effective" src={Cost_effective} alt="" />
                            </div>
                            <p className="core_value_card_heading">Cost Effective</p>
                            <p className="core_value_card_text">Maximize your ROI with our cost-effective solutions, providing exceptional value for your investmen without compromising on quality or performance. exceeds your expectations.</p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Systematic_approch" src={Systematic_approch} alt="" />
                            </div>
                            <p className="core_value_card_heading">Systematic Approch</p>
                            <p className="core_value_card_text">Experience our customer-focused approach, as we work diligently to understand your unique business requirements, provide personalized solutions, and deliver exceptional customer service that </p>
                        </div>
                    </Col>
                    <Col sm={3} className="core_value_card_design">
                        <div className="core_value_card">
                            <div className="core_value_image">
                                <img className="Strong_ethics" src={Strong_ethics} alt="" />
                            </div>
                            <p className="core_value_card_heading">Strong Ethics</p>
                            <p className="core_value_card_text">At the heart of our company is a strong ethical code that underpins everything we do, ensuring that we always operate with honesty, fairness, and transparency in all our business dealings.​</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="providing_solution">
                <Row className="solution_image">
                    <Col lg={4} className="heading_solution">
                        <p className="providing_solution_heading">Providing Solutions By Leveraging A Wide Range Of Technologies.</p>
                    </Col>
                    <Col lg={6}>
                        <img className="cover_value_image" src={cover_value_image} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="grow_together_about">
                <Row>
                    <Col lg={6}>
                        <p className="grow_together_cover">FREE CONSULTATION</p>
                        <p className="grow_together_head">Schedule Your Free Consultation Today!</p>
                        <Row className="address">
                            <Col lg={1} className="add_symbol">
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
                            <Col lg={6} className="add_points">
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
                    <Col lg={6}>
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
                                    <Col lg={6} >
                                        <input className="home_contact_form_text"
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Col>
                                    <Col lg={6} >
                                        <input  className="home_contact_form_email"
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Col>
                                    <Col lg={6} >
                                        <input  className="home_contact_form_phone"
                                            type="Number"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Col>
                                    <Col lg={6} >
                                        <input  className="home_contact_form_subject"
                                            type="text"
                                            placeholder="Subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        />
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col lg={12} >
                                        <textarea  className="home_contact_form_textarea"
                                            placeholder="Message"
                                            cols={30}
                                            rows={7}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </Col>
                                    </Row>
                                    <button className="about_sendbtn" >Send Message</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Aboutjupical;