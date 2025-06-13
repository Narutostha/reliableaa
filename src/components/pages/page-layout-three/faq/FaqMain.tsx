import AboutCtaArea from '@/components/common/about-cta/AboutCtaArea';
import Breadcrumbs from '@/components/common/Breadcrumb/Breadcrumbs';
import Image from 'next/image';
import React from 'react';
import faqShape from '../../../../../public/assets/images/faq/faq-shape.png';

const FaqMain = () => {
    return (
        <>
            <Breadcrumbs breadcrumbTitle='Frequently Asked Questions – BBA & MBA' />
            <section className="bd-faq-area section-space-top p-relative">
                <div className="container">
                    <div className="row gy-30">
                        <div className="col-xl-4 col-lg-5">
                            <div className="bd-section-title-wrapper section-title-space">
                                <h2 className="bd-section-title">Need Help? <br className="d-none d-lg-block" /> FAQs for BBA & MBA</h2>
                            </div>
                            <div className="bd-faq-tab-menu">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Admissions</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Academics</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Career & Support</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-7">
                            <div className="bd-faq-tab-content">
                                <div className="tab-content" id="pills-tabContent">
                                    {/* Admissions */}
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                        <div className="accordion" id="accordionAdmissions">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading1">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                        What are the eligibility criteria for BBA and MBA at Reliable College?
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionAdmissions">
                                                    <div className="accordion-body">
                                                        For BBA, students must have completed +2 or equivalent with minimum second division. For MBA, a bachelor’s degree in any discipline with a minimum CGPA of 2.0 or 45% marks is required.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading2">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        Is there an entrance exam for BBA/MBA?
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionAdmissions">
                                                    <div className="accordion-body">
                                                        Yes. Applicants must appear for an entrance test and interview conducted by Reliable College as part of the admission process.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Academics */}
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                        <div className="accordion" id="accordionAcademics">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                        What is the duration and structure of the BBA and MBA programs?
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="heading3" data-bs-parent="#accordionAcademics">
                                                    <div className="accordion-body">
                                                        The BBA program spans 4 years (8 semesters) with 120 credit hours. The MBA program is 2 years (4 semesters) with 66 credit hours including thesis or internship.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        Are internships compulsory?
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionAcademics">
                                                    <div className="accordion-body">
                                                        Yes. Both BBA and MBA programs include mandatory internships to ensure industry exposure and practical learning.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Career & Support */}
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                        <div className="accordion" id="accordionCareer">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                                        What career support does Reliable College offer for BBA/MBA students?
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionCareer">
                                                    <div className="accordion-body">
                                                        We provide placement assistance, career counseling, mock interviews, CV writing workshops, and regular job fairs for BBA and MBA graduates.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading6">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                        Can students pursue higher studies abroad after completing BBA or MBA here?
                                                    </button>
                                                </h2>
                                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionCareer">
                                                    <div className="accordion-body">
                                                        Yes, our programs are internationally recognized and many of our alumni pursue MBA or PhD studies in universities abroad, including Australia, USA, UK, and Canada.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bd-faq-page-shape d-none d-xxl-block">
                        <Image src={faqShape} alt="shape" />
                    </div>
                </div>
            </section>
            <AboutCtaArea aboutWrapper={true} />
        </>
    );
};

export default FaqMain;
