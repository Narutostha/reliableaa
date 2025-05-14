import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from "../../../public/assets/images/logo//reliable collag.svg";
import MobileMenu from '../header/component/MainMobileMenu';
import useGlobalContext from '@/hooks/useContexts';

const SidebarMenu = () => {
    const { openSidebar, setOpenSidebar } = useGlobalContext();
    return (
        <>
            {/* -- Offcanvas area start -- */}
            <div className="fix">
                <div className={`bd-offcanvas-area ${openSidebar ? "info-open" : ""}`}>
                    <div className="bd-offcanvas-wrapper">
                        <div className="bd-offcanvas-content">
                            <div className="bd-offcanvas-top d-flex justify-content-between align-items-center mb-30">
                                <div className="bd-offcanvas-logo">
                                    <Link href="/">
                                        <Image style={{width:"100%", height:"auto"}} src={logoImg} alt="logo not found" />
                                    </Link>
                                </div>
                                <div className="bd-offcanvas-close">
                                    <button onClick={() => setOpenSidebar(!openSidebar)} className="bd-offcanvas-close-icon animation--flip">
                                        <span className="bd-offcanvas-m-lines">
                                            <span className="bd-offcanvas-m-line line--1"></span><span
                                                className="bd-offcanvas-m-line line--2"></span><span
                                                    className="bd-offcanvas-m-line line--3"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="bd-offcanvas-search mb-30">
                               
                            </div>
                            <div className="bd-mobile-menu-smaller">
                                <div className="bd-offcanvas-menu mb-30">
                                    <nav>
                                        <MobileMenu/>
                                    </nav>
                                </div>
                            </div>
                            <div className="bd-offcanvas-about d-none d-lg-block mb-30">
                                <h4 className="bd-offcanvas-title-meta">About iStudy</h4>
                                <p>Empowering learners and educators with a comprehensive platform that bridges the gap between
                                    traditional and modern education. iStudy inspires excellence in education and fosters growth for
                                    a brighter future.</p>
                            </div>
                            <div className="bd-offcanvas-contact mb-30">
                                <h4 className="bd-offcanvas-title-meta">Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center gap-10">
                                        <div className="bd-offcanvas-contact-icon">
                                            <Link target="_blank" href="#">
                                                <i className="fal fa-map-marker-alt"></i></Link>
                                        </div>
                                        <div className="bd-offcanvas-contact-text">
                                            <Link target="_blank" href="#">Tinkune, Kathmandu, Nepal </Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center gap-10">
                                        <div className="bd-offcanvas-contact-icon">
                                            <Link href="tel:+1234567890"><i className="far fa-phone"></i></Link>
                                        </div>
                                        <div className="bd-offcanvas-contact-text">
                                            <Link href="tel:01-4112252">01 -4112252</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center gap-10">
                                        <div className="bd-offcanvas-contact-icon">
                                            <Link href="mailto:info@reliablecollege.com"><i className="fal fa-envelope"></i></Link>
                                        </div>
                                        <div className="bd-offcanvas-contact-text">
                                            <Link href="mailto:info@reliablecollege.com">info@reliablecollege.com</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                          
                            <div className="bd-offcanvas-social">
                                <h4 className="bd-offcanvas-title-meta">Follow Us</h4>
                                <div className="theme-social">
                                    <ul className="social-icon-list">
                                        <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setOpenSidebar(false)} className={`bd-offcanvas-overlay ${openSidebar ? "overlay-open" :""}`}></div>
            <div className="bd-offcanvas-overlay-white"></div>
            {/* -- Offcanvas area start --   */}
        </>
    )
}
export default SidebarMenu