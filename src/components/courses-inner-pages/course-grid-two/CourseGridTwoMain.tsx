
"use client"
import Breadcrumbs from '@/components/common/Breadcrumb/Breadcrumbs';
import Link from 'next/link';
import React from 'react';
import CourseGridTwoCard from './CourseGridTwoCard';
import coursesData from '@/data/courses/courses-data';

const CourseGridTwoMain = () => {
    return (
        <>
            <Breadcrumbs breadcrumbTitle='Our Courses' />
            <section className="bd-course-grid-area section-space">
                <div className="container">
                    <div className="row g-30 align-items-center justify-content-between mb-30">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                            <div className="d-flex-between">
                                <div className="bd-top-sorting-left">
                                    <h6 className="bd-sorting-item-found">We found <span>{coursesData.length}</span> courses available for you</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-30">
                        {coursesData.map((item, index) => (
                            <CourseGridTwoCard course={item} key={index} />
                        ))}
                    </div>
                    <div className="bd-course-more-btn d-flex justify-content-center mt-50">
                        <Link className="bd-btn btn-outline-border-primary" href="#">Load More <span className="right-icon"><i className="fa-duotone fa-spinner"></i></span></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseGridTwoMain;
