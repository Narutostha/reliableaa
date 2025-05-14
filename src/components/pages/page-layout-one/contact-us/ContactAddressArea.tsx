import { contactData } from '@/data/contact-data';
import React from 'react';

const ContactAddressArea = () => {
    return (
        <>
            <section className="bd-contact-address-area section-space primary-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="bd-section-title-wrapper section-title-space text-center">
                                <span className="bd-section-subtitle">Locations</span>
                                <h2 className="bd-section-title mb-20">Our Details</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {contactData.map((item, index) => (
                            <div key={index} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="bd-contact-address-box">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">{item.title}</h6>
                                        {item.details.map((detail, idx) => (
                                            typeof detail === 'string' ? (
                                                <p key={idx}>{detail}</p>
                                            ) : (
                                                <p key={idx}><a href={detail.link} target="_blank" rel="noopener noreferrer">{detail.text}</a></p>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bd-contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1360.530599679708!2d85.3465522850524!3d27.68752135619213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c36fbb763%3A0x17a2693691c20d0f!2sM8QX%2B238%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1747236140284!5m2!1sen!2snp" >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactAddressArea;