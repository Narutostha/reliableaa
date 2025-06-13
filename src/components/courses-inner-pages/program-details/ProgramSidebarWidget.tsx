"use client";

import Link from 'next/link';
import React from 'react';
import programFaqImg from "../../../../public/assets/images/shape/progrum-faq.svg";
import Image from 'next/image';

const ProgramSidebarWidget = () => {
    return (
        <div className="bd-program-sidebar sidebar-right sidebar-sticky">
            <div className="bd-program-sidebar-widget">
                <div className="bd-program-sidebar-faq">
                    <h4 className="title mb-10">Do you have more questions?</h4>
                    <p className="description underline">
                        Read our <Link href="/faq">FAQ</Link> or <Link href="/contact">Contact Us</Link>
                    </p>
                    <div className="thumb">
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={programFaqImg}
                            alt="FAQ illustration"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramSidebarWidget;
