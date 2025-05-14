import { ProgramDataType } from "@/interFace/interFace";

//course thumb image
import courseThumbOne from '../../public/assets/images/course/bba.jpg';
import courseThumbFour from '../../public/assets/images/course/course-thumb-4.webp';
import courseThumbFive from '../../public/assets/images/course/course-thumb-5.webp';
import courseThumbSix from '../../public/assets/images/course/course-thumb-6.webp';

//course shape
import courseShapeOne from '../../public/assets/images/course/course-shape-1.webp';
import courseShapeTwo from '../../public/assets/images/course/course-shape-2.webp';
import courseShapeThree from '../../public/assets/images/course/course-shape-3.webp';
import courseShapeFour from '../../public/assets/images/course/course-shape-4.webp';
import courseShapeFive from '../../public/assets/images/course/course-shape-5.webp';
import courseShapeSix from '../../public/assets/images/course/course-shape-6.webp';

// text shape
import cscTextShape from '../../public/assets/images/course/csc.webp';
import bapTextShape from '../../public/assets/images/course/bap.webp';
import bbaTextShape from '../../public/assets/images/course/bba.webp';
import mscdsTextShape from '../../public/assets/images/course/mscds.webp';
import mphTextShape from '../../public/assets/images/course/mph.webp';
import aiTextShape from '../../public/assets/images/course/ai.webp';


export const programData: ProgramDataType[] = [
    {
        id: 1,
        program: 'undergraduate',
        
        title: "BBA",
        description: "Learn programming, algorithms, and computational theory to drive the future of technology.",
        duration: "4 Years",
        credits: "12 Credits",
        image: courseThumbOne,
        shapeImage: courseShapeOne,
        textImage: cscTextShape,
    },
 
    {
        id: 4,
        program: 'graduate',
       
        title: "Master of Science in Data Science",
        description: "Master statistical methods, machine learning, and big data analysis to uncover insights in data-driven fields.",
        duration: "2 Years",
        credits: "16 Credits",
        image: courseThumbFour,
        shapeImage: courseShapeFour,
        textImage: mscdsTextShape,
    },
    
];

export default programData;

