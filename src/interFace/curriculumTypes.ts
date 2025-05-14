export interface Course {
  sl: number;
  code: string;
  title: string;
  theoryHours: number | null;
  theoryCredit: number | null;
  sessionalHours: number | null;
  sessionalCredit: number | null;
  totalCredit: number;
  description?: string;          // Optional course description
  prerequisites?: string[];      // Optional list of prerequisite courses
  corequisites?: string[];       // Optional list of corequisite courses
}

export interface Semester {
  title: string;
  courses: Course[];
  total: {
    theoryHours: number;
    theoryCredit: number;
    sessionalHours: number;
    sessionalCredit: number;
    totalCredit: number;
  };
  notes?: string;                // Optional semester-specific notes
}

export interface YearData {
  year: string;
  semesters: Semester[];
  yearNotes?: string;            // Optional year-specific notes
}

export interface SpecializationTrack {
  id: string;
  name: string;
  description: string;
  courses: Course[];             // Courses specific to this specialization track
}

export interface ProgramInfo {
  id: number;                    // Program ID (1 for BBA, 4 for MBA, etc.)
  name: string;                  // Full program name
  code: string;                  // Program code
  degreeType: 'undergraduate' | 'graduate' | 'diploma' | 'certificate';
  duration: string;              // Program duration (e.g., "4 Years", "2 Years")
  totalCredits: number;          // Total program credits
  description: string;           // Program description
  admissionRequirements: string[]; // List of admission requirements
  programObjectives: string[];   // List of program objectives
  careerOpportunities: string[]; // List of career opportunities
  specializations?: SpecializationTrack[]; // Optional specialization tracks (for MBA)
}

export type ICurriculumData = YearData[];

export interface IProgramCurriculum {
  programInfo: ProgramInfo;
  curriculum: ICurriculumData;
}