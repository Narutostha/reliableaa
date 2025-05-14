import { ICurriculumData, IProgramCurriculum, ProgramInfo } from "@/interFace/curriculumTypes";

// BBA Program Info
const bbaProgramInfo: ProgramInfo = {
  id: 1,
  name: "Bachelor of Business Administration",
  code: "BBA",
  degreeType: "undergraduate",
  duration: "4 Years",
  totalCredits: 120,
  description: "The Bachelor of Business Administration program prepares students for successful careers in various business sectors through a comprehensive curriculum covering management, marketing, finance, and entrepreneurship.",
  admissionRequirements: [
    "High school diploma or equivalent",
    "Minimum GPA of 2.5",
    "Letter of recommendation"
  ],
  programObjectives: [
    "Develop critical thinking and problem-solving skills for business challenges",
    "Build strong communication and teamwork abilities",
    "Understand ethical considerations in business decisions",
    "Acquire fundamental knowledge of business functions and operations"
  ],
  careerOpportunities: [
    "Marketing and Brand Management",
    "Financial Analysis and Planning",
    "Human Resource Management",
    "Entrepreneurship and Business Development",
    "Operations and Supply Chain Management"
  ]
};

// MBA Program Info
const mbaProgramInfo: ProgramInfo = {
  id: 4,
  name: "Master of Business Administration",
  code: "MBA",
  degreeType: "graduate",
  duration: "2 Years",
  totalCredits: 60,
  description: "The Master of Business Administration program is designed for professionals seeking to advance their careers and develop strategic leadership capabilities through intensive coursework and practical applications.",
  admissionRequirements: [
    "Bachelor's degree from an accredited institution",
    "Minimum 2 years of professional work experience",
    "GMAT/GRE scores (waivers available)"
  ],
  programObjectives: [
    "Develop advanced strategic thinking and decision-making capabilities",
    "Build leadership skills for managing organizations at executive levels",
    "Strengthen analytical abilities for complex business challenges",
    "Foster global business perspective and cross-cultural competence"
  ],
  careerOpportunities: [
    "Executive Leadership Positions",
    "Management Consulting",
    "Investment Banking and Financial Management",
    "Corporate Strategy and Development",
    "Entrepreneurship and Innovation Management"
  ],
  specializations: [
    {
      id: "strategic-management",
      name: "Strategic Management",
      description: "Focus on corporate strategy, competitive analysis, and organizational leadership",
      courses: [
        {
          sl: 1,
          code: "MBA 601",
          title: "Corporate Governance & Ethics",
          theoryHours: 3.0,
          theoryCredit: 3.00,
          sessionalHours: null,
          sessionalCredit: null,
          totalCredit: 3.00
        },
        {
          sl: 2,
          code: "MBA 602",
          title: "Mergers, Acquisitions & Corporate Restructuring",
          theoryHours: 3.0,
          theoryCredit: 3.00,
          sessionalHours: null,
          sessionalCredit: null,
          totalCredit: 3.00
        }
      ]
    },
    {
      id: "finance",
      name: "Finance",
      description: "Advanced financial modeling, investment strategies, and risk management",
      courses: [
        {
          sl: 1,
          code: "MBA 621",
          title: "Advanced Financial Management",
          theoryHours: 3.0,
          theoryCredit: 3.00,
          sessionalHours: null,
          sessionalCredit: null,
          totalCredit: 3.00
        },
        {
          sl: 2,
          code: "MBA 622",
          title: "Investment Analysis & Portfolio Management",
          theoryHours: 3.0,
          theoryCredit: 3.00,
          sessionalHours: null,
          sessionalCredit: null,
          totalCredit: 3.00
        }
      ]
    },
    {
      id: "digital-transformation",
      name: "Digital Transformation",
      description: "Business analytics, digital marketing, and technology management",
      courses: [
        {
          sl: 1,
          code: "MBA 641",
          title: "Digital Business Models",
          theoryHours: 3.0,
          theoryCredit: 3.00,
          sessionalHours: null,
          sessionalCredit: null,
          totalCredit: 3.00
        },
        {
          sl: 2,
          code: "MBA 642",
          title: "Data Analytics for Business Decision-Making",
          theoryHours: 3.0,
          theoryCredit: 3.00,
          sessionalHours: null,
          sessionalCredit: null,
          totalCredit: 3.00
        }
      ]
    }
  ]
};

// BBA Curriculum (Program ID: 1)
const bbaCurriculum: ICurriculumData = [
    {
        year: "First Year",
        semesters: [
            {
                title: "1st Year 1st Semester",
                courses: [
                    { sl: 1, code: "BUS 101", title: "Introduction to Business", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "ECO 102", title: "Principles of Microeconomics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "ENG 103", title: "Business Communication", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MATH 104", title: "Business Mathematics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "COMP 105", title: "Computer Applications in Business", theoryHours: 2.0, theoryCredit: 2.00, sessionalHours: 3.00, sessionalCredit: 1.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 14.0, theoryCredit: 14.0, sessionalHours: 3.0, sessionalCredit: 1.00, totalCredit: 15.00 }
            },
            {
                title: "1st Year 2nd Semester",
                courses: [
                    { sl: 1, code: "ACCT 201", title: "Financial Accounting", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "ECO 202", title: "Principles of Macroeconomics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "STAT 203", title: "Business Statistics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MGT 204", title: "Principles of Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MKT 205", title: "Principles of Marketing", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 }
                ],
                total: { theoryHours: 15.0, theoryCredit: 15.0, sessionalHours: 0.0, sessionalCredit: 0.00, totalCredit: 15.00 }
            }
        ],
    },
    {
        year: "Second Year",
        semesters: [
            {
                title: "2nd Year 1st Semester",
                courses: [
                    { sl: 1, code: "ACCT 301", title: "Managerial Accounting", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "FIN 302", title: "Corporate Finance", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "HRM 303", title: "Human Resource Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "OPS 304", title: "Operations Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "LAW 305", title: "Business Law", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 }
                ],
                total: { theoryHours: 15.0, theoryCredit: 15.0, sessionalHours: 0.0, sessionalCredit: 0.00, totalCredit: 15.00 }
            },
            {
                title: "2nd Year 2nd Semester",
                courses: [
                    { sl: 1, code: "MIS 401", title: "Management Information Systems", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MKT 402", title: "Consumer Behavior", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "FIN 403", title: "Investment Analysis", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "ETH 404", title: "Business Ethics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "ECON 405", title: "Managerial Economics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 }
                ],
                total: { theoryHours: 15.0, theoryCredit: 15.0, sessionalHours: 0.0, sessionalCredit: 0.00, totalCredit: 15.00 }
            }
        ]
    },
    {
        year: "Third Year",
        semesters: [
            {
                title: "3rd Year 1st Semester",
                courses: [
                    { sl: 1, code: "ENT 501", title: "Entrepreneurship", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MKT 502", title: "Digital Marketing", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "FIN 503", title: "Financial Markets", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "INTL 504", title: "International Business", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "PROJ 505", title: "Business Research Methods", theoryHours: 2.0, theoryCredit: 2.00, sessionalHours: 3.00, sessionalCredit: 1.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 14.0, theoryCredit: 14.0, sessionalHours: 3.0, sessionalCredit: 1.00, totalCredit: 15.00 }
            },
            {
                title: "3rd Year 2nd Semester",
                courses: [
                    { sl: 1, code: "STRAT 601", title: "Strategic Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "BDA 602", title: "Business Data Analytics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "ELEC 603", title: "Business Elective I", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "SCM 604", title: "Supply Chain Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "PROJ 605", title: "Business Case Analysis", theoryHours: 2.0, theoryCredit: 2.00, sessionalHours: 3.00, sessionalCredit: 1.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 14.0, theoryCredit: 14.0, sessionalHours: 3.0, sessionalCredit: 1.00, totalCredit: 15.00 }
            }
        ]
    },
    {
        year: "Fourth Year",
        semesters: [
            {
                title: "4th Year 1st Semester",
                courses: [
                    { sl: 1, code: "CRM 701", title: "Customer Relationship Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "ELEC 702", title: "Business Elective II", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "ELEC 703", title: "Business Elective III", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "LEAD 704", title: "Leadership and Change Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "PROJ 705", title: "Capstone Project I", theoryHours: 1.0, theoryCredit: 1.00, sessionalHours: 6.00, sessionalCredit: 2.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 13.0, theoryCredit: 13.0, sessionalHours: 6.0, sessionalCredit: 2.00, totalCredit: 15.00 }
            },
            {
                title: "4th Year 2nd Semester",
                courses: [
                    { sl: 1, code: "INNO 801", title: "Innovation Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "FINP 802", title: "Financial Planning and Wealth Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "ELEC 803", title: "Business Elective IV", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "ENTP 804", title: "Business Incubation and Startup", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "PROJ 805", title: "Capstone Project II", theoryHours: 1.0, theoryCredit: 1.00, sessionalHours: 6.00, sessionalCredit: 2.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 13.0, theoryCredit: 13.0, sessionalHours: 6.0, sessionalCredit: 2.00, totalCredit: 15.00 }
            }
        ]
    }
];

// MBA Curriculum (Program ID: 4)
const mbaCurriculum: ICurriculumData = [
    {
        year: "First Year",
        semesters: [
            {
                title: "1st Semester",
                courses: [
                    { sl: 1, code: "MBA 501", title: "Managerial Economics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MBA 502", title: "Financial Accounting & Reporting", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "MBA 503", title: "Organizational Behavior & Leadership", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MBA 504", title: "Marketing Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MBA 505", title: "Business Analytics & Decision Making", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 }
                ],
                total: { theoryHours: 15.0, theoryCredit: 15.0, sessionalHours: 0.0, sessionalCredit: 0.00, totalCredit: 15.00 }
            },
            {
                title: "2nd Semester",
                courses: [
                    { sl: 1, code: "MBA 511", title: "Corporate Finance", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MBA 512", title: "Strategic Management & Competitive Analysis", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "MBA 513", title: "Operations & Supply Chain Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MBA 514", title: "Global Business Strategy", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MBA 515", title: "Business Research Methods", theoryHours: 2.0, theoryCredit: 2.00, sessionalHours: 3.00, sessionalCredit: 1.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 14.0, theoryCredit: 14.0, sessionalHours: 3.0, sessionalCredit: 1.00, totalCredit: 15.00 }
            }
        ],
    },
    {
        year: "Second Year",
        yearNotes: "Students choose one specialization track for their second year studies.",
        semesters: [
            {
                title: "3rd Semester - Strategic Management Track",
                courses: [
                    { sl: 1, code: "MBA 601", title: "Corporate Governance & Ethics", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MBA 602", title: "Mergers, Acquisitions & Corporate Restructuring", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "MBA 603", title: "Strategic Innovation & Entrepreneurship", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MBA 604", title: "Elective I: Strategic Leadership", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MBA 605", title: "Management Consulting Project I", theoryHours: 1.0, theoryCredit: 1.00, sessionalHours: 6.00, sessionalCredit: 2.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 13.0, theoryCredit: 13.0, sessionalHours: 6.0, sessionalCredit: 2.00, totalCredit: 15.00 },
                notes: "This semester is for students specializing in Strategic Management track."
            },
            {
                title: "4th Semester - Strategic Management Track",
                courses: [
                    { sl: 1, code: "MBA 611", title: "Digital Transformation Strategy", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MBA 612", title: "Elective II: Organizational Change Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "MBA 613", title: "Elective III: Business Sustainability & ESG", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MBA 614", title: "Executive Leadership Seminar", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MBA 615", title: "Management Consulting Project II", theoryHours: 1.0, theoryCredit: 1.00, sessionalHours: 6.00, sessionalCredit: 2.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 13.0, theoryCredit: 13.0, sessionalHours: 6.0, sessionalCredit: 2.00, totalCredit: 15.00 },
                notes: "Continuation of the Strategic Management specialization track."
            }
        ],
    },
    {
        year: "Second Year (Alternative Tracks)",
        yearNotes: "Alternative tracks available for students choosing Finance or Digital Transformation specializations.",
        semesters: [
            {
                title: "3rd Semester - Finance Track",
                courses: [
                    { sl: 1, code: "MBA 621", title: "Advanced Financial Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MBA 622", title: "Investment Analysis & Portfolio Management", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "MBA 623", title: "Financial Markets & Institutions", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MBA 624", title: "Elective I: International Finance", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MBA 625", title: "Finance Capstone Project I", theoryHours: 1.0, theoryCredit: 1.00, sessionalHours: 6.00, sessionalCredit: 2.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 13.0, theoryCredit: 13.0, sessionalHours: 6.0, sessionalCredit: 2.00, totalCredit: 15.00 },
                notes: "This semester is for students specializing in Finance track."
            },
            {
                title: "3rd Semester - Digital Transformation Track",
                courses: [
                    { sl: 1, code: "MBA 641", title: "Digital Business Models", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 2, code: "MBA 642", title: "Data Analytics for Business Decision-Making", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 3, code: "MBA 643", title: "Digital Marketing Strategy", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 4, code: "MBA 644", title: "Elective I: AI in Business", theoryHours: 3.0, theoryCredit: 3.00, sessionalHours: null, sessionalCredit: null, totalCredit: 3.00 },
                    { sl: 5, code: "MBA 645", title: "Digital Transformation Project I", theoryHours: 1.0, theoryCredit: 1.00, sessionalHours: 6.00, sessionalCredit: 2.00, totalCredit: 3.00 }
                ],
                total: { theoryHours: 13.0, theoryCredit: 13.0, sessionalHours: 6.0, sessionalCredit: 2.00, totalCredit: 15.00 },
                notes: "This semester is for students specializing in Digital Transformation track."
            }
        ]
    }
];

// Create program-curriculum mappings
const bbaProgramCurriculum: IProgramCurriculum = {
    programInfo: bbaProgramInfo,
    curriculum: bbaCurriculum
};

const mbaProgramCurriculum: IProgramCurriculum = {
    programInfo: mbaProgramInfo,
    curriculum: mbaCurriculum
};

// Function to get curriculum based on program ID
const getCurriculumByProgramId = (programId: number): ICurriculumData => {
    switch (programId) {
        case 1:
            return bbaCurriculum;
        case 4:
            return mbaCurriculum;
        default:
            return bbaCurriculum; // Default fallback
    }
};

// Function to get full program curriculum data
const getProgramCurriculumById = (programId: number): IProgramCurriculum | null => {
    switch (programId) {
        case 1:
            return bbaProgramCurriculum;
        case 4:
            return mbaProgramCurriculum;
        default:
            return null;
    }
};

export { getCurriculumByProgramId, getProgramCurriculumById };
export default getCurriculumByProgramId;