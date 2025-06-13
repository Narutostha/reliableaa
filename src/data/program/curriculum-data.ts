// curriculum-data.ts

interface Course {
  sl: number;
  code: string;
  title: string;
  theoryHours: number | null;
  theoryCredit: number | null;
  sessionalHours: number | null;
  sessionalCredit: number | null;
  totalCredit: number;
}

interface Semester {
  title: string;
  notes?: string;
  courses: Course[];
  total: {
    theoryHours: number;
    theoryCredit: number;
    sessionalHours: number;
    sessionalCredit: number;
    totalCredit: number;
  };
}

interface CurriculumYear {
  year: string;
  yearNotes?: string;
  semesters: Semester[];
}

const curriculumMap: Record<number, CurriculumYear[]> = {
  1: Array.from({ length: 4 }, (_, y) => ({
    year: `Year ${y + 1}`,
    semesters: Array.from({ length: 2 }, (_, s) => {
      const base = y * 2 + s + 1;
      return {
        title: `Semester ${base}`,
        courses: [
          {
            sl: 1,
            code: `BBA${base}01`,
            title: "Sample BBA Course 1",
            theoryHours: 3,
            theoryCredit: 3,
            sessionalHours: 1,
            sessionalCredit: 1,
            totalCredit: 4,
          },
          {
            sl: 2,
            code: `BBA${base}02`,
            title: "Sample BBA Course 2",
            theoryHours: 3,
            theoryCredit: 3,
            sessionalHours: 0,
            sessionalCredit: 0,
            totalCredit: 3,
          },
        ],
        total: {
          theoryHours: 6,
          theoryCredit: 6,
          sessionalHours: 1,
          sessionalCredit: 1,
          totalCredit: 7,
        },
      };
    }),
  })),

  4: Array.from({ length: 2 }, (_, y) => ({
    year: `Year ${y + 1}`,
    semesters: Array.from({ length: 2 }, (_, s) => {
      const base = y * 2 + s + 1;
      return {
        title: `Semester ${base}`,
        courses: [
          {
            sl: 1,
            code: `MBA${base}01`,
            title: "Sample MBA Course 1",
            theoryHours: 3,
            theoryCredit: 3,
            sessionalHours: 1,
            sessionalCredit: 1,
            totalCredit: 4,
          },
          {
            sl: 2,
            code: `MBA${base}02`,
            title: "Sample MBA Course 2",
            theoryHours: 2,
            theoryCredit: 2,
            sessionalHours: 1,
            sessionalCredit: 1,
            totalCredit: 3,
          },
        ],
        total: {
          theoryHours: 5,
          theoryCredit: 5,
          sessionalHours: 2,
          sessionalCredit: 2,
          totalCredit: 8,
        },
      };
    }),
  })),
};

export const getCurriculumByProgramId = (programId: number): CurriculumYear[] => {
  return curriculumMap[programId] || [];
};
