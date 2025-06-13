import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../../public/assets/images/logo/logo.jpg';
import CommonHeaderMainMenu from './component/MainMenu';
import useGlobalContext from '@/hooks/useContexts';

const HeaderFive = () => {
  const { scrollDirection, toggleSidebarMenu } = useGlobalContext();

  return (
    <>
      {/* Header area start */}
      <header>
        {/* Top Header Bar */}
        <div className="bd-header-top">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="bd-header-top-left">
                  <ul className="d-flex flex-wrap align-items-center mb-0 list-none p-0 m-0">
                    <li className="me-4">
                      <Link href="tel:+97714112252" className="text-decoration-none">
                        <span className="me-2">
                          <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        (977) 01-4112252
                      </Link>
                    </li>
                    <li className="me-4">
                      <Link href="mailto:reliablecollege@gmail.com" className="text-decoration-none">
                        <span className="me-2">
                          <i className="fa-sharp fa-light fa-envelope"></i>
                        </span>
                        reliablecollege@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-decoration-none">
                        <span className="me-2">
                          <i className="fa-sharp fa-regular fa-location-dot"></i>
                        </span>
                        Tinkune, Kathmandu, Nepal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bd-header-top-right text-end">
                  <div className="bd-header-top-menu">
                    <ul
  className="d-flex justify-content-end align-items-center mb-0 list-none p-0 m-0"
  style={{ listStyleType: 'none' }}
>

                      <li className="me-3">
                        <Link href="/blog" className="text-decoration-none">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link href="/news" className="text-decoration-none">
                          News & Updates
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`bd-header-area header-style-one ${scrollDirection === 'down' ? 'bd-sticky' : ''}`}>
          <div className="container-fluid">
            <div className="bd-header-inner">
              <div className="bd-header-left">
                <div className="bd-header-logo">
                  <Link href="/">
                    <Image
                      src={LogoImg}
                      style={{ width: 'auto', height: '60px', maxWidth: '200px' }}
                      alt="Reliable College Logo"
                      priority
                    />
                  </Link>
                </div>
              </div>

              <div className="bd-header-menu flex-grow-1">
                <nav className="main-menu bd-mobile-menu-active d-none d-xl-block">
                  <CommonHeaderMainMenu />
                </nav>
              </div>

              <div className="bd-header-right">
                <div className="bd-header-actions d-flex align-items-center">
                  <div className="bd-header-sign-btn me-3">
                    <Link className="bd-btn btn-outline-border-primary h-40px px-4" href="/contact-us">
                      <i className="fa-solid fa-graduation-cap me-2"></i>
                      Apply Now
                    </Link>
                  </div>

                  <div className="bd-header-hamburger d-xl-none">
                    <div className="sidebar-toggle">
                      <Link
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSidebarMenu();
                        }}
                        href="#"
                        className="bar-icon"
                        aria-label="Toggle Menu"
                      >
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
        </div>
      </header>
    </>
  );
};

export default HeaderFive;
