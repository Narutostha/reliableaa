import { IBlog } from "@/interFace/interFace";
import blogImg1 from "../../public/assets/images/blog/blog-thumb-01.webp";
import blogImg2 from "../../public/assets/images/blog/blog-thumb-02.webp";
import blogImg3 from "../../public/assets/images/blog/blog-thumb-03.webp";
//university blog image
import blogImg4 from "../../public/assets/images/blog/blog-thumb-04.webp";
import blogImg5 from "../../public/assets/images/blog/blog-thumb-05.webp";
import blogImg6 from "../../public/assets/images/blog/blog-thumb-06.webp";
//modern scholling image
import blogImg7 from "../../public/assets/images/blog/blog-thumb-07.webp";
import blogImg8 from "../../public/assets/images/blog/blog-thumb-08.webp";
import blogImg9 from "../../public/assets/images/blog/blog-thumb-09.webp";
//shop blog image
import blogImg10 from "../../public/assets/images/blog/blog-thumb-23.webp";
import blogImg11 from "../../public/assets/images/blog/blog-thumb-20.webp";
import blogImg12 from "../../public/assets/images/blog/blog-thumb-21.webp";
import blogImg13 from "../../public/assets/images/blog/blog-thumb-22.webp";
//blog image
import blogImg14 from "../../public/assets/images/blog/blog-thumb-10.webp";
import blogImg15 from "../../public/assets/images/blog/blog-thumb-16.webp";
//blog list
import blogImg16 from "../../public/assets/images/blog/blog-thumb-17.webp"
import blogImg17 from "../../public/assets/images/blog/blog-thumb-18.webp"
import blogImg18 from "../../public/assets/images/blog/blog-thumb-19.webp"
const blogData: IBlog[] = [
  {
    id: 1,
    image: blogImg1,
    title: "Why BBA at Reliable College is a Smart Choice in Nepal",
    authorName: "Reliable College",
    date: "June 11 2025",
    description: "Discover how our BBA program prepares Nepali students to tackle business challenges with confidence, leadership, and innovation."
  },
  {
    id: 2,
    image: blogImg2,
    title: "Pursuing an MBA at Reliable College: Advancing Careers in Nepal",
    authorName: "Reliable College",
    date: "June 10 2025",
    description: "Learn how our MBA curriculum is transforming mid-career professionals into impactful leaders in Nepal’s growing business environment."
  },
  {
    id: 3,
    image: blogImg3,
    title: "Trends in Business Education: BBA & MBA in Nepal",
    authorName: "Reliable College",
    date: "June 9 2025",
    description: "Explore how modern business education at Reliable College is aligned with industry demand and international trends for Nepali graduates."
  },
  {
    id: 4,
    image: blogImg4,
    date: '15',
    month: 'Jan',
    authorName: 'Reliable College',
    comments: 0,
    title: 'How to Choose the Right Specialization in BBA or MBA'
  },
  {
    id: 5,
    image: blogImg5,
    date: '13',
    month: 'Aug',
    authorName: 'Reliable College',
    comments: 1,
    title: 'The Value of Joining Clubs in Business School at Reliable'
  },
  {
    id: 6,
    image: blogImg6,
    date: '20',
    month: 'Feb',
    authorName: 'Reliable College',
    comments: 3,
    title: 'International Business Exposure: Reliable’s Exchange Programs'
  },
  {
    id: 7,
    image: blogImg7,
    title: "How Reliable’s Learning Environment Shapes Tomorrow’s Leaders",
    authorName: "Reliable College",
    date: "Feb 25 2025",
    description: "A closer look at our teaching methods, mentorship approach, and student empowerment initiatives for BBA/MBA students in Nepal."
  },
  {
    id: 8,
    image: blogImg8,
    title: "Innovative Learning Approaches at Reliable College",
    authorName: "Reliable College",
    date: "March 08 2025",
    description: "How we’re redesigning business education using case studies, simulation games, and collaborative learning in the Nepali context."
  },
  {
    id: 9,
    image: blogImg9,
    title: "Going Global: Preparing BBA & MBA Students for the World",
    authorName: "Reliable College",
    date: "April 12 2025",
    description: "Discover how we infuse global thinking and local relevance in our BBA and MBA programs at Reliable."
  },
  {
    id: 10,
    image: blogImg10,
    badge: "Courses",
    title: "Top 10 Business Books Recommended by Reliable Faculty",
    authorName: "Reliable College",
    date: "May 15 2025"
  },
  {
    id: 11,
    image: blogImg11,
    badge: "Courses",
    title: "Create Your Ideal Study Space as a Business Student",
    authorName: "Reliable College",
    date: "May 14 2025"
  },
  {
    id: 12,
    image: blogImg12,
    badge: "Courses",
    title: "Explore Business Genres: Find Your Passion in BBA/MBA",
    authorName: "Reliable College",
    date: "May 13 2025"
  },
  {
    id: 13,
    image: blogImg13,
    badge: "Courses",
    title: "Top 5 Reads for Personal and Professional Growth",
    authorName: "Reliable College",
    date: "May 12 2025"
  },
  {
    id: 14,
    image: blogImg1,
    title: "Mastering Online Learning for MBA Students at Reliable",
    authorName: "Reliable College",
    date: "10 Oct, 2025"
  },
  {
    id: 15,
    image: blogImg4,
    title: "The Future of Higher Business Education in Nepal",
    authorName: "Reliable College",
    date: "25 Sep, 2025"
  },
  {
    id: 16,
    image: blogImg14,
    title: "Early Entrepreneurial Skills: Lessons for BBA Freshers",
    authorName: "Reliable College",
    date: "05 Aug, 2025"
  },
  {
    id: 17,
    type: 'image',
    image: blogImg15,
    authorName: 'Reliable College',
    date: '27 Oct 2025',
    comments: 0,
    buttonShow: true,
    title: 'Transforming Business Education Through Innovation',
    description: 'See how Reliable College is revolutionizing business learning with new techniques for engagement, reflection, and practical application.',
    daynamicLink: true,
    boxShadowClass: true
  },
  {
    id: 18,
    type: 'slider',
    images: [blogImg1, blogImg2, blogImg3],
    authorName: 'Reliable College',
    date: '27 Oct 2025',
    comments: 0,
    title: 'Visual Highlights from BBA and MBA Events at Reliable',
    description: 'A glimpse into the workshops, guest lectures, and startup demos that make learning at Reliable truly engaging.',
    buttonShow: true,
    daynamicLink: true,
    boxShadowClass: true
  },
  {
    id: 19,
    type: 'quote',
    quote: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
    authorName: 'Reliable College',
    boxShadowClass: false
  },
  {
    id: 20,
    type: 'video',
    thumbnail: blogImg15,
    title: 'Why Emotional Intelligence Matters in Business',
    description: 'Reliable’s MBA module on emotional intelligence shows how leadership starts with empathy, resilience, and self-awareness.',
    buttonShow: true,
    buttonLink: true,
    boxShadowClass: true
  },
  {
    id: 21,
    type: 'audio',
    title: 'Building Critical Thinking in Business School',
    description: 'Practical approaches at Reliable College to enhance decision-making and strategic analysis among students.',
    buttonShow: true,
    buttonLink: true,
    boxShadowClass: true
  },
  {
    id: 22,
    type: 'text',
    title: 'Inclusive Education for Future Business Leaders',
    description: 'Reliable College promotes inclusivity through student clubs, scholarships, and mentorship for diverse learners.',
    buttonShow: true,
    buttonLink: true,
    boxShadowClass: true
  },
  {
    id: 23,
    badge: "Online Course",
    image: blogImg5,
    title: "Online Learning for BBA Students: A Nepali Perspective",
    authorName: "Reliable College",
    date: "June 8, 2025",
    comments: 12,
    description: "Explore how Nepali students are benefiting from Reliable’s hybrid BBA delivery model with digital tools and classroom learning."
  },
  {
    id: 24,
    badge: "University",
    image: blogImg6,
    title: "Top Trends in University-Level Business Programs",
    authorName: "Reliable College",
    date: "June 7, 2025",
    comments: 12,
    description: "A dive into Reliable’s continuous curriculum updates and real-world alignment for BBA and MBA students."
  },
  {
    id: 25,
    badge: "Kindergarten",
    image: blogImg14,
    title: "What Business Students Can Learn from Play-Based Learning",
    authorName: "Reliable College",
    date: "June 6, 2025",
    comments: 12,
    description: "Early learning principles like collaboration, curiosity, and problem-solving are still key at the BBA level."
  },
  {
    id: 26,
    badge: "Modern Schooling",
    image: blogImg7,
    title: "Technology & Teaching in Business School Classrooms",
    authorName: "Reliable College",
    date: "June 5, 2025",
    comments: 12,
    description: "At Reliable, classrooms are digital, interactive, and future-ready, just like the world students will enter."
  },
  {
    id: 27,
    badge: "Quran Learning",
    image: blogImg8,
    title: "Ethics in Business: What We Can Learn from Faith",
    authorName: "Reliable College",
    date: "June 4, 2025",
    comments: 12,
    description: "Exploring how moral foundations, including those rooted in faith, shape future ethical entrepreneurs."
  },
  {
    id: 28,
    badge: "Online Course",
    image: blogImg16,
    title: "Learning Beyond Borders: Reliable’s Virtual MBA Advantage",
    authorName: "Reliable College",
    date: "June 3, 2025",
    comments: 12,
    description: "Reliable’s flexible delivery mode ensures working professionals in Nepal never miss a step in their growth journey."
  },
  {
    id: 29,
    badge: "University",
    image: blogImg17,
    title: "Adapting to Change: Reliable’s Post-COVID MBA Strategy",
    authorName: "Reliable College",
    date: "June 2, 2025",
    comments: 12,
    description: "Post-pandemic education means digital tools, industry projects, and flexible exams—Reliable is ready."
  },
  {
    id: 30,
    badge: "Kindergarten",
    image: blogImg18,
    title: "Simplicity Wins: What Kindergartens Teach MBA Grads",
    authorName: "Reliable College",
    date: "June 1, 2025",
    comments: 12,
    description: "In business and life, fundamentals matter. We connect childhood values to complex leadership challenges."
  }
];

export default blogData;
