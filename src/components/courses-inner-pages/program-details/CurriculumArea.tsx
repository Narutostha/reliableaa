"use client";

import React, { useState } from 'react';
import { getCurriculumByProgramId, getProgramCurriculumById } from "@/data/program/curriculum-data";

const CurriculumArea = ({ programId }: { programId: number }) => {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const curriculumData = getCurriculumByProgramId(programId);
  const programCurriculum = getProgramCurriculumById(programId);
  
  // Calculate total courses and credits
  const totalCourses = curriculumData.reduce((total, year) => {
    return total + year.semesters.reduce((semTotal, semester) => {
      return semTotal + semester.courses.length;
    }, 0);
  }, 0);
  
  const totalCredits = programId === 1 ? 120 : 60; // BBA: 120, MBA: 60
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(index);
  };

  return (
    <div className="bd-program-curriculum mb-30">
      <h3 className="bd-course-details-content-title">Curriculum</h3>
      <span className="bd-course-curriculum-overview">
        {totalCourses} courses | {totalCredits} credits | {programId === 1 ? '4 years' : '2 years'}
      </span>
      
      {/* Program objectives */}
      {programCurriculum && (
        <div className="bd-program-objectives mb-4 mt-3">
          <h4 className="bd-program-section-title">Program Objectives</h4>
          <div className="bd-post-details-list">
            <ul>
              {programCurriculum.programInfo.programObjectives.map((objective, idx) => (
                <li key={idx}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {/* Main curriculum */}
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
      
      {/* Specialization tracks for MBA */}
      {programId === 4 && programCurriculum?.programInfo.specializations && (
        <div className="bd-specialization-tracks mt-5">
          <h4 className="bd-program-section-title">Specialization Tracks</h4>
          <div className="row mt-3">
            {programCurriculum.programInfo.specializations.map((track, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="specialization-track-card p-3 border rounded h-100">
                  <h5 className="track-title">{track.name}</h5>
                  <p className="track-description">{track.description}</p>
                  <h6 className="key-courses-title mt-3">Key Courses:</h6>
                  <ul className="key-courses-list">
                    {track.courses.map((course, courseIdx) => (
                      <li key={courseIdx}>{course.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Career opportunities */}
      {programCurriculum && (
        <div className="bd-career-opportunities mt-5">
          <h4 className="bd-program-section-title">Career Opportunities</h4>
          <div className="row mt-3">
            {programCurriculum.programInfo.careerOpportunities.map((career, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="career-card p-3 border rounded text-center">
                  <h5 className="career-title">{career}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Program-specific note */}
      <div className="bd-curriculum-note mt-4 p-3 border rounded">
        <h5>Program Note:</h5>
        {programId === 1 ? (
          <p>
            BBA students must maintain a minimum GPA of 2.5 throughout the program. In the final year, 
            students can choose electives from various business disciplines to tailor their degree to 
            their career goals. The 3-credit internship is mandatory and typically completed during 
            the summer after the third year.
          </p>
        ) : (
          <p>
            MBA students select one of three specialization tracks for their second year: Strategic Management, 
            Finance, or Digital Transformation. Each track includes specialized coursework and a 
            capstone consulting project. Students must maintain a minimum GPA of 3.0 to remain in good 
            standing in the program.
          </p>
        )}
      </div>
    </div>
  );
};

export default CurriculumArea;