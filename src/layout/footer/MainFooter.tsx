import { getCurrentYear } from '@/utils/dateUtils';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import Logo from '../../../public/assets/images/logo/favicon.svg';
import Image from 'next/image';
interface MainFooterProps {
    children?: ReactNode;
};
const MainFooter = ({ children }: MainFooterProps) => {
    return (
        <>
            {/* -- footer area start -- */}
            <footer className="bd-footer-area fix">
                <div className="bd-footer-area-main-content section-space theme-bg-05">
                    <div className="container">
                        <div className="row gy-30 justify-content-between">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="bd-footer-widget footer-1-col-1">
                                    <div className="bd-footer-widget-content">
                                        <div className="bd-footer-widget-logo">
                                            <Link href="/">
                                                <Image src={Logo} alt="image" priority />
                                            </Link>
                                        </div>
                                        <p className="bd-footer-widget-description">Reliable College </p>
                                        <div className="bd-footer-widget-contact-info">
                                            <div className="bd-footer-widget-contact-item">
                                                <span>Phone:</span>
                                                <Link href="tell:01-4112403">
                                                   01-4112403</Link>
                                            </div>
                                            <div className="bd-footer-widget-contact-item">
                                                <span>Email:</span>
                                                <Link href="mailto:reliableintlcollege.com"> reliableintlcollege.com</Link>
                                            </div>
                                            <div className="bd-footer-widget-contact-item">
                                                <span>Address:</span>
                                                <Link href="#"> Tinkune, Kathmandu, Nepal</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Children content section - This part allows dynamic content to be injected into the footer */}
                            {children}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-sm-12">
                                <div className="bd-footer-widget footer-1-col-4">
                                    <h6 className="bd-footer-widget-title mb-20">Stay Connected</h6>
                                    <div className="bd-footer-from-content mb-20">
                                        <div className="bd-footer-social">
                                            <div className="theme-social social-brand-color">
                                                <ul className="social-icon-list">
                                                    <li><Link className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                                                    </li>
                                                    <li><Link className="twitter" href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                                                    </li>
                                                    <li><Link className="linkedin" href="https://www.linkedin.com/feed/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                                                    </li>
                                                    <li><Link className="instagram" href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                                                    </li>
                                                    <li><Link className="youtube" href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bd-footer-copyright-area pt-25 pb-20">
                    <div className="container">
                        <div className="row gy-10 align-items-center justify-content-lg-between justify-content-center">
                            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8">
                                <div className="bd-footer-copyright text-lg-start text-center">
                                    <p className="underline">© Copyright <span>{getCurrentYear()}</span> | Developed By NYXIS TECH</p>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-7 col-lg-7 col-md-12">
                                <div className="bd-footer-copyright-list">
                                    <ul className="justify-content-lg-end justify-content-center">
                                        <li className="underline"><Link href="/terms-conditions">Terms and Conditions</Link></li>
                                        <li className="underline"><Link href="/privacy-policy">Privacy and Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* -- footer area end -- */}
        </>
    );
};

export default MainFooter;