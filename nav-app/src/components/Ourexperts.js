import React from "react";
import "./Ourexperts.css";
import anilkesariya from './images/anilkesariya.webp';
import hareshchavda from './images/hareshchavda.webp';
import balramkhattar from './images/balramkhattar.webp';
import deepakhattar from './images/deepakhattar.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Ourexperts() {
    return (
        <section className="our_experts">
            <Container className="head_oe">
                <p className="oe_jupical_heading">MEET OUR EXPERTS</p>
                <p className="oe_jupical_subheading">Meet Our Maestros Doing Wonders For Jupical!</p>
            </Container>
            <Container className="experts">
                <Row className="expert_card_style">
                    <Col lg={4}></Col>
                    <Col lg={4}>
                        <div className="expert_card">
                            <div className="ak_image">
                                <img className="anilkesariya" src={anilkesariya} alt="" />
                            </div>
                            <div className="card_text">
                                <p className="expert_name"> Anil Kesariya </p>
                                <p className="expert_info">Visionary CEO & Chief Architect</p>
                                <p className="ln_link"><i className="fa-brands fa-linkedin"></i></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
                <Row className="expert_card_style">
                    <Col lg={4}>
                        <div className="expert_card">
                            <div className="ak_image">
                                <img className="hareshchavda" src={hareshchavda} alt="" />
                            </div>
                            <div className="card_text">
                                <p className="expert_name">Haresh Chavda</p>
                                <p className="expert_info">Chief Innovation Orchestrator</p>
                                <p className="ln_link"><i className="fa-brands fa-linkedin"></i></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="expert_card">
                            <div className="ak_image">
                                <img className="balramkhattar" src={balramkhattar} alt="" />
                            </div>
                            <div className="card_text">
                                <p className="expert_name">Balram Khattar</p>
                                <p className="expert_info">Cheif Operating Officer</p>
                                <p className="ln_link"><i className="fa-brands fa-linkedin"></i></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="expert_card">
                            <div className="ak_image">
                                <img className="deepakhattar" src={deepakhattar} alt="" />
                            </div>
                            <div className="card_text">
                                <p className="expert_name">Deepa Khattar</p>
                                <p className="expert_info">Visionary CEO & Chief Architect</p>
                                <p className="ln_link"><i className="fa-brands fa-linkedin"></i></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Ourexperts;