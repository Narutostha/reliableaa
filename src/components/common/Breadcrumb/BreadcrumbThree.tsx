
import React from 'react';
import { StaticImageData } from 'next/image';

interface BreadcrumbThreeProps {
    subtitle: string;
    title: string;
    description: string;
    link: string;
    bgImage: StaticImageData;
}

const BreadcrumbThree: React.FC<BreadcrumbThreeProps> = ({ subtitle, title, description, bgImage }) => {
    return (
        <section 
            className="bd-school-breadcrumb-area bd-school-breadcrumb-bg" 
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="bd-school-breadcrumb-wrapper text-center">
                            <span className="bd-school-breadcrumb-subtitle">{subtitle}</span>
                            <h1 className="bd-school-breadcrumb-title white-text mb-15">{title}</h1>
                            <p className="bd-school-breadcrumb-desc">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbThree;
