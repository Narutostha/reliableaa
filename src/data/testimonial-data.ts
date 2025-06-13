import { ITestimonial } from "@/interFace/interFace";
import avatar1 from "../../public/assets/images/avatar/avatar.webp";
import avatar2 from "../../public/assets/images/avatar/avatar2.webp";
import avatar3 from "../../public/assets/images/avatar/avatar3.webp";
import avatar4 from "../../public/assets/images/avatar/avatar4.webp";
import testimonialQuote from "../../public/assets/images/shape/testimonial-quotes.webp";
import testimonialQuote2 from "../../public/assets/images/icon/quote-icon.webp";

const testimonialData: ITestimonial[] = [
    {
        id: 1,
        rating: 5,
        content: "The courses on iStudy have transformed my career. The practical projects and expert instructors made learning seamless and enjoyable. Highly recommend it!",
        name: "Sarah Johnson",
        avatar: avatar1,
    },
    {
        id: 2,
        rating: 5,
        content: "iStudy is a game-changer! The flexible schedules and top-notch content allowed me to upskill while managing my busy routine. Thank you, iStudy!",
        name: "James Parker",
        avatar: avatar2,
    },
    {
        id: 3,
        rating: 5,
        content: "Joining iStudy was the best decision I made this year. The course variety and personalized learning paths helped me achieve my professional goals with ease.",
        name: "Emily Davis",
        avatar: avatar3,
    },
    //modern schooling testimonial data
    {
    id: 4,
    rating: 5,
    content: "The BBA program at Reliable College has transformed my son's academic journey. The interactive classes and experienced instructors have made learning both enjoyable and effective.",
    name: "Saraswati Koirala",
    avatar: avatar1,
    designation: "Parent"
},
{
    id: 5,
    rating: 5,
    content: "The modern teaching methods and industry exposure in the MBA course have truly prepared me for the future. Reliable College offers a great balance between academics and practical learning.",
    name: "Bibek Sharma",
    avatar: avatar2,
    designation: "MBA Student"
},
{
    id: 6,
    rating: 5,
    content: "The state-of-the-art infrastructure and digital tools at Reliable College have made learning seamless and engaging. Choosing BBA here has been one of the best decisions of my academic life.",
    name: "Rachana Thapa",
    avatar: avatar3,
    designation: "BBA Student"
},

    //University testimonial data
   {
    id: 4,
    rating: 5,
    content: "Studying BBA at Reliable College has been a life-changing experience for me. The interactive learning environment, supportive faculty, and focus on practical knowledge have helped me grow both personally and professionally.",
    name: "Saraswati Koirala",
    avatar: avatar1,
    designation: "BBA Student"
},

{
    id: 5,
    rating: 5,
    content: "The modern teaching methods and industry exposure in the MBA course have truly prepared me for the future. Reliable College offers a great balance between academics and practical learning.",
    name: "Bibek Sharma",
    avatar: avatar2,
    designation: "MBA Student"
},
{
    id: 6,
    rating: 5,
    content: "The state-of-the-art infrastructure and digital tools at Reliable College have made learning seamless and engaging. Choosing BBA here has been one of the best decisions of my academic life.",
    name: "Rachana Thapa",
    avatar: avatar3,
    designation: "BBA Student"
},

    //Quran learning testimonial data
    {
        id: 10,
        name: "Amir Hamza",
        designation: "Student",
        avatar: avatar1,
        rating: 5,
        quoteImage: testimonialQuote,
        highlight: "Great Course !",
        content: "The Quran Learning Program at iStudy has been a transformative experience for me. The structured lessons and dedicated instructors have helped me understand the Quran.",
    },
    {
        id: 11,
        name: "Omar Ali",
        designation: "Student",
        avatar: avatar2,
        rating: 5,
        quoteImage: testimonialQuote,
        highlight: "Great Course !",
        content: "The instructors are incredibly knowledgeable and supportive. The online classes are convenient and flexible, allowing me to learn at my own pace while receiving valuable feedback.",
    },
    {
        id: 12,
        name: "Mohammad Yousuf",
        designation: "Student",
        avatar: avatar3,
        rating: 5,
        quoteImage: testimonialQuote,
        highlight: "Great Course !",
        content: "I highly recommend the Quran Learning Program. The curriculum is well-structured, and the focus on Tajweed has helped me recite with proper pronunciation. It's a truly enriching experience.",
    },
    //Language academy testimonial data
    {
        id: 13,
        name: "John Wick",
        designation: "Language Instructor",
        avatar: avatar2,
        rating: 5,
        quoteImage: testimonialQuote2,
        highlight: "Great Course !",
        content: "“Using the iStudy Language Academy was a game-changer for my language school. The layout is clean, modern, and intuitive. It was incredibly easy to adapt the template to my needs, and the responsiveness across devices is fantastic. Highly recommended for anyone building a language learning platform!”",
    },
    {
        id: 14,
        name: "Amber Page",
        designation: "Language Coach",
        avatar: avatar3,
        rating: 5,
        quoteImage: testimonialQuote2,
        content: "“Using the iStudy Language Academy was a game-changer for my language school. The layout is clean, modern, and intuitive. It was incredibly easy to adapt the template to my needs, and the responsiveness across devices is fantastic. Highly recommended for anyone building a language learning platform!”",
    },
    {
        id: 15,
        name: "Cody Fisher",
        designation: "Language Program Manager",
        avatar: avatar4,
        rating: 5,
        quoteImage: testimonialQuote2,
        content: "“Using the iStudy Language Academy was a game-changer for my language school. The layout is clean, modern, and intuitive. It was incredibly easy to adapt the template to my needs, and the responsiveness across devices is fantastic. Highly recommended for anyone building a language learning platform!”",
    },
];

export default testimonialData;