import React from 'react';
import BreadcrumbThree from '@/components/common/Breadcrumb/BreadcrumbThree';
import SchoolingWhyChooseAreaCommon from '@/components/common/modern-schooling/SchoolingWhyChooseAreaCommon';
import ModernSchollingTestimonial from '@/components/sliders/testimonial/ModernSchollingTestimonial';
import bgImg from '../../../../../public/assets/images/about/about-modern-schooling.webp';
import AboutSchoolingMissionArea from './AboutSchoolingMissionArea';
import AboutSchoolingCoreValueArea from './AboutSchoolingCoreValueArea';
import AboutCtaArea from '@/components/common/about-cta/AboutCtaArea';

const AboutModernSchoolingMain = () => {
    return (
        <>
            <BreadcrumbThree
                subtitle={'About Reliable College'}
                title={'Empowering Minds, Shaping Futures'}
                description={'Our mission is to provide a modern, high-quality education to foster innovation and growth.'}
                link={'#'}
                bgImage={bgImg}
            />
            <AboutSchoolingMissionArea />
            <AboutSchoolingCoreValueArea />
            
            <ModernSchollingTestimonial themeBackground={''}/>
            <section className="bd-why-choose-area section-space-bottom fix">
                <SchoolingWhyChooseAreaCommon />
            </section>
            <AboutCtaArea/>
        </>
    );
};

export default AboutModernSchoolingMain;