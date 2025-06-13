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

    const totalCredits = programId === 1 ? 120 : 63;
    const duration = programId === 1 ? '4 years (8 semesters)' : '2 years (4 semesters)';
    const timing = "6:30 to 10:30 - Lecture Hour";

    const tabs = [
      { key: 'overview', label: 'Overview' },
      { key: 'structure', label: 'Course Structure' },
      { key: 'documents', label: 'Documents Required' },
      { key: 'dissertation', label: 'Dissertation' },
      { key: 'attend', label: 'Who Should Attend' },
      { key: 'career', label: 'Career Option' },
    ];

    return (
      <div className="bd-program-curriculum mb-30">
        {/* Header Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-xl shadow-md text-center">
          <div>
            <div className="text-red-500 text-xl font-semibold">Duration</div>
            <div className="text-gray-800 mt-1 text-lg">{duration}</div>
          </div>
          <div>
            <div className="text-red-500 text-xl font-semibold">Credit Hour</div>
            <div className="text-gray-800 mt-1 text-lg">{totalCredits}</div>
          </div>
          <div>
            <div className="text-red-500 text-xl font-semibold">College Timing</div>
            <div className="text-gray-800 mt-1 text-lg">{timing}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto space-x-2 bg-pink-100 p-2 rounded-md mb-6">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-md font-medium ${activeTab === tab.key ? 'bg-red-500 text-white' : 'bg-white text-gray-800 border border-red-200'}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
          {activeTab === 'overview' && (
            <p className="text-gray-700">Bachelor of Business Administration (BBA) is a Four years program of Far Western University. The degree is conferred after four years of full-time study in one or more areas of business concentrations. The BBA program launched by Far Western University includes general business courses and advanced courses for specific concentrations.</p>
          )}
          {activeTab === 'structure' && (
            <>
              <h3 className="bd-course-details-content-title">Curriculum</h3>
              <span className="bd-course-curriculum-overview block mb-4">
                {curriculumData.length} years | {totalCredits} credits | {duration}
              </span>

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
                                    <th scope="col">Sl.</th>
                                    <th scope="col">Course Code</th>
                                    <th scope="col">Course Title</th>
                                    <th scope="col" colSpan={2}>Theory</th>
                                    <th scope="col" colSpan={2}>Sessional</th>
                                    <th scope="col">Total Credits</th>
                                  </tr>
                                  <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>Contact hrs/week</th>
                                    <th>Credit</th>
                                    <th>Contact hrs/week</th>
                                    <th>Credit</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {semester.courses.map((course, courseIndex) => (
                                    <tr key={courseIndex}>
                                      <td>{course.sl}</td>
                                      <td>{course.code}</td>
                                      <td className="text-start">{course.title}</td>
                                      <td>{course.theoryHours !== null ? course.theoryHours.toFixed(2) : "--"}</td>
                                      <td>{course.theoryCredit !== null ? course.theoryCredit.toFixed(2) : "--"}</td>
                                      <td>{course.sessionalHours !== null ? course.sessionalHours.toFixed(2) : "--"}</td>
                                      <td>{course.sessionalCredit !== null ? course.sessionalCredit.toFixed(2) : "--"}</td>
                                      <td>{course.totalCredit.toFixed(2)}</td>
                                    </tr>
                                  ))}
                                </tbody>
                                <tfoot>
                                  <tr className="table-light">
                                    <th colSpan={3}>Total</th>
                                    <td>{semester.total.theoryHours.toFixed(2)}</td>
                                    <td>{semester.total.theoryCredit.toFixed(2)}</td>
                                    <td>{semester.total.sessionalHours.toFixed(2)}</td>
                                    <td>{semester.total.sessionalCredit.toFixed(2)}</td>
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
          {activeTab === 'documents' && <p className="text-gray-700">Required documents include academic transcripts, recommendation letters, proof of identity, and application form.</p>}
          {activeTab === 'dissertation' && <p className="text-gray-700">Students must complete a dissertation in their final semester on a relevant business topic under faculty supervision.</p>}
          {activeTab === 'attend' && <p className="text-gray-700">This program is ideal for students aiming to build a foundational career in business management, marketing, finance, or entrepreneurship.</p>}
          {activeTab === 'career' && <p className="text-gray-700">Career options include roles in management, consulting, financial services, marketing, and more.</p>}
        </div>
      </div>
    );
  };

  export default CurriculumArea;