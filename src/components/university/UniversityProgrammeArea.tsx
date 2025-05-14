'use client'

import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Define interfaces for type safety
interface ProgramItem {
    id: number;
    program: string;
    type: string;
    title: string;
    description: string;
    duration: string;
    credits: string;
    images: string[];
    shapeImage: string;
    textImage: string;
}

// Define program data with multiple images per program
const programData: ProgramItem[] = [
    {
        id: 1,
        program: 'undergraduate',
        type: 'Full-time',
        title: "BBA",
        description: "Learn programming, algorithms, and computational theory to drive the future of technology.",
        duration: "4 Years",
        credits: "12 Credits",
        // Array of images for gallery display
        images: [
            "/assets/images/course/bba.jpg",
        ],
        shapeImage: "/assets/images/course/course-shape-1.webp",
        textImage: "/assets/images/course/csc.webp",
    },
    {
        id: 4,
        program: 'graduate',
        type: 'Full-time',
        title: "Master of Science in Data Science",
        description: "Master statistical methods, machine learning, and big data analysis to uncover insights in data-driven fields.",
        duration: "2 Years",
        credits: "16 Credits",
        // Array of images for gallery display
        images: [
            "/assets/images/course/course-thumb-4.webp",
            "/assets/images/course/course-thumb-5.webp",
            "/assets/images/course/course-thumb-6.webp"
        ],
        shapeImage: "/assets/images/course/course-shape-4.webp",
        textImage: "/assets/images/course/mscds.webp",
    },
    // Add more program items as needed
];

const UniversityProgrammeArea = () => {
    const [renderedData, setRenderedData] = useState<ProgramItem[]>(programData.slice(0, 6));
    const [showAll, setShowAll] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<string>('showAll');
    
    // Track the current image index for each program
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

    // Function to change the current image for a program
    const changeImage = (programId: number, direction: 'next' | 'prev'): void => {
        setCurrentImageIndex(prev => {
            const current = prev[programId] || 0;
            const programImages = programData.find(p => p.id === programId)?.images || [];
            const totalImages = programImages.length;
            
            if (direction === 'next') {
                return { ...prev, [programId]: (current + 1) % totalImages };
            } else {
                return { ...prev, [programId]: (current - 1 + totalImages) % totalImages };
            }
        });
    };

    // Get the current image for a program
    const getCurrentImage = (program: ProgramItem): string => {
        const index = currentImageIndex[program.id] || 0;
        return program.images[index];
    };

    // Function to handle the filter logic based on program type
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

    // Toggle function to show all programs or revert back
    const handleShowAll = (): void => {
        setShowAll(!showAll);
        setActiveFilter('showAll');
        setRenderedData(showAll ? programData.slice(0, 6) : programData);
    };

    // Animation variants
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
                        {renderedData.length > 0 && renderedData.map((item, index) => (
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
                                            {/* Image with gallery navigation */}
                                            <div className="position-relative">
                                                <Image 
                                                    src={getCurrentImage(item)}
                                                    width={500}
                                                    height={300}
                                                    style={{ width: 'auto', height: 'auto' }} 
                                                    alt={item.title}
                                                />
                                                
                                                {/* Image gallery navigation buttons */}
                                                {item.images.length > 1 && (
                                                    <div className="image-gallery-nav" style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 2 }}>
                                                        <button 
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                changeImage(item.id, 'prev');
                                                            }}
                                                            className="gallery-nav-btn"
                                                            style={{ background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', marginRight: '5px' }}
                                                        >
                                                            ←
                                                        </button>
                                                        <button 
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                changeImage(item.id, 'next');
                                                            }}
                                                            className="gallery-nav-btn"
                                                            style={{ background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px' }}
                                                        >
                                                            →
                                                        </button>
                                                        <span style={{ background: 'rgba(0,0,0,0.5)', color: 'white', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', marginLeft: '5px' }}>
                                                            {(currentImageIndex[item.id] || 0) + 1}/{item.images.length}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="bd-course-shape">
                                            <Image 
                                                src={item.shapeImage} 
                                                width={200}
                                                height={200}
                                                alt="shape" 
                                            />
                                        </div>
                                        <div className="bd-course-logo">
                                            {item.textImage && <Image 
                                                src={item.textImage} 
                                                width={150}
                                                height={100}
                                                style={{ width: 'auto', height: 'auto' }} 
                                                alt="logo" 
                                            />}
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