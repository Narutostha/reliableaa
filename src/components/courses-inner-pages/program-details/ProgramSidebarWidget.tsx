"use client";
import Link from 'next/link';
import React from 'react';
import avatarImg from "../../../../public/assets/images/avatar/avatar.webp";
import programFaqImg from "../../../../public/assets/images/shape/progrum-faq.svg";
import Image from 'next/image';

// Define proper type for program prop
interface Program {
    id: number;
    title?: string;
    duration?: string;
    credits?: number | string;
    // Add other properties as needed
}

const ProgramSidebarWidget = ({ program }: { program?: Program }) => {
    const isProgramBBA = program?.id === 1;
    // Removed the unused isProgramMBA variable
    
    // Department head info based on program
    const departmentHeadInfo = isProgramBBA ? {
        name: "Dr. Sarah Mitchell",
        designation: "Associate Professor",
        role: "Chair, Department of Business Administration",
        education: "Ph.D., Harvard Business School, USA",
        email: "sarah.mitchell@university.edu"
    } : {
        name: "Dr. Michael Zhang",
        designation: "Professor",
        role: "Director, MBA Program",
        education: "Ph.D., Stanford Graduate School of Business, USA",
        email: "michael.zhang@university.edu"
    };
    
    return (
        <>
            <div className="bd-program-sidebar sidebar-right sidebar-sticky">
                <div className="bd-program-sidebar-widget mb-30">
                    <div className="bd-program-sidebar-link">
                        <Link className="bd-btn btn-primary w-100" href="/faculty-members">Faculty & Staff</Link>
                    </div>
                    <div className="bd-program-sidebar-link">
                        <Link className="bd-btn btn-secondary w-100" href="/scholarships-financial-aid">Scholarships &
                            Financial Aid</Link>
                    </div>
                    <div className="bd-program-sidebar-link">
                        <Link className="bd-btn btn-danger w-100" href="/apply-online">Apply Online</Link>
                    </div>
                </div>
                
                {/* Program-specific info widget */}
                <div className="bd-program-sidebar-widget mb-30">
                    <div className="bd-program-info p-4 border rounded bg-light">
                        <h5 className="widget-title mb-3">Program Information</h5>
                        <ul className="program-info-list">
                            <li><strong>Degree:</strong> {isProgramBBA ? "Bachelor of Business Administration" : "Master of Business Administration"}</li>
                            <li><strong>Duration:</strong> {program?.duration || (isProgramBBA ? "4 Years" : "2 Years")}</li>
                            <li><strong>Credits:</strong> {program?.credits || (isProgramBBA ? "120 Credits" : "60 Credits")}</li>
                            <li><strong>Start Date:</strong> {isProgramBBA ? "September & January" : "September only"}</li>
                            <li><strong>Application Deadline:</strong> {isProgramBBA ? "June 30 & November 30" : "May 31"}</li>
                            <li><strong>Tuition (per credit):</strong> {isProgramBBA ? "$350" : "$650"}</li>
                        </ul>
                    </div>
                </div>
                
                <div className="bd-program-sidebar-widget mb-30">
                    <div className="bd-instructor-wrapper style-two">
                        <div className="bd-instructor-item">
                            <div className="bd-instructor-thumb-wrap">
                                <div className="bd-instructor-thumb">
                                    <Image style={{width:"100%", height:"auto"}} src={avatarImg} alt="image" />
                                </div>
                            </div>
                            <div className="bd-instructor-info">
                                <h6 className="name underline"><Link href="/instructor/instructor-details">{departmentHeadInfo.name}</Link></h6>
                                <span className="designation">{departmentHeadInfo.designation}</span>
                                <span className="designation">{departmentHeadInfo.role}</span>
                                <span className="institute">{departmentHeadInfo.education}</span>
                                <span className="email"><strong>Email:</strong> {departmentHeadInfo.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Program-specific resources */}
                <div className="bd-program-sidebar-widget mb-30">
                    <div className="bd-program-resources p-4 border rounded">
                        <h5 className="widget-title mb-3">Resources</h5>
                        <ul className="resources-list">
                            {isProgramBBA ? (
                                <>
                                    <li><Link href="#">BBA Student Handbook</Link></li>
                                    <li><Link href="#">Internship Opportunities</Link></li>
                                    <li><Link href="#">Business Club</Link></li>
                                    <li><Link href="#">Career Services</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link href="#">MBA Program Guide</Link></li>
                                    <li><Link href="#">Executive Speaker Series Schedule</Link></li>
                                    <li><Link href="#">Corporate Partnerships</Link></li>
                                    <li><Link href="#">Alumni Network</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                
                <div className="bd-program-sidebar-widget">
                    <div className="bd-program-sidebar-faq">
                        <h4 className="title mb-10">Do you have more questions?</h4>
                        <p className="description underline">Read our <Link href="/faq">FAQ</Link> or <Link href="/contact">Contact Us</Link></p>
                        <div className="thumb"> <Image style={{width:"100%", height:"auto"}} src={programFaqImg} alt="image" /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgramSidebarWidget;