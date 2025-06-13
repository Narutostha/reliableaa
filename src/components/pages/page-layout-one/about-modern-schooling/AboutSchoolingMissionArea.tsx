import Image from 'next/image';
import React from 'react';
import modernMissionImg from '../../../../../public/assets/images/mission/modern-mission.webp';

const AboutSchoolingMissionArea = () => {
    return (
        <>
            <section className="bd-why-choose-area section-space" id="learnMore">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="bd-section-wrapper section-title-space text-center">
                                <span className="bd-section-subtitle">Our Mission & Vision</span>
                                <h2 className="bd-section-title mb-20">Guiding the Future of Education at <span
                                    className="text-primary">Reliable College</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 align-items-center justify-content-between">
                        <div className="col-xl-5">
                            <div className="bd-mission-vision-thumb">
                                <div className="bd-mission-vision-thumb-mask">
                                    <Image src={modernMissionImg} style={{width: 'auto', height: 'auto'}} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="bd-mission-vision-wrapper mb-20">
                                <h3 className="bd-mission-vision-title">Our Mission</h3>
                                <p className="bd-mission-vision-desc">At <strong>Reliable College</strong>, our mission is to
                                    empower students with the knowledge and skills they need to thrive in a rapidly
                                    changing world. We are committed to fostering a learning environment that
                                    encourages curiosity, innovation, and excellence.</p>
                            </div>
                            <div className="bd-mission-vision-wrapper">
                                <h3 className="bd-mission-vision-title">Our Vision</h3>
                                <p className="bd-mission-vision-desc">To emerge as the most preferred educational group with global recognition from developing competent and socially sensitive leaders committed to excellence.   </p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </section>
        </>
    );
};

export default AboutSchoolingMissionArea;