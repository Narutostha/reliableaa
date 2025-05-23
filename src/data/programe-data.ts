// Alternative solution: Update program-data.ts to match the existing interface

import { ProgramDataType } from "@/interFace/interFace";

//course thumb image
import courseThumbOne from '../../public/assets/images/course/bba.jpg';
import courseThumbFour from '../../public/assets/images/course/course-thumb-4.webp';

//course shape
import courseShapeOne from '../../public/assets/images/course/course-shape-1.webp';
import courseShapeFour from '../../public/assets/images/course/course-shape-4.webp';

//course text shape
import bbaTextShape from '../../public/assets/images/course/csc.webp';
import mscdsTextShape from '../../public/assets/images/course/mscds.webp';

// Assuming the current ProgramDataType doesn't include 'requirements' and 'highlights'
// Let's create an extended type for local use
interface ExtendedProgramData extends ProgramDataType {
  requirements?: string[];
  highlights?: string[];
}

// Use the extended type for the array
export const programData: ProgramDataType[] = [
    {
        id: 1,
        program: 'undergraduate',
        title: "BBA - Bachelor of Business Administration",
        description: "Develop essential business skills in management, marketing, finance, and entrepreneurship to excel in today's dynamic business environment.",
        duration: "4 Years",
        credits: "120 Credits",
        image: courseThumbOne,
        shapeImage: courseShapeOne,
        textImage: bbaTextShape,
        // Remove the fields not in ProgramDataType or handle them separately
        // requirements and highlights removed
    } as ProgramDataType,
 
    {
        id: 4,
        program: 'graduate',
        title: "MBA - Master of Business Administration",
        description: "Advance your career with our intensive MBA program focused on strategic leadership, global business insights, and data-driven decision making.",
        duration: "2 Years",
        credits: "60 Credits",
        image: courseThumbFour,
        shapeImage: courseShapeFour,
        textImage: mscdsTextShape,
        // Remove the fields not in ProgramDataType or handle them separately
        // requirements and highlights removed
    } as ProgramDataType,
];

// If you need to access the full data with requirements and highlights
export const extendedProgramData: ExtendedProgramData[] = [
    {
        id: 1,
        program: 'undergraduate',
        title: "BBA - Bachelor of Business Administration",
        description: "Develop essential business skills in management, marketing, finance, and entrepreneurship to excel in today's dynamic business environment.",
        duration: "4 Years",
        credits: "120 Credits",
        image: courseThumbOne,
        shapeImage: courseShapeOne,
        textImage: bbaTextShape,
        requirements: [
            "High school diploma or equivalent",
            "Minimum GPA of 2.5",
            "Letter of recommendation"
        ],
        highlights: [
            "Internship opportunities with leading companies",
            "Business case competitions",
            "Entrepreneurship incubator program"
        ]
    },
 
    {
        id: 4,
        program: 'graduate',
        title: "MBA - Master of Business Administration",
        description: "Advance your career with our intensive MBA program focused on strategic leadership, global business insights, and data-driven decision making.",
        duration: "2 Years",
        credits: "60 Credits",
        image: courseThumbFour,
        shapeImage: courseShapeFour,
        textImage: mscdsTextShape,
        requirements: [
            "Bachelor's degree from an accredited institution",
            "Minimum 2 years of professional work experience",
            "GMAT/GRE scores (waivers available)"
        ],
        highlights: [
            "Executive leadership seminar series",
            "Global business immersion experiences",
            "Corporate consulting projects"
        ]
    },
];

export default programData;