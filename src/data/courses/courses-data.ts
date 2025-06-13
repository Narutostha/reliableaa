import { ICourse } from "@/interFace/interFace";
import shapeImg1 from "../../../public/assets/images/course/MBA.png";
import shapeImg2 from "../../../public/assets/images/course/BBA.png";

const coursesData: ICourse[] = [
  {
    id: 4,
    courseName: "MBA",
    image: shapeImg1,
    title: "Master of Business Administration (MBA)",
    courseDescription:
      "The MBA program at Reliable College is designed to develop leadership, analytical thinking, and global business strategies for future managers.",
    creditHours: 66,
    durationYears: 2,
  },
  {
    id: 1,
    courseName: "BBA",
    image: shapeImg2,
    title: "Bachelor of Business Administration (BBA)",
    courseDescription:
      "BBA at Reliable College blends academic theory with practical business knowledge to prepare students for real-world challenges.",
    creditHours: 120,
    durationYears: 4,
  },
 
];

export default coursesData;
