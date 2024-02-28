import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/jupical.webp';
import LM from './images/Loan Management.webp';
import HM from './images/Hotel Management.webp';
import EM from './images/Education Management.webp';
import HeM from './images/Healthcare Management.webp';
import SM from './images/Salon Management.webp';
import GM from './images/Gym Management.webp';
import CM from './images/Construction Management.webp';
import ReM from './images/Real Estate Management.webp';
import RM from './images/Roster Management.webp';
import OP from './images/Other Products.webp';

function Navbar() {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "560px";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };
    return (
        <>
            <section>
                <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
                    <Container className='Container2'>
                        <Row>
                            <Col sm={2}>
                                <Link to='/'>
                                    <img className='logoimg' src={logo} alt='Logo' />
                                </Link>
                            </Col>
                            <Col sm={9} className='navItems'>
                                <ul className='nav-side-menu'>
                                    <li className='nav-items'>
                                        <Link className='nav-links'>
                                            Services <i className='fas fa-chevron-up' />
                                        </Link>
                                        <div className='hidden-content-service'>
                                            <Row>
                                                <Col sm={2} className='dropdown_col' >
                                                    <h4 className='dropdown_head' >Odoo</h4>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >ERP Implementation</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Customization</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Development</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Training</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Support</p>
                                                    </Link>
                                                </Col>
                                                <Col sm={2} className='dropdown_col' >
                                                    <h4 className='dropdown_head' >ERP Next</h4>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >ERP Implementation</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Customization</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Development</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Training</p>
                                                    </Link>
                                                    <Link to='/erpimplementation' className='dropdown_desc' >
                                                        <p >Support</p>
                                                    </Link>
                                                </Col>
                                                <Col sm={2.5} className='dropdown_col' >
                                                    <h4 className='dropdown_head' >Liferay</h4>
                                                    <Link to='/customer-software-development' className='dropdown_desc' >
                                                        <p className='dropdown_desc' >Customer Software Development</p>
                                                    </Link>
                                                </Col>
                                                <Col sm={2} className='dropdown_col' >
                                                    <h4 className='dropdown_head' >Mobile</h4>
                                                    <Link to='/Android-application' className='dropdown_desc' >
                                                        <p className='dropdown_desc' >Android Application</p>
                                                    </Link>
                                                    <Link to='/Android-application' className='dropdown_desc' >
                                                        <p className='dropdown_desc' >IOS Application</p>
                                                    </Link>
                                                </Col>
                                                <Col sm={2} className='dropdown_col' >
                                                    <h4 className='dropdown_head' >Other Services</h4>
                                                    <Link to='/Data-migration' className='dropdown_desc' >
                                                        <p className='dropdown_desc' >Data Migration</p>
                                                    </Link>
                                                    <Link to='/Data-migration' className='dropdown_desc' >
                                                        <p className='dropdown_desc' >Code Migration</p>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className='nav-items' >
                                        <Link className='nav-links'>
                                            Products <i className='fas fa-chevron-up' />
                                        </Link>
                                        <div className='hidden-content-product' >
                                            <Row>
                                                <Col sm={6} className='dropdown_col' >
                                                    <Link to='/Loan-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={LM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Loan Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Hotel-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={HM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Hotel Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Education-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={EM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Educational Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Healthcare-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={HeM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Healthcare Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Salon-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={SM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Salon Management</span>
                                                        </div>
                                                    </Link>
                                                </Col>
                                                <Col sm={6} className='dropdown_col' >
                                                    <Link to='/Gym-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={GM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Gym Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Construction-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={CM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Construction Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Realestate-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={ReM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Real Estate Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Roaster-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={RM} alt="" srcset="" />
                                                            <span className='dropdown_text' >Roster Management</span>
                                                        </div>
                                                    </Link>
                                                    <Link to='/Other-product-management' className='dropdown_desc' >
                                                        <div className='dropdown_desc' >
                                                            <img className='product_img' src={OP} alt="" srcset="" />
                                                            <span className='dropdown_text' >Other Products</span>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            </Row>

                                        </div>
                                    </li>

                                    <li className='nav-items' >
                                        <Link className='nav-links'>
                                            Resource <i className='fas fa-chevron-up' />
                                        </Link>
                                        <div className='hidden-content-resource' >
                                            <Row>
                                                <Col>
                                                    <Link to='/Blog' className='dropdown_desc' >
                                                        <p >Blog</p>
                                                    </Link>
                                                    <Link to='/Case-study' className='dropdown_desc' >
                                                        <p >Case Studies</p>
                                                    </Link>
                                                    <Link to='/certificates' className='dropdown_desc' >
                                                        <p >Certification</p>
                                                    </Link>
                                                    <Link to='/certificates' className='dropdown_desc' >
                                                        <p >Market Place</p>
                                                    </Link>
                                                    <Link to='/Career-and-job-opening' className='dropdown_desc' >
                                                        <p >Careers</p>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className='nav-items' >
                                        <Link className='nav-links'>
                                            About <i className='fas fa-chevron-up' />
                                        </Link>
                                        <div className='hidden-content-about' >
                                            <Row>
                                                <Col>
                                                    <Link to='/About-jupical' className='dropdown_desc' >
                                                        <p >Jupical</p>
                                                    </Link>
                                                    <Link to='/Business-model' className='dropdown_desc' >
                                                        <p >Business Models</p>
                                                    </Link>
                                                    <Link to='/Our-experts' className='dropdown_desc' >
                                                        <p >Our Experts</p>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </li>
                                    <li className='nav-items'>
                                        <Link to='/contact' className='nav-links'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={1}>
                                <div id="mySidenav" className="sidenav">
                                    <div className='closeButton'>
                                        <Link to="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;
                                        </Link>
                                    </div>
                                    <div className='home_menu_content' >
                                        <Link to='/'>
                                            <img className='logoimg' src={logo} alt='Logo' />
                                        </Link>
                                        <p className='home_menu_text' >Contact us about anything related to our company or services. We’ll do our best to get back to you as soon as possible.</p>
                                        <h4 className='home_menu_title' >Information</h4>
                                        <div className='home_menu_contact' >
                                            <p><img src="https://anilkesariya.com/wp-content/uploads/2022/02/white-map-marker.svg" alt="" data-no-retina="" /> 808, RK World Tower, 150ft Ring Road, Rajkot-360006.</p>
                                        </div>

                                        <div className='home_menu_contact' >
                                            <Link to="mailto:hello@jupical.com" className='home_menu_mail' >
                                                <p className='home_menu_mail'><img src="https://anilkesariya.com/wp-content/uploads/2022/02/white-gmail1.svg" alt="" data-no-retina="" />hello@jupical.com</p>
                                            </Link>
                                        </div>
                                        <div className='home_menu_contact' >
                                            <Link to="tel:+91%207405449936">
                                                <p  className='home_menu_mail'><img src="https://anilkesariya.com/wp-content/uploads/2022/02/white-phone.svg" alt="" data-no-retina="" />+91 7405449936</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <span className='home_menu' onClick={openNav}>&#9776;</span>
                            </Col>
                        </Row>
                    </Container>
                </nav>
            </section>
        </>
    );
}

export default Navbar;