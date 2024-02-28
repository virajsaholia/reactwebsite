import React from "react";
import './Footer.css';
import { Container, Row, Col } from 'react-grid-system';
import logoe from "./images/Jupical_f.webp"
import flag1 from "./images/flag1.webp"
import flag2 from "./images/flag2.webp"
import flag3 from "./images/flag3.webp"
import flag4 from "./images/flag4.webp"
import flag5 from "./images/flag5.webp"
import flag6 from "./images/flag6.webp"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import youtube from "./images/youtube.png"

function Footer() {
    return (
        <footer>
            <div className="img_container" >
                <img className="footer_logo" src={logoe} alt="" />
                <p>Jupical is officially registered in 2018. Trusted Excellence in IT & ERP Solutions for more then Decade,and <br />renowned for cultivating enduring client relationships, ensuring long-term satisfaction.</p>
            </div>
            <div className="flag_gallery" >
                <img className="flags" src={flag1} alt="" />
                <img className="flags" src={flag2} alt="" />
                <img className="flags" src={flag3} alt="" />
                <img className="flags" src={flag4} alt="" />
                <img className="flags" src={flag5} alt="" />
                <img className="flags" src={flag6} alt="" />
            </div>
            <hr />
            <Container>
                <Row>
                    <Col sm={6} className="Jupical_copyright_text" >
                        <div className="copyright_text" >
                            Copyright ©
                            <strong>Jupical Technologies Pvt. Ltd.</strong>
                        </div>
                    </Col>
                    <Col sm={6} className="social_content_container" >
                        <div className="social_content" >
                            <a href="https://www.linkedin.com/company/jupicaltech/mycompany/" target="_blank" rel="noopener noreferrer">
                                <img className="soical_imgs" src={linkedin} alt="" srcset="" />
                            </a>
                            <a href="https://instagram.com/jupical/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img className="soical_imgs" src={instagram} alt="" srcset="" />
                            </a>
                            <a href="https://www.facebook.com/Jupical/" target="_blank" rel="noopener noreferrer">
                                <img className="soical_imgs" src={facebook} alt="" srcset="" />
                            </a>
                            <a href="https://twitter.com/jupical1?lang=en" target="_blank" rel="noopener noreferrer">
                                <img className="soical_imgs" src={twitter} alt="" srcset="" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC2x2iEL-oW3LrwmB3OO_3hQ" target="_blank" rel="noopener noreferrer">
                                <img className="soical_imgs" src={youtube} alt="" srcset="" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;