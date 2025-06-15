import { ContactItem } from "@/interFace/interFace";

export const contactData: ContactItem[] = [
    {
        icon: "fa-light fa-map-marker-alt",
        title: "Our Premises",
        details: [
            "Tinkune, Kathmandu, Nepal",
        ]
    },
    {
        icon: "fa-light fa-phone",
        title: "Call Us",
        details: [
            "+977 01-4112403",
        ]
    },
    {
        icon: "fa-light fa-envelope",
        title: "Email Us",
        details: [
            { text: "reliableintlcollege@gmail.com", link: "mailto:reliableintlcollege@gmail.com" },
        ]
    },
    {
        icon: "fa-light fa-globe",
        title: "Visit Our Website",
        details: [
            { text: "www.reliablecollege.edu.np", link: "https://www.reliablecollege.edu.np" },
        ]
    }
];