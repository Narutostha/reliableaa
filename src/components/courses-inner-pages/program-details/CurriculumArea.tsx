"use client";

import React, { useState } from 'react';
import { getCurriculumByProgramId } from "@/data/program/curriculum-data";

const CurriculumArea = ({ programId }: { programId: number }) => {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const curriculumData = getCurriculumByProgramId(programId);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(index);
  };

  // Dynamic program info
  const programDetails = {
    1: { credits: 120, duration: "4 years (8 semesters)", timing: "6:30 AM to 10:30 AM" },
    4: { credits: 63, duration: "2 years (4 semesters)", timing: "6:30 AM to 10:30 AM" }
  };

  const { credits, duration, timing } = programDetails[programId] || {
    credits: 0,
    duration: "-",
    timing: "-"
  };

  const tabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'structure', label: 'Course Structure' },
    { key: 'documents', label: 'Documents Required' },
    { key: 'dissertation', label: 'Dissertation' },
    { key: 'attend', label: 'Who Should Attend' },
    { key: 'career', label: 'Career Option' },
  ];

  const content = {
    1: {
      overview: "The BBA program builds a solid foundation in management, marketing, and entrepreneurship...",
      documents: "Transcripts, recommendation letters, photo ID, and application form are required for BBA admission.",
      dissertation: "Final year students submit a capstone project aligned with real-world business problems.",
      attend: "Ideal for students seeking a career in business management, finance, or launching a startup.",
      career: "Graduates can pursue careers in HR, marketing, finance, or go on to pursue an MBA."
    },
    4: {
      overview: "The MBA program focuses on leadership, global business strategy, and professional excellence...",
      documents: "Bachelor's transcripts, SOP, 2 recommendation letters, resume, and official ID are required for MBA admission.",
      dissertation: "Students must conduct research and submit a dissertation in the final semester under faculty supervision.",
      attend: "Perfect for graduates and professionals aiming for leadership roles in business, consulting, or strategy.",
      career: "Career paths include C-level roles, business consulting, analytics, and project management."
    }
  };

  const getContent = (key: keyof typeof content[1 | 4]) => {
    return content[programId as 1 | 4]?.[key] || "";
  };

  return (
    <div className="bd-program-curriculum mb-20">
      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {[
          { title: "Duration", value: duration },
          { title: "Credit Hour", value: credits },
          { title: "College Timing", value: timing }
        ].map((item, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm text-center hover:shadow-md transition">
            <div className="text-sm text-red-500 font-semibold">{item.title}</div>
            <div className="text-gray-800 text-base mt-1 font-medium">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border 
              ${activeTab === tab.key
                ? 'bg-red-600 text-white border-red-600 shadow'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-red-100 hover:text-red-600'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        {activeTab !== 'structure' ? (
          <p className="text-gray-700 leading-relaxed">{getContent(activeTab as keyof typeof content[1 | 4])}</p>
        ) : (
          <>
            <h3 className="bd-course-details-content-title">Curriculum</h3>
            <span className="bd-course-curriculum-overview block mb-4">
              {curriculumData.length} years | {credits} credits | {duration}
            </span>

            {/* Unchanged accordion */}
            <div className="accordion-common-style accordion-transparent accordion-style-one">
              <div className="accordion" id="accordionExampleTwo">
                {curriculumData.map((yearData, yearIndex) => (
                  <div className="accordion-item" key={yearIndex}>
                    <h2 className="accordion-header" id={`heading${yearIndex}`}>
                      <button
                        className={`accordion-button ${activeAccordion === yearIndex ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(yearIndex)}
                        aria-expanded={activeAccordion === yearIndex ? "true" : "false"}
                        aria-controls={`collapse${yearIndex}`}
                      >
                        {yearData.year}
                        {yearData.yearNotes && <small className="ms-2 text-muted">({yearData.yearNotes})</small>}
                      </button>
                    </h2>
                    <div
                      id={`collapse${yearIndex}`}
                      className={`accordion-collapse collapse ${activeAccordion === yearIndex ? 'show' : ''}`}
                      aria-labelledby={`heading${yearIndex}`}
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                        {yearData.semesters.map((semester, semIndex) => (
                          <div className="bd-program-curriculum-table table-responsive" key={semIndex}>
                            <h6 className="title">{semester.title}</h6>
                            {semester.notes && <p className="semester-note text-muted mb-3">{semester.notes}</p>}
                           <table className="table table-bordered text-center">
  <thead className="table-light">
    <tr>
      <th>Sl.</th>
      <th>Course Code</th>
      <th>Course Title</th>
      <th>Total Credits</th>
    </tr>
  </thead>
  <tbody>
    {semester.courses.map((course, courseIndex) => (
      <tr key={courseIndex}>
        <td>{course.sl}</td>
        <td>{course.code}</td>
        <td className="text-start">{course.title}</td>
        <td>{course.totalCredit.toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
  <tfoot>
    <tr className="table-light">
      <th colSpan={3}>Total</th>
      <td>{semester.total.totalCredit.toFixed(2)}</td>
    </tr>
  </tfoot>
</table>

                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CurriculumArea;
