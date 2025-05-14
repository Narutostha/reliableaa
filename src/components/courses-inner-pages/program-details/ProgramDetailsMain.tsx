"use client";
import Breadcrumbs from '@/components/common/Breadcrumb/Breadcrumbs';
import programData from '@/data/programe-data';
import React from 'react';
import CurriculumArea from './CurriculumArea';
import CourseFlowDiagram from './CourseFlowDiagram';
import ProgramSidebarWidget from './ProgramSidebarWidget';
import { eventData } from '@/data/events-data';
import EventSingleCard from '@/components/common/EventSingleCard';

// Define the expected program data type with the properties we're using
interface ProgramDataWithHighlights {
    id: number;
    title?: string;
    description?: string;
    highlights?: string[];
    requirements?: string[];
    // Add other properties as needed
}

const ProgramDetailsMain = ({ programId }: { programId: number }) => {
    // Type assertion to tell TypeScript that we expect the found program to have our extended interface
    const program = programData.find((item) => item.id == programId) as ProgramDataWithHighlights | undefined;
    
    // Different content based on program ID
    const renderProgramSpecificContent = () => {
        if (programId === 1) {
            // Default highlights if not provided in the program data
            const defaultHighlights = [
                "Industry-experienced faculty members",
                "Practical, hands-on learning approach",
                "Internship opportunities with leading companies",
                "Strong alumni network and career services"
            ];

            return (
                <div className="bd-program-specific-content mb-40">
                    <h3 className="bd-course-details-content-title">BBA Program Overview</h3>
                    <p>Our Bachelor of Business Administration program prepares students for successful careers in various business sectors. Through a comprehensive curriculum, you&apos;ll develop critical thinking, leadership skills, and business acumen needed in today&apos;s competitive marketplace.</p>
                    
                    <div className="bd-program-highlights mt-30">
                        <h4>Program Highlights</h4>
                        <div className="bd-post-details-list">
                            <ul>
                                {(program?.highlights || defaultHighlights).map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bd-program-career-paths mt-30">
                        <h4>Career Opportunities</h4>
                        <p>Graduates of our BBA program pursue careers in:</p>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <div className="career-path-item">
                                    <h5>Marketing</h5>
                                    <p>Brand management, digital marketing, market research</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="career-path-item">
                                    <h5>Finance</h5>
                                    <p>Financial analysis, investment banking, corporate finance</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="career-path-item">
                                    <h5>Entrepreneurship</h5>
                                    <p>Start-ups, small business management, family businesses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (programId === 4) {
            // Default highlights for MBA if not provided in the program data
            const defaultHighlights = [
                "Industry-leading faculty with executive experience",
                "Flexible program format for working professionals",
                "Global business perspective and networking opportunities",
                "Specialized tracks for career advancement"
            ];

            return (
                <div className="bd-program-specific-content mb-40">
                    <h3 className="bd-course-details-content-title">MBA Program Overview</h3>
                    <p>Our Master of Business Administration program is designed for professionals seeking to advance their careers and develop strategic leadership capabilities. This intensive program combines theoretical knowledge with practical applications to address complex business challenges.</p>
                    
                    <div className="bd-program-highlights mt-30">
                        <h4>Program Highlights</h4>
                        <div className="bd-post-details-list">
                            <ul>
                                {(program?.highlights || defaultHighlights).map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bd-program-specializations mt-30">
                        <h4>Specialization Tracks</h4>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <div className="specialization-item">
                                    <h5>Strategic Management</h5>
                                    <p>Focus on corporate strategy, competitive analysis, and organizational leadership</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="specialization-item">
                                    <h5>Finance</h5>
                                    <p>Advanced financial modeling, investment strategies, and risk management</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="specialization-item">
                                    <h5>Digital Transformation</h5>
                                    <p>Business analytics, digital marketing, and technology management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bd-executive-program mt-30">
                        <h4>Executive Speaker Series</h4>
                        <p>Our MBA program features regular seminars from industry leaders, providing valuable insights and networking opportunities with executives from Fortune 500 companies and successful startups.</p>
                    </div>
                </div>
            );
        }
        
        return null;
    };
    
    // Default requirements if not provided in the program data
    const defaultRequirements = [
        "Basic understanding of computer usage and internet browsing",
        "No prior programming knowledge is required",
        "A computer with access to the internet"
    ];

    return (
        <>
            <Breadcrumbs breadcrumbTitle={program?.title || 'Program Details'} />
            {/* -- program details area start -- */}
            <section className="bd-program-details-area section-space">
                <div className="container">
                    <div className="row gy-30">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="bd-program-details-wrapper">
                                <h2 className="bd-course-details-title mb-30">{program?.title}</h2>
                                <div className="bd-course-details-content mb-30">
                                    <p className="description">{program?.description}</p>
                                </div>
                                
                                {/* Program-specific content */}
                                {renderProgramSpecificContent()}
                                
                                <div className="bd-course-details-content mb-30">
                                    <h3 className="bd-course-details-content-title">Requirements</h3>
                                    <div className="bd-post-details-list">
                                        <ul>
                                            {(program?.requirements || defaultRequirements).map((requirement, index) => (
                                                <li key={index}>{requirement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <CurriculumArea programId={programId} />
                                <CourseFlowDiagram programId={programId} />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <ProgramSidebarWidget program={program} />
                        </div>
                    </div>
                </div>
            </section>
            {/* -- program details area end -- */}
            {/* -- upcoming event area start -- */}
            <section className="bd-upcoming-event-area section-space-bottom fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="bd-section-title-wrapper section-title-space text-center">
                                <h2 className="bd-section-title">Upcoming Events</h2>
                                <p>{programId === 1 ? 'Events for BBA Students' : 'Events for MBA Professionals'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {
                            eventData.slice(programId === 1 ? 0 : 3, programId === 1 ? 3 : 6).map((event) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={event.id}>
                                    <EventSingleCard event={event} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* -- upcoming event area end -- */}
        </>
    );
};

export default ProgramDetailsMain;