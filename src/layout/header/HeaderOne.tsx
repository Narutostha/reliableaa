
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../../public/assets/images/logo/reliable collag.svg';
import SidebarCart from '@/components/common/sidebar-cart/SidebarCart';

import SidebarMenu from '../sidebar/SidebarMenu';
import CommonHeaderMainMenu from './component/MainMenu';
import useGlobalContext from '@/hooks/useContexts';
import useCart from '@/hooks/useCart';

const HeaderFive = () => {
    const { scrollDirection, toggleSidebarMenu } = useGlobalContext();
    const [openCart, setOpenCart] = useState(false)
    //cart quantity
    const { getCartProductQuantity } = useCart();
    const TotalCartQuantity = getCartProductQuantity();
    //search functionality
    const [openSearchField, setOpenSearchField] = useState<boolean>(false);
    const handleSearchToggle = () => {
        setOpenSearchField(!openSearchField);
    };

    return (
        <>
            {/* -- Header area start -- */}
            <header>
                <div className="bd-header-top">
                    <div className="bd-header-top-left">
                        <ul>
                            <li><Link href="tel:+8884467880"><span><i className="fa-solid fa-phone-volume"></i></span>(977) 01-4112252</Link></li>
                            <li><Link href="mailto:reliablecollege@gmail.com"><span><i
                                className="fa-sharp fa-light fa-envelope"></i></span>reliablecollege@gmail.com</Link></li>
                        </ul>
                    </div>
                    <div className="bd-header-top-right text-md-end">
                        <Link href="#"><span><i className="fa-sharp fa-regular fa-location-dot"></i></span>Tinkune, Kathmandu , Nepal</Link>
                    </div>
                </div>
                <div className={`bd-header-area header-style-one ${scrollDirection === "down" ? "bd-sticky" : ""}`}>
                    <div className="bd-header-inner">
                        <div className="bd-header-left">
                            <div className="bd-header-logo">
                                <Link href="/"><Image src={LogoImg} style={{ width: "100%", height: "auto" }} alt="logo" /></Link>
                            </div>
                            <div className="bd-header-category d-none d-lg-block">
                           
                            </div>
                        </div>
                        <div className="bd-header-menu">
                            <nav className="main-menu bd-mobile-menu-active d-none d-xl-block">
                                <CommonHeaderMainMenu />
                            </nav>
                        </div>
                        <div className="bd-header-right">
                             <div className="bd-header-sign-btn">
                                   
                                    <Link className="bd-btn btn-outline-border-primary h-40px" href="/apply-online">Apply</Link>
                                </div>
                            {/* <div className="bd-header-sign-btn">
                                <Link className="bd-btn btn-outline-primary h-40px" href="/sign-in">Login</Link>
                                <Link className="bd-btn btn-outline-border-primary h-40px" href="/sign-up">Register</Link>
                            </div> */}
                            <div className="bd-header-hamburger">
                                <div className="sidebar-toggle">
                                    <Link onClick={toggleSidebarMenu} href="#" className="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* -- Header area end -- */}
            {/* header search input */}
            
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
            {/* sidebar cart end */}
            {/* sidebar mobile menu */}
            <SidebarMenu />
        </>
    );
};

export default HeaderFive;