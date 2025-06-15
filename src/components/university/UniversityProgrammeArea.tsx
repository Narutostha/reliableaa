'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

// Define interface for program item
interface ProgramItem {
  id: number;
  program: string;
  type: string;
  title: string;
  description: string;
  duration: string;
  credits: string;
  image: string; // Use string for path from /public
}

// Define program data
const programData: ProgramItem[] = [
  {
    id: 1,
    program: 'undergraduate',
    type: ' ',
    title: "Bachelor of Business Administration",
    description: "Develop essential business acumen and leadership skills through a comprehensive curriculum covering management, marketing, finance, and entrepreneurship.",
    duration: "4 Years",
    credits: "12 Credits",
    image: "/assets/images/bba.png"
  },
  {
    id: 4,
    program: 'graduate',
    type: '',
    title: "Master of Business Administration",
    description: "Advance your career with our rigorous MBA program designed for professionals seeking to develop strategic leadership capabilities and global business perspectives.",
    duration: "2 Years",
    credits: "16 Credits",
    image: "/assets/images/mba.png"
  }
];

const UniversityProgrammeArea = () => {
  const [renderedData, setRenderedData] = useState<ProgramItem[]>(programData.slice(0, 6));
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>('showAll');

  const handleProgramData = (programType: string): void => {
    setShowAll(false);
    setActiveFilter(programType);

    if (programType === 'undergraduate') {
      setRenderedData(programData.filter(data => data.program === 'undergraduate'));
    } else if (programType === 'graduate') {
      setRenderedData(programData.filter(data => data.program === 'graduate'));
    } else {
      setRenderedData(programData.slice(0, 6));
    }
  };

  const handleShowAll = (): void => {
    setShowAll(!showAll);
    setActiveFilter('showAll');
    setRenderedData(showAll ? programData.slice(0, 6) : programData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bd-program-area section-space-bottom">
      <div className="container">
        <div className="row gy-30 justify-content-between align-items-center section-title-space">
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="bd-section-title-wrapper">
              <span className="bd-section-subtitle">Leading Programs</span>
              <h2 className="bd-section-title">Top University <span className="down-mark-line">Programs</span></h2>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="course-item text-center d-flex flex-wrap gap-15 justify-content-lg-end justify-content-start">
              <button
                className={`filter-item bd-btn btn-outline-primary ${activeFilter === 'showAll' ? 'active' : ''}`}
                onClick={handleShowAll}
              >
                Show All
              </button>
              <button
                className={`filter-item bd-btn btn-outline-primary ${activeFilter === 'undergraduate' ? 'active' : ''}`}
                onClick={() => handleProgramData('undergraduate')}
              >
                Undergraduate
              </button>
              <button
                className={`filter-item bd-btn btn-outline-primary ${activeFilter === 'graduate' ? 'active' : ''}`}
                onClick={() => handleProgramData('graduate')}
              >
                Graduates
              </button>
            </div>
          </div>
        </div>

        <div className="row g-30 grid">
          <AnimatePresence>
            {renderedData.map((item, index) => (
              <motion.div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item cat1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="bd-course-wrapper style-six">
                  <Link href={`/program-details/${item.id}`} className="bd-course-thumb-wrapper bd-course-thumb-style-two p-relative">
                    <div className="bd-course-thumb">
                      <Image
                        src={item.image}
                        width={500}
                        height={300}
                        style={{ width: 'auto', height: 'auto' }}
                        alt={item.title}
                      />
                    </div>
                    <div className="bd-course-badge">
                      <span className="bd-badge badge-primary">{item.type}</span>
                    </div>
                  </Link>
                  <div className="bd-course-content">
                    <h5 className="bd-course-title underline mb-15">
                      <Link href={`/program-details/${item.id}`}>{item.title}</Link>
                    </h5>
                    <div className="bd-course-content-body">
                      <p>{item.description}</p>
                    </div>
                    <div className="bd-course-divider"></div>
                    <div className="bd-course-content-bottom d-flex-between flex-wrap gap-15">
                      <div className="bd-course-lesson">
                        <span><i className="fa-light fa-clock"></i> {item.duration}</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> {item.credits}</span>
                      </div>
                      <Link className="bd-btn btn-outline-primary" href={`/program-details/${item.id}`}>
                        Apply now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bd-program-btn d-flex justify-content-center mt-50">
          <Link href="/courses-grid-two" className="bd-btn btn-primary">
            Explore More University Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UniversityProgrammeArea;
