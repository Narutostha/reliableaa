// curriculum-data.ts

interface Course {
  sl: number;
  code: string;
  title: string;
  totalCredit: number;
}

interface Semester {
  title: string;
  notes?: string;
  courses: Course[];
  total: {
    totalCredit: number;
  };
}

interface CurriculumYear {
  year: string;
  yearNotes?: string;
  semesters: Semester[];
}

const curriculumMap: Record<number, CurriculumYear[]> = {
  1: [
    {
      year: "Year 1",
      semesters: [
        {
          title: "Semester 1",
          courses: [
            { sl: 1, code: "ENG 111", title: "Business English - I", totalCredit: 3 },
            { sl: 2, code: "BMT 112", title: "Business Mathematics – I", totalCredit: 3 },
            { sl: 3, code: "MGT 113", title: "Fundamentals of Business Management", totalCredit: 3 },
            { sl: 4, code: "ECO 114", title: "Principles of Microeconomics", totalCredit: 3 },
            { sl: 5, code: "ICT 115", title: "Fundamentals of Information Technology", totalCredit: 3 },
          ],
          total: { totalCredit: 15 },
        },
        {
          title: "Semester 2",
          courses: [
            { sl: 1, code: "ENG 121", title: "Business English - II", totalCredit: 3 },
            { sl: 2, code: "BMT 122", title: "Business Mathematics – II", totalCredit: 3 },
            { sl: 3, code: "ECO 123", title: "Principles of Macroeconomics", totalCredit: 3 },
            { sl: 4, code: "ACC 124", title: "Financial Accounting", totalCredit: 3 },
            { sl: 5, code: "SOC 125", title: "Sociology", totalCredit: 3 },
          ],
          total: { totalCredit: 15 },
        },
      ],
    },
    {
      year: "Year 2",
      semesters: [
        {
          title: "Semester 3",
          courses: [
            { sl: 1, code: "PSY 231", title: "Fundamentals of Psychology", totalCredit: 3 },
            { sl: 2, code: "ENG 232", title: "Business Communications", totalCredit: 3 },
            { sl: 3, code: "STT 233", title: "Business Statistics", totalCredit: 3 },
            { sl: 4, code: "ACC 234", title: "Financial Accounting II", totalCredit: 3 },
            { sl: 5, code: "MKT 235", title: "Fundamentals of Marketing", totalCredit: 3 },
            { sl: 6, code: "PRC 236", title: "Practicum in Business Communication", totalCredit: 1 },
          ],
          total: { totalCredit: 16 },
        },
        {
          title: "Semester 4",
          courses: [
            { sl: 1, code: "MGT 346", title: "Organizational Behaviour", totalCredit: 3 },
            { sl: 2, code: "MGT 343", title: "Fundamentals of Marketing", totalCredit: 3 },
            { sl: 3, code: "MGT 344", title: "Human Resource Management", totalCredit: 3 },
            { sl: 4, code: "MGT 341", title: "Business Statistics II", totalCredit: 3 },
            { sl: 5, code: "MGT 342", title: "Corporate Finance I", totalCredit: 3 },
          ],
          total: { totalCredit: 15 },
        },
      ],
    },
    {
      year: "Year 3",
      semesters: [
        {
          title: "Semester 5",
          courses: [
            { sl: 1, code: "MGT 352", title: "Business Research Methods", totalCredit: 3 },
            { sl: 2, code: "MGT 353", title: "Corporate Finance II", totalCredit: 3 },
            { sl: 3, code: "MGT 351", title: "Business Ethics and Corporate Social Responsibility", totalCredit: 3 },
            { sl: 4, code: "MGT 354", title: "International Business", totalCredit: 3 },
            { sl: 5, code: "MGT 355", title: "Operation Management", totalCredit: 3 },
            { sl: 6, code: "MGT 356", title: "Strategic Management", totalCredit: 3 },
          ],
          total: { totalCredit: 18 },
        },
        {
          title: "Semester 6",
          courses: [
            { sl: 1, code: "MGT 365", title: "Banking and Insurance", totalCredit: 3 },
            { sl: 2, code: "MGT 362", title: "Cost and Management accounting", totalCredit: 3 },
            { sl: 3, code: "MGT 363", title: "Entrepreneurship Management", totalCredit: 3 },
            { sl: 4, code: "MGT 366", title: "Internship", totalCredit: 3 },
            { sl: 5, code: "MGT 364", title: "Management Information Systems", totalCredit: 3 },
            { sl: 6, code: "MGT 361", title: "Nepalese Business Environment", totalCredit: 3 },
          ],
          total: { totalCredit: 18 },
        },
      ],
    },
    {
      year: "Year 4",
      semesters: [
        {
          title: "Semester 7",
          courses: [
            { sl: 1, code: "MGT 372", title: "International Finance", totalCredit: 3 },
            { sl: 2, code: "MGT 373", title: "Project Management", totalCredit: 3 },
            { sl: 3, code: "MGT 375", title: "Quantitative Techniques", totalCredit: 3 },
            { sl: 4, code: "MGT 374", title: "Service Marketing", totalCredit: 3 },
            { sl: 5, code: "MGT 371", title: "Taxation in Nepal", totalCredit: 3 },
          ],
          total: { totalCredit: 15 },
        },
        {
          title: "Semester 8",
          courses: [
            { sl: 1, code: "MGT 383", title: "Advertising and Promotion Management", totalCredit: 3 },
            { sl: 2, code: "FIN 382", title: "Advance Corporate Finance", totalCredit: 3 },
            { sl: 3, code: "ACC 382", title: "Principle of auditing and practice", totalCredit: 3 },
            { sl: 4, code: "ACC 383", title: "Corporate Accounting", totalCredit: 3 },
            { sl: 5, code: "MGT 384", title: "Field Works", totalCredit: 3 },
            { sl: 6, code: "FIN 383", title: "Management of Financial Institutions", totalCredit: 3 },
            { sl: 7, code: "FIN 381", title: "Investment and Portfolio Management", totalCredit: 3 },
            { sl: 8, code: "MKT 382", title: "Sales Management", totalCredit: 3 },
            { sl: 9, code: "MKT 381", title: "Social Marketing", totalCredit: 3 },
            { sl: 10, code: "ACC 381", title: "Advanced Cost Accounting", totalCredit: 3 },
          ],
          total: { totalCredit: 30 },
        },
      ],
    },
  ],

  4: [
    {
      year: "Year 1",
      semesters: [
        {
          title: "Semester I",
          courses: [
            { sl: 1, code: "MGT 501", title: "Managerial Communication", totalCredit: 3 },
            { sl: 2, code: "MGT 502", title: "Emerging Concepts in Management", totalCredit: 2 },
            { sl: 3, code: "STT 512", title: "Statistics for Management", totalCredit: 3 },
            { sl: 4, code: "ECO 522", title: "Managerial Economics", totalCredit: 2 },
            { sl: 5, code: "MGT 532", title: "Organizational Behaviour", totalCredit: 2 },
            { sl: 6, code: "MGT 535", title: "Business, Society and Ethics", totalCredit: 2 },
            { sl: 7, code: "MKT 551", title: "Marketing Management", totalCredit: 2 },
          ],
          total: { totalCredit: 16 },
        },
        {
          title: "Semester II",
          courses: [
            { sl: 1, code: "ACC 511", title: "Managerial Accounting and Control", totalCredit: 3 },
            { sl: 2, code: "ACC 512", title: "Financial Reporting and Analysis", totalCredit: 3 },
            { sl: 3, code: "MGT 533", title: "Human Resource Management", totalCredit: 2 },
            { sl: 4, code: "MGT 534", title: "International Business", totalCredit: 2 },
            { sl: 5, code: "FIN 541", title: "Financial Management", totalCredit: 3 },
            { sl: 6, code: "MIS 554", title: "Management Information System", totalCredit: 3 },
          ],
          total: { totalCredit: 16 },
        },
      ],
    },
    {
      year: "Year 2",
      semesters: [

        {
          title: "Semester III",
          notes: "Students must choose ONE subject from any ONE concentration area for Concentration I",
          courses: [
            // Core Courses
            { sl: 1, code: "RES 631", title: "Business Research Methods", totalCredit: 2 },
            { sl: 2, code: "MGT 632", title: "Operations Management and Supply Chain", totalCredit: 2 },
            { sl: 3, code: "MIS 633", title: "E-Business", totalCredit: 2 },
            { sl: 4, code: "ENT 634", title: "Entrepreneurship", totalCredit: 3 },
            { sl: 5, code: "INT 635", title: "Internship", totalCredit: 2 },
            // Concentration I - Banking and Finance
            { sl: 6, code: "FIN 636", title: "Financial Markets and Institutions", totalCredit: 3 },
            { sl: 7, code: "FIN 637", title: "International Financial Management", totalCredit: 3 },
            // Concentration I - Marketing
            { sl: 8, code: "MKT 636", title: "Consumer Behaviour", totalCredit: 3 },
            { sl: 9, code: "MKT 637", title: "Advertising and Sales Promotion", totalCredit: 3 },
            // Concentration I - Accounting
            { sl: 10, code: "ACC 636", title: "Corporate Accounting", totalCredit: 3 },
            { sl: 11, code: "ACC 637", title: "Corporate Taxation", totalCredit: 3 },
            // Concentration I - Human Resource Management
            { sl: 12, code: "HRM 636", title: "Employment Relations", totalCredit: 3 },
            { sl: 13, code: "HRM 637", title: "Human Resource Development", totalCredit: 3 },
          ],
          total: { totalCredit: 14 }, // 11 core credits + 3 concentration credits
        },
        {
          title: "Semester IV",
          notes: "Students must choose ONE subject from Concentration II and ONE seminar from Concentration III",
          courses: [
            // Core Courses
            { sl: 1, code: "MGT 641", title: "Strategic Management", totalCredit: 3 },
            { sl: 2, code: "ENT 642", title: "Business Plan for New Venture Development - Seminar", totalCredit: 1 },
            { sl: 3, code: "ACC 643", title: "Taxation and Tax Planning - Workshop", totalCredit: 1 },
            { sl: 4, code: "RES 649", title: "Thesis", totalCredit: 3 },
            // Concentration II - Banking and Finance
            { sl: 5, code: "FIN 644", title: "Investment Analysis and Portfolio Management", totalCredit: 3 },
            { sl: 6, code: "FIN 645", title: "Commercial Bank Management", totalCredit: 3 },
            { sl: 7, code: "FIN 646", title: "Marketing of Financial Services", totalCredit: 3 },
            // Concentration II - Marketing
            { sl: 8, code: "MKT 644", title: "Service Marketing", totalCredit: 3 },
            { sl: 9, code: "MKT 645", title: "Social Marketing", totalCredit: 3 },
            { sl: 10, code: "MKT 646", title: "Strategic Brand Management", totalCredit: 3 },
            // Concentration II - Accounting
            { sl: 11, code: "ACC 644", title: "Accounting Information System", totalCredit: 3 },
            { sl: 12, code: "ACC 645", title: "Advanced Management Accounting", totalCredit: 3 },
            // Concentration II - Human Resource Management
            { sl: 13, code: "HRM 644", title: "Performance Management", totalCredit: 3 },
            { sl: 14, code: "HRM 645", title: "Conflict Management and Negotiations", totalCredit: 3 },
            // Concentration III - Seminars
            { sl: 15, code: "FIN 648", title: "Seminar in Banking and Finance", totalCredit: 3 },
            { sl: 16, code: "MKT 648", title: "Seminar in Marketing", totalCredit: 3 },
            { sl: 17, code: "ENT 648", title: "Seminar in Accounting", totalCredit: 3 },
            { sl: 18, code: "HRM 648", title: "Seminar in Human Resource Management", totalCredit: 3 },
          ],
          total: { totalCredit: 14 }, // 8 core credits + 3 concentration II + 3 seminar credits
        },
      ],
    },
  ],
};

export const getCurriculumByProgramId = (programId: number): CurriculumYear[] => {
  return curriculumMap[programId] || [];
};