import { MenuItem } from "@/interFace/interFace";

const main_menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    children: false,
    active: true,
    title: "Home",
    pluseIncon: false,
    link: "/",
    previewImg: false,
    submenus: [],
  },
  {
    id: 2,
    hasDropdown: true,
    active: true,
    children: true,
    title: "About Us",
    pluseIncon: true,
    link: "/about-university",
    submenus: [
      {
        title: "Introduction",
        link: "/introduction",
        pluseIncon: false,
      },
      {
        title: "Message From Chairperson",
        link: "/message-chairperson",
        pluseIncon: false,
      },
      {
        title: "Message From MD",
        link: "/message-md",
        pluseIncon: false,
      },
      {
        title: "Features",
        link: "/about-modern-schooling",
        pluseIncon: false,
      },
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    children: true,
    title: "Our Programs",
    pluseIncon: true,
    link: "/courses-list-three",
    submenus: [
      {
        title: "BBA",
        link: "/program-details/1",
        pluseIncon: false,
      },
      {
        title: "MBA",
        link: "/program-details/4",
        pluseIncon: false,
      },
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    active: true,
    children: true,
    title: "Student Life",
    pluseIncon: true,
    link: "/student-life",
    submenus: [
      {
        title: "Students Events",
        link: "/student-events",
        pluseIncon: false,
      },
      {
        title: "Learning Club Activities",
        link: "/learning-club",
        pluseIncon: false,
      },
      {
        title: "Leadership and Volunteering",
        link: "/leadership",
        pluseIncon: false,
      },
      {
        title: "Learning in Action",
        link: "/learning-in-action",
        pluseIncon: false,
      },
      {
        title: "Recreations",
        link: "/recreations",
        pluseIncon: false,
      },
    ],
  },
  {
    id: 5,
    hasDropdown: false,
    active: true,
    children: false,
    title: "Gallery",
    pluseIncon: false,
    link: "/gallery",
    submenus: [],
  },
  {
    id: 6,
    hasDropdown: false,
    active: true,
    children: false,
    title: "Contact Us",
    pluseIncon: false,
    link: "/contact-us",
    submenus: [],
  },
];

export default main_menu_data;