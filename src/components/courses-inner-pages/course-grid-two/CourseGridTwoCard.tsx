import { ICourseProps } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseGridTwoCard = ({ course }: ICourseProps) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="bd-course-wrapper style-two">
                <div className="bd-course-thumb-wrapper bd-course-thumb-style-two p-relative">
                    <div className="bd-course-thumb">
                        {course.image && (
                            <Image
                                style={{ width: "100%", height: "auto" }}
                                src={course.image}
                                alt={course.title}
                            />
                        )}
                    </div>
                </div>

                <div className="bd-course-content">
                    <h5 className="bd-course-title underline mb-10">{course.title}</h5>

                    {(course.creditHours || course.durationYears) && (
                        <div className="bd-course-extra-info mt-2">
                            <p className="mb-0">
                                <strong>Credit Hours:</strong> {course.creditHours ?? 'N/A'} |{" "}
                                <strong>Duration:</strong> {course.durationYears ?? 'N/A'} years
                            </p>
                        </div>
                    )}

                    <div className="bd-course-full-border mt-3"></div>

                    <div className="bd-course-btn mt-10">
                        <Link className="bd-text-btn" href={`/program-details/${course.id}`}>
                            Enroll Now
                            <span className="box-icon">
                                <i className="fa-regular fa-arrow-right-long first-icon"></i>
                                <i className="fa-regular fa-arrow-right-long second-icon"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseGridTwoCard;
