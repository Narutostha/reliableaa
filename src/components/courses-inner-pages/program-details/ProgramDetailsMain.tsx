"use client";

import Breadcrumbs from '@/components/common/Breadcrumb/Breadcrumbs';
import programData from '@/data/programe-data';
import React from 'react';
import CurriculumArea from './CurriculumArea';

interface ProgramDataWithHighlights {
    id: number;
    title?: string;
    description?: string;
    highlights?: string[];
    requirements?: string[];
}

const ProgramDetailsMain = ({ programId }: { programId: number }) => {
    const program = programData.find((item) => item.id == programId) as ProgramDataWithHighlights | undefined;

    const renderProgramSpecificContent = () => {
        if (programId === 1) {
            const defaultHighlights = [
                "Practical, hands-on learning approach",
                "Internship opportunities with leading companies",
                "Strong alumni network and career services"
            ];

            return (
                <div className="bd-program-specific-content mb-40">
                    <h3 className="bd-course-details-content-title">BBA Program Overview</h3>
                    <p>Our Bachelor of Business Administration program prepares students for successful careers in various business sectors. Through a comprehensive curriculum, you ll develop critical thinking, leadership skills, and business acumen needed in today s competitive marketplace.</p>

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
                </div>
            );
        } else if (programId === 4) {
            const defaultHighlights = [
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
                </div>
            );
        }

        return null;
    };

    

    return (
        <>
            <Breadcrumbs breadcrumbTitle={program?.title || 'Program Details'} />
            <section className="bd-program-details-area section-space">
                <div className="container">
                    <div className="row gy-30">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="bd-program-details-wrapper">
                                <h2 className="bd-course-details-title mb-30">{program?.title}</h2>
                                <div className="bd-course-details-content mb-30">
                                    <p className="description">{program?.description}</p>
                                </div>

                                {renderProgramSpecificContent()}

                                

                                <CurriculumArea programId={programId} />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgramDetailsMain;
