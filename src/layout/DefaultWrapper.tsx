"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BacktoTop from "@/utils/BacktoTop";
import FooterTwo from "./footer/FooterTwo";
import HeaderOne from "./header/HeaderOne";
import FooterThree from "./footer/FooterThree";
import FooterOne from "./footer/FooterOne";
import FooterFive from "./footer/FooterFive";
import HeaderFive from "./header/HeaderFive";
import KindergartentFooter from "./footer/KindergartentFooter";
import QuranLearningFooter from "./footer/QuranLearningFooter";
import Preloader from "@/components/common/preloader/Preloader";
import WOW from 'wow.js';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathName = usePathname();

  // Load Bootstrap JS only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min")
        .then(() => console.log("Bootstrap loaded"))
        .catch((err) => console.error("Bootstrap failed to load", err));
    }
  }, []);

  // Set the loading state to false after a timeout
  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  // Initialize WOW.js animations on the client
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);

  // Dynamic header and footer rendering based on the path
  const headerMap: Record<string, React.ReactNode> = {
    "/": <HeaderOne />,
    "/university": <HeaderOne />,
    "/online-course": <HeaderOne />,
    "/kindergarten": <HeaderOne />,
    "/quran-learning": <HeaderOne />,
    "/language-academy": <HeaderOne />,
    "/book-store": <HeaderOne />,
    "/apply-online": <HeaderOne />,
  };

  const footerMap: Record<string, React.ReactNode> = {
    "/": <FooterThree />,
    "/online-course": <FooterTwo />,
    "/university": <FooterThree />,
    "/modern-schooling": <FooterOne />,
    "/kindergarten": <KindergartentFooter />,
    "/about-kindergarten": <KindergartentFooter />,
    "/quran-learning": <QuranLearningFooter />,
    "/book-store": <FooterFive />,
  };

  return (
    <>
      <BacktoTop />
      {headerMap[pathName] || <HeaderFive />}
      {isLoading ? <Preloader /> : children}
      {footerMap[pathName] || <FooterTwo />}
    </>
  );
};

export default Wrapper;
