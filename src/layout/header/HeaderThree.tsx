"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import headerLogo from "../../../public/assets/images/logo/logo.svg";
import Image from 'next/image';
import UniversityHeaderMenu from './component/UniversityHeaderMenu';
import UniversitySidebar from '../sidebar/UniversitySidebar';
import useGlobalContext from '@/hooks/useContexts';

const HeaderThree = () => {
    const { toggleSidebarMenu, scrollDirection } = useGlobalContext();
    const [openCart, setOpenCart] = useState(false);
    const [openSearchField, setOpenSearchField] = useState(false);
    
    const handleSearchToggle = () => {
        setOpenSearchField(!openSearchField);
    };

    return (
        <>
            <header>
                <div className="header-style-two">
                    <div className="bd-header-top style-two">
                        <div className="bd-header-top-left">
                            <ul>
                                <li><Link href="tel:+8884467880"><span><i className="fa-solid fa-phone-volume"></i></span>(977)
                                    01-4112252</Link></li>
                                <li><Link href="mailto:reliablecollege@gmail.com"><span><i
                                    className="fa-sharp fa-light fa-envelope"></i></span>reliablecollege@gmail.com</Link></li>
                            </ul>
                        </div>
                        <div className="bd-header-top-right text-md-end">
                            <Link href="#"><span><i className="fa-sharp fa-regular fa-location-dot"></i></span>Tinkune, Kathmandu</Link>
                        </div>
                    </div>
                    <div className={`bd-header-area ${scrollDirection === "down" ? "bd-sticky" : ""}`} >
                        <div className="bd-header-inner">
                            <div className="bd-header-left">
                                <div className="bd-header-logo logo-white">
                                    <Link href="/"><Image src={headerLogo} style={{ width: "auto", height: "auto" }} priority alt="logo" /></Link>
                                </div>
                                <div className="bd-header-logo logo-black">
                                    <Link href="/"><Image src={headerLogo} style={{ width: "auto", height: "auto" }} priority alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="bd-header-menu">
                                <nav className="main-menu bd-mobile-menu-active d-none d-xl-block">
                                    <UniversityHeaderMenu />
                                </nav>
                            </div>
                            <div className="bd-header-right">
                                
                                <div className="bd-header-sign-btn">
                                   
                                    <Link className="bd-btn btn-outline-border-primary h-40px" href="/apply-online">Apply</Link>
                                </div>
                                <div className="bd-header-hamburger">
                                    <div className="sidebar-toggle">
                                        <Link onClick={toggleSidebarMenu} className="bar-icon" href="#">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sidebar cart end */}
            {/* sidebar mobile menu */}
            <UniversitySidebar />
        </>
    );
};

export default HeaderThree;