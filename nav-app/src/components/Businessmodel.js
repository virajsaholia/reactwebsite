import React from "react";
import "./Businessmodel.css";
import fix_price_model from './images/fix-price-model.webp';
import tandm_model from './images/tandm-model.webp';
import hireteammodel from './images/hireteammodel.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-grid-system';

function Businessmodel() {
    return (
        <section className="business_model">
            <Container className="head_bm">
                <p className="bm_jupical_heading">OUR BUSINESS MODEL</p>
                <p className="bm_jupical_subheading">Let's Shake Hands To Explore Business Together!</p>
            </Container>
            <Container className="models">
                <Row>
                    <Col lg={6}>
                        <div className="fpm_img">
                            <img className="fix_price_model" src={fix_price_model} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="fpm_text">
                            <div className="fpm_textheading">FIXED PRICE MODEL</div>
                            <div className="fpm_subtext">
                                <p className="fpm_subtext_line">Our fixed pricing structure ensures that you know the exact cost of your project upfront, providing budget certainty from the start.</p>
                                <p className="fpm_subtext_line">Say goodbye to budget uncertainties, get understanding of the project scope and associated costs before we commence. No hidden surprises, just clear-cut expectations.</p>
                                <p className="fpm_subtext_line">Our Fixed Price model features predictable payment milestones aligned with project phases, making financial planning straightforward and manageable.</p>
                                <p className="fpm_subtext_line">Time is of the essence, and we respect that. With our Fixed Price model, you get committed timelines for project completion.</p>
                                <p className="fpm_subtext_line">With this model we prioritize efficiency without compromising on the quality of the deliverables.</p>
                                <p className="fpm_subtext_line">Our Fixed Price model enables you to allocate resources efficiently, knowing the costs are locked in.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                    <div className="tandm_text">
                            <div className="fpm_textheading">TIME & MATERIAL MODEL</div>
                            <div className="fpm_subtext">
                                <p className="fpm_subtext_line">With T&M model, you pay for the actual hours invested in your project. No hidden costs, just a straightforward commitment to delivering value for your investment.</p>
                                <p className="fpm_subtext_line">Allowing you to scale resources as needed, guaranteeing that you get the most out of every hour and ensuring unmatched scalability for your project.</p>
                                <p className="fpm_subtext_line">Combo of cost-effectiveness with uncompromised quality. Every hour spent is a direct investment in the success of your project, eliminating unnecessary expenses due to limited required material.</p>
                                <p className="fpm_subtext_line">The key benifit of Staying actively involved mutually, receive regular updates, and make informed decisions as we progress together, ensuring the required output aligns with the evolving project scope.</p>
                                <p className="fpm_subtext_line">Payment based on the job done, easy to make installments with delivery after completion</p>
                                <p className="fpm_subtext_line">Our T&M model allows for quick responses to change as it goes step by step to required goal.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className="tandm_model" src={tandm_model} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <img className="hireteammodel" src={hireteammodel} alt="" />
                    </Col>
                    <Col lg={6}>
                    <div className="hireteammodel_text">
                            <div className="fpm_textheading">HIRE DEDICATED TEAM MODEL​</div>
                            <div className="fpm_subtext">
                                <p className="fpm_subtext_line">With Hire Dedicated Team model, you get exclusive access to a team of skilled professionals devoted to your project. Benefit from specialized expertise aligned with your specific needs.</p>
                                <p className="fpm_subtext_line">With dedicated team model benifit yourself by becoming an extension of your in-house team. Experience collaboration without the barriers.</p>
                                <p className="fpm_subtext_line">Reduce your development cost upto 60% associated with the project</p>
                                <p className="fpm_subtext_line">Explore the compelete agile process system with extensive QA testing before submission to ensure a level up to your quality code.</p>
                                <p className="fpm_subtext_line">Get a chance to choose your own choice of developers from our team of selected level.</p>
                                <p className="fpm_subtext_line">Daily communication and reporting enhanced at your real time updates.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Businessmodel;