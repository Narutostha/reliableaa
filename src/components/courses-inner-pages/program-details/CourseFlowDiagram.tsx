"use client";
import React from 'react';

interface CourseCategory {
    name: string;
    credits: string;
}

// BBA course categories
const bbaCourseCategories: CourseCategory[] = [
    { name: "Business Core", credits: "45.00" },
    { name: "Economics", credits: "9.00" },
    { name: "Accounting & Finance", credits: "18.00" },
    { name: "Marketing", credits: "12.00" },
    { name: "Management", credits: "15.00" },
    { name: "Communication & Language", credits: "9.00" },
    { name: "Statistics & Mathematics", credits: "6.00" },
    { name: "Ethics & Social Responsibility", credits: "3.00" },
    { name: "Business Electives", credits: "12.00" },
    { name: "Capstone Project", credits: "6.00" },
    { name: "Internship", credits: "3.00" },
];

// MBA course categories
const mbaCourseCategories: CourseCategory[] = [
    { name: "Business Foundation", credits: "15.00" },
    { name: "Strategic Management", credits: "9.00" },
    { name: "Leadership & Organizational Behavior", credits: "6.00" },
    { name: "Finance & Accounting", credits: "9.00" },
    { name: "Marketing & Analytics", credits: "6.00" },
    { name: "Operations & Supply Chain", credits: "3.00" },
    { name: "Specialization Courses", credits: "12.00" },
    { name: "Management Consulting Project", credits: "6.00" },
    { name: "Executive Leadership Seminar", credits: "3.00" },
];

const CourseFlowDiagram = ({ programId }: { programId: number }) => {
    // Get course categories based on program ID
    const courseCategories = programId === 1 ? bbaCourseCategories : mbaCourseCategories;
    
    // Calculate total credits
    const totalCredits = courseCategories.reduce((total, category) => {
        const credit = category.credits === "Non-Credit" ? 0 : parseFloat(category.credits);
        return total + credit;
    }, 0).toFixed(2);
    
    return (
        <div className="bd-course-details-content">
            <h3 className="bd-course-details-content-title">Course Distribution:</h3>
            <p className="description">
                {programId === 1 ? (
                    "The BBA program consists of 120 credit hours distributed across business core courses, specialized areas, and electives. Students complete foundational courses in the first two years, followed by advanced and specialized courses in the final two years."
                ) : (
                    "The MBA program consists of 60 credit hours with a core curriculum in the first year followed by specialized tracks in the second year. Students select one of three specialization tracks: Strategic Management, Finance, or Digital Transformation."
                )}
            </p>
            
            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Categories of Courses</th>
                            <th scope="col">Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseCategories.map((category, index) => (
                            <tr key={index}>
                                <td>{category.name}</td>
                                <td>{category.credits}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="table-light">
                            <th>Total</th>
                            <th>{totalCredits}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
            {/* Program-specific flow diagram */}
            <div className="bd-program-flow mt-4">
                <h4>Program Flow</h4>
                {programId === 1 ? (
                    <div className="bd-bba-flow p-3 border rounded">
                        <div className="row text-center">
                            <div className="col-md-3">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Year 1</div>
                                <div className="p-2 border rounded">Business Foundations</div>
                                <div className="text-center my-2">↓</div>
                            </div>
                            <div className="col-md-3">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Year 2</div>
                                <div className="p-2 border rounded">Core Business Functions</div>
                                <div className="text-center my-2">↓</div>
                            </div>
                            <div className="col-md-3">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Year 3</div>
                                <div className="p-2 border rounded">Advanced Business Topics</div>
                                <div className="text-center my-2">↓</div>
                            </div>
                            <div className="col-md-3">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Year 4</div>
                                <div className="p-2 border rounded">Specialization & Capstone</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bd-mba-flow p-3 border rounded">
                        <div className="row mb-3">
                            <div className="col-md-12 text-center">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Year 1: Core Curriculum</div>
                                <div className="p-2 border rounded mb-2">Foundational Business Knowledge & Skills</div>
                                <div className="text-center my-2">↓</div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Strategic Management Track</div>
                                <div className="p-2 border rounded">Leadership & Organizational Strategy</div>
                            </div>
                            <div className="col-md-4">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Finance Track</div>
                                <div className="p-2 border rounded">Financial Analysis & Investment</div>
                            </div>
                            <div className="col-md-4">
                                <div className="flow-stage p-2 bg-light rounded mb-2">Digital Transformation Track</div>
                                <div className="p-2 border rounded">Technology & Innovation Management</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseFlowDiagram;