import { MenuItem } from "@/interFace/interFace";

const main_mobile_menu_data: MenuItem[] = [
 {
    id: 1,
    hasDropdown: false,  // Changed to false to disable dropdown
    children: false,
    active: false,
    title: "Home",
    pluseIncon: false,   // Changed to false to remove plus icon
    link: "/",           // Changed to root route instead of "#"
    previewImg: false,   // Changed to false since we don't need preview images
    submenus: [],        // Emptied the submenus array
  },
{
    id: 9,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "About Us",
    pluseIncon: true,
    link: "/about-university",
    submenus: [
       {
        title: "Introduction",
        link: "/mvs",
        pluseIncon: true,
        
      },
       {
        title: "Message From Chairperson",
        link: "/mvs",
        pluseIncon: true,
        
      },
      {
        title: "Message From MD",
        link: "/mvs",
        pluseIncon: true,
        
      },
        {
        title: "Features",
        link: "/about-modern-schooling",
        pluseIncon: true,
        
      },
      
    ],
  },

  {
    id: 2,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Our Programs",
    pluseIncon: true,
    link: "/courses-list-three",
    submenus: [
      {
        title: "BBA",
        link: "/program-details/1",
        pluseIncon: true,
        
      },
      {
        title: "MBA",
        link: "/program-details/2",
        pluseIncon: true,
      
      },
      
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Student Life ",
    pluseIncon: true,
    link: "/courses-list-three",
    submenus: [
      {
        title: "Students Events ",
        link: "/program-details/1",
        pluseIncon: true,
        
      },
      {
        title: "Learning Club Activites ",
        link: "/program-details/2",
        pluseIncon: true,
      
      },
      {
        title: "Leadership and Volunteering ",
        link: "/program-details/2",
        pluseIncon: true,
      
      },
      {
        title: "Learning in Action",
        link: "/program-details/2",
        pluseIncon: true,
      
      },
      {
        title: "Recreations ",
        link: "/program-details/4",
        pluseIncon: true,
      
      },
    ],
  },
  {
    id: 4,
    hasDropdown: false,
    active: true,
    megaMenu: true,
    children: true,
    title: "Gallery",
    pluseIncon: true,
    link: "/gallery",
    
  },
  {
    id: 5,
    hasDropdown: false,
    active: true,
    megaMenu: true,
    children: true,
    title: "Contact Us",
    pluseIncon: true,
    link: "/contact-us",
    
  },

  
];

export default main_mobile_menu_data;