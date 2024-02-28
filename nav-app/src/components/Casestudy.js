import React, { useEffect } from "react";
import Slider from "react-slick";
import './Casestudy.css';
import { Container, Row, Col } from 'react-grid-system';
import case_study_img1 from './images/case_study_img1.webp';
import case_study_img2 from './images/case_study_img2.webp';
import case_study_img3 from './images/case_study_img3.webp';
import case_study_img4 from './images/case_study_img4.webp';
import case_study_img5 from './images/case_study_img5.webp';
import case_study_img6 from './images/case_study_img6.webp';
import case_study_img7 from './images/case_study_img7.webp';
import case_study_img8 from './images/case_study_img8.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Casestudy() {
    useEffect(() => {
        filterSelection("ERP Applications");

        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }

    }, []);

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c === "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };  
    return (
        <section>
            <Container className="case_study_heading">
                <p className="casestudy_head">CASE-STUDIES</p>
                <p className="casestudy_headtext">Let's Deep Dive Into Some Of Our Best Works In Industry!</p>
            </Container>
            <Container className="case_study_content" >
                <div className="case_study_filter" id="myBtnContainer">
                    <button className="btn" onClick={() => filterSelection('ERP Applications')}>ERP Applications</button>
                    <button className="btn" onClick={() => filterSelection(' Web Applications')}>Web Applications</button>
                    <button className="btn" onClick={() => filterSelection('Tools')}>Tools</button>
                </div>
                <div className="container">
                    <div className="filterDiv ERP Applications show">
                        <Slider {...sliderSettings}>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img1} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >E-Finance Loan ERP for Malaysian semi-government</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry : E-Finance</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location : Malaysia</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            In Malaysia, a finance company affiliated with the semi-government sought to extend its reach and empower local businesses through accessible loans. However, the company’s existing methods, burdened by manual calculations and paper-based record-keeping, were hindering their ability to serve their community effectively.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img2} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >
                                            Hotel Management ERP In Botswana</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry : HMS</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location : Botswana</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            With the growing rise in the Hotel industry, the operations are efficiently increased like banquet, Room booking and reservation, Hotel restaurant service, laundries, customer service and much more. This made, so hectic schedule of every day in Ranks Guest House, the beautiful hotel in Botswana.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img3} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >Education Managemnet System Live In Laos</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry : Education</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location : Laos</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            A very famous IT industry from Laos implemented Education ERP for a non govt firm through which they contacted Jupical for ready ERP solution for Education Management.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img4} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >ERP For Diamond Industry</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry : Diamond</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location : Singapore</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            One of the most prestigious company in Singapore dealing with Diamond business required an ERP so that they can just take care of prestigious clients, The client required a highly secure system with virtual inventory management, accounting integration, website functionality, and seamless vendor mapping. Jupical delivered a solution utilizing Python Odoo, addressing all the client's specific needs and significantly streamlining their business operations.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img5} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >E-Finance ERP For Automobile Loan Provider In Columbia</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry : Finance</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location : Columbia</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            One of Columbia's foremost companies operates in the automotive sector, offering loans to clients for their motorcycles through manual processes. As the business experienced growth, the demand for a robust system became apparent, encompassing features such as, integrated accounting, loan automation, auto generate invoices, charge auto penalties for due and the ability to maintain portfolios for multiple companies.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img5} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >Document Management System Malaysian Finance Board</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry : Finance</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location : Malaysia</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            One of the great international standard-setting organisation that promotes and enhances the soundness and stability of the Islamic financial services industry by issuing global prudential standards and guiding principles for the industry, broadly defined to include banking, capital markets and insurance sectors were approaching a single screen solution to maintain their document management for the pre-approvals of loan and post closing loans which includes each minor government related data and all those manual process applied in loan,with credit score integration and heirarchy of the incharge jury in loan process.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </div>
                    <div className="filterDiv Web Applications">
                        <Slider {...sliderSettings}>
                            <div>
                                <Row>
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img6} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >E-Commerce Fabrics Online-Store</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry :  E- Commerce</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location :  United States</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            In the evolving landscape of the clothing and fabric industry, the strategic implementation of an eCommerce online store has become pivotal for business growth. Our client acknowledged this imperative and identified a more comprehensive requirement – to establish connections with suppliers, customers, and an online store while simplifying the complexities of inventory management, returns, and revenue tracking.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img7} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >Hardware Store In Cyprus</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fas fa-industry"></i>
                                                <span>Industry :  E- Commerce</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fas fa-location-arrow"></i><span class="case_loc">Location :  Cyprus</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            Imagine an e-commerce store where customers can effortlessly browse a user-friendly interface, instantly seeing a product's availability and recent view history. Imagine the confidence they feel when they see a warranty clearly displayed, knowing their investments are protected. Ideate the competitive edge they gain when public users no longer have access to confidential wholesale prices.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </div>
                    <div className="filterDiv Tools">
                    <Slider {...sliderSettings}>
                            <div>
                                <Row  >
                                    <Col sm={6} className="case_study_col1">
                                        <img className='case_study_img' src={case_study_img8} alt="ClientImg" />
                                    </Col>
                                    <Col sm={6} className="case_study_col2">
                                        <h5 className="case_study_sliderhead" >Odoo Debug Tidy</h5>
                                        <ul className="case_study_ul" >
                                            <li className="case_study_li" >
                                                <i aria-hidden="true" class="fab fa-chrome"></i>
                                                <span>Chrome Extension</span>
                                            </li>
                                            <li><i aria-hidden="true" class="fab fa-connectdevelop"></i><span class="case_loc">Developer Tool</span></li>
                                        </ul>
                                        <p className="case_study_para" >
                                            In the evolving landscape of the clothing and fabric industry, the strategic implementation of an eCommerce online store has become pivotal for business growth. Our client acknowledged this imperative and identified a more comprehensive requirement – to establish connections with suppliers, customers, and an online store while simplifying the complexities of inventory management, returns, and revenue tracking.
                                        </p>
                                        <button className='AboutBtn' >Know More </button>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Casestudy;