import { IExecutiveLeadersType } from "@/interFace/interFace";
import uniProfessorImg from '../../public/assets/images/instructor/uni-professor.webp';
import uniProfessorImgTwo from '../../public/assets/images/instructor/uni-professor-2.webp';
import instructorImgTwo from '../../public/assets/images/instructor/instructor-thumb-02.webp';
import instructorImgFour from '../../public/assets/images/instructor/instructor-thumb-04.webp';
import instructorImgFive from '../../public/assets/images/instructor/instructor-thumb-05.webp';
import instructorImgSix from '../../public/assets/images/instructor/instructor-thumb-06.webp';
export const executiveLeadersData: IExecutiveLeadersType[] = [
  {
    id: 1,
    image: uniProfessorImg,
    name: 'Dr. Ram Prasad Acharya',
    designation: 'Dean, Faculty of Management (MBA)',
    instituteOne: 'Ph.D., Tribhuvan University, Nepal',
    instituteTwo: 'Post-Doc., Delhi University, India',
    email: 'ram.acharya@reliable.edu.np',
    type: 'instructor'
  },
  {
    id: 2,
    image: uniProfessorImgTwo,
    name: 'Prof. Manisha Shrestha',
    designation: 'Chair, Department of Business Administration (BBA)',
    instituteOne: 'Ph.D., Kathmandu University, Nepal',
    instituteTwo: 'MBA, University of Colombo, Sri Lanka',
    email: 'manisha.shrestha@reliable.edu.np',
    type: 'instructor'
  },
  {
    id: 3,
    image: instructorImgTwo,
    name: 'Dr. Bishal Rijal',
    designation: 'Program Coordinator, MBA',
    instituteOne: 'MBA, Tribhuvan University, Nepal',
    instituteTwo: 'Ph.D., Purbanchal University, Nepal',
    email: 'bishal.rijal@reliable.edu.np',
    type: 'instructor'
  },
  {
    id: 4,
    image: instructorImgFour,
    name: 'Dr. Sandeep Gautam',
    designation: 'Chair, Dept. of Accounting & Finance',
    instituteOne: 'Ph.D., Kathmandu University, Nepal',
    instituteTwo: 'MBA, Pokhara University, Nepal',
    email: 'sandeep.gautam@reliable.edu.np',
    type: 'instructor'
  },
  {
    id: 5,
    image: instructorImgFive,
    name: 'Prof. Anuja Baral',
    designation: 'Chair, Department of Economics',
    instituteOne: 'M.Phil., Tribhuvan University, Nepal',
    instituteTwo: 'Ph.D., University of Delhi, India',
    email: 'anuja.baral@reliable.edu.np',
    type: 'instructor'
  },
  {
    id: 6,
    image: instructorImgSix,
    name: 'Dr. Nishant Karki',
    designation: 'Chair, Department of Marketing',
    instituteOne: 'Ph.D., Kathmandu University, Nepal',
    instituteTwo: 'MBA, University of Colombo, Sri Lanka',
    email: 'nishant.karki@reliable.edu.np',
    type: 'instructor'
  }
];
