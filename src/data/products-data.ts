import { ProductsType } from "@/interFace/interFace";
import productImg1 from "../../public/assets/images/book/book-cover-1.webp";
import productImg2 from "../../public/assets/images/book/book-cover-2.webp";
import productImg3 from "../../public/assets/images/book/book-cover-3.webp";
import productImg4 from "../../public/assets/images/book/book-cover-4.webp";
import productImg5 from "../../public/assets/images/book/book-cover-5.webp";
import productImg6 from "../../public/assets/images/book/book-cover-6.webp";
import productImg7 from "../../public/assets/images/book/book-cover-7.webp";
import productImg8 from "../../public/assets/images/book/book-cover-8.webp";

//discount book image
import productImg9 from "../../public/assets/images/book/book-cover-9.webp";
import productImg10 from "../../public/assets/images/book/book-cover-12.webp";
import productImg11 from "../../public/assets/images/book/book-cover-11.webp";
import productImg12 from "../../public/assets/images/book/book-cover-10.webp";
import productImg13 from "../../public/assets/images/book/book-cover-13.webp";
import productImg14 from "../../public/assets/images/book/book-cover-14.webp";
import productImg15 from "../../public/assets/images/book/book-cover-15.webp";
import productImg16 from "../../public/assets/images/book/book-cover-16.webp";
import productImg17 from "../../public/assets/images/book/book-cover-19.webp";

import productImg18 from "../../public/assets/images/book/book-cover-20.webp";
import productImg19 from "../../public/assets/images/book/book-cover-17.webp";
import productImg20 from "../../public/assets/images/book/book-cover-22.webp";
import productImg21 from "../../public/assets/images/book/book-cover-23.webp";

import productImg22 from "../../public/assets/images/book/book-cover-24.webp";
import productImg23 from "../../public/assets/images/book/book-cover-25.webp";
import productImg24 from "../../public/assets/images/book/book-cover-26.webp";
import productImg25 from "../../public/assets/images/book/book-cover-27.webp";
import productImg26 from "../../public/assets/images/book/book-cover-17.webp";
import productImg27 from "../../public/assets/images/book/book-cover-18.webp";

const productsData: ProductsType[] = [
    {
        id: 1,
        image: productImg1,
        title: "The Butcher Game",
        rating: 5,
        price: 19.99,
        quantity: 0,
        discount: 24.99,
    },
    {
        id: 2,
        image: productImg2,
        title: "We Solve Murders",
        rating: 4,
        price: 18.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 3,
        image: productImg3,
        title: "The Women",
        rating: 5,
        price: 21.99,
        quantity: 0,
        discount: 26.50,
        badge: "15% Off",
    },
    {
        id: 4,
        image: productImg4,
        title: "Fourth Wing",
        rating: 4,
        price: 17.99,
        quantity: 0,
        discount: 19.99,
    },
    {
        id: 5,
        image: productImg5,
        title: "The Family Plot",
        rating: 5,
        price: 16.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 6,
        image: productImg6,
        title: "The Last Lie",
        rating: 5,
        price: 16.99,
        quantity: 0,
        discount: 18.25,
        badge: "15% Off",
    },
    {
        id: 7,
        image: productImg7,
        title: "Echo of Silence",
        rating: 4,
        price: 14.99,
        quantity: 0,
        discount: 20.55,
    },
    {
        id: 8,
        image: productImg8,
        title: "The Ways We Hide",
        badge: "15% Off",
        rating: 5,
        price: 20.99,
        quantity: 0,
        discount: 25.99,
    },
    // All Discount's Books section data
    {
        id: 9,
        title: "50% Off Selected Biographies",
        books: [
            {
                id: 9,
                image: productImg9,
                title: "The Life of Nelson Mandela",
                rating: 5,
                price: 50.99,
                quantity: 0,
                discount: 25.99,
            },
            {
                id: 10,
                image: productImg12,
                title: "The Story of Marie Curie",
                rating: 4,
                price: 60.99,
                quantity: 0,
                discount: 30.99,
            },
            {
                id: 11,
                image: productImg11,
                title: "Albert Einstein: A Genius Mind",
                rating: 5,
                price: 40.99,
                quantity: 0,
                discount: 20.59,
            },
            {
                id: 12,
                image: productImg10,
                title: "The Legacy of Winston Churchill",
                rating: 4,
                price: 48.99,
                quantity: 0,
                discount: 24.99,
            },
        ]
    },
    {
        id: 10,
        title: "50% Off Selected Romance Novels",
        books: [
            {
                id: 13,
                image: productImg13,
                title: "The Love We Share",
                rating: 5,
                price: 30.99,
                quantity: 0,
                discount: 15.99,
            },
            {
                id: 14,
                image: productImg14,
                title: "Whispers of the Heart",
                rating: 4,
                price: 50.99,
                quantity: 0,
                discount: 25.99,
            },
            {
                id: 15,
                image: productImg15,
                title: "A Court of Thorns and Roses",
                rating: 5,
                price: 60.99,
                quantity: 0,
                discount: 30.59,
            },
            {
                id: 16,
                image: productImg16,
                title: "The Pumpkin Spice Café",
                rating: 4,
                price: 70.99,
                quantity: 0,
                discount: 35.99,
            },
        ]
    },
    {
        id: 11,
        title: "50% Off Selected Thriller Novels",
        books: [
            {
                id: 17,
                image: productImg2,
                title: "We Solve Murders",
                rating: 5,
                price: 80.99,
                quantity: 0,
                discount: 40.99,
            },
            {
                id: 18,
                image: productImg26,
                title: "The Shadow of the Wind",
                rating: 4,
                price: 40.99,
                quantity: 0,
                discount: 20.99,
            },
            {
                id: 19,
                image: productImg27,
                title: "The Girl on the Train",
                rating: 5,
                price: 70.99,
                quantity: 0,
                discount: 35.59,
            },
            {
                id: 20,
                image: productImg17,
                title: "The Thursday Murder Club",
                rating: 4,
                price: 50.99,
                quantity: 0,
                discount: 25.99,
            },
        ]
    },
    {
        id: 12,
        title: "5% Off All Adult Fantasy Novels",
        books: [
            {
                id: 21,
                image: productImg18,
                title: "The Name of the Wind",
                rating: 5,
                price: 48.99,
                quantity: 0,
                discount: 24.99,
            },
            {
                id: 22,
                image: productImg19,
                title: "A Court of Thorns and Roses",
                rating: 4,
                price: 36.99,
                quantity: 0,
                discount: 18.99,
            },
            {
                id: 23,
                image: productImg20,
                title: "Mistborn: The Final Empire",
                rating: 5,
                price: 44.99,
                quantity: 0,
                discount: 22.59,
            },
            {
                id: 24,
                image: productImg21,
                title: "The Priory of the Orange Tree",
                rating: 4,
                price: 38.99,
                quantity: 0,
                discount: 19.99,
            },
        ]
    },
    {
        id: 13,
        title: "15% Off Historical Fiction Novels",
        books: [
            {
                id: 25,
                image: productImg22,
                title: "The Nightingale",
                rating: 5,
                price: 32.99,
                quantity: 0,
                discount: 24.99,
            },
            {
                id: 26,
                image: productImg23,
                title: "All the Light We Cannot See",
                rating: 4,
                price: 16.99,
                quantity: 0,
                discount: 18.99,
            },
            {
                id: 27,
                image: productImg24,
                title: "The Book Thief",
                rating: 5,
                price: 44.99,
                quantity: 0,
                discount: 22.59,
            },
            {
                id: 28,
                image: productImg25,
                title: "Beneath a Scarlet Sky",
                rating: 4,
                price: 38.99,
                quantity: 0,
                discount: 19.99,
            },
        ]
    },
    //shop product data start
    {
        id: 14,
        image: productImg1,
        title: "The Butcher Game",
        rating: 5,
        price: 19.99,
        quantity: 0,
        discount: 24.99,
    },
    {
        id: 15,
        image: productImg2,
        title: "We Solve Murders",
        rating: 4,
        price: 18.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 16,
        image: productImg3,
        title: "The Women",
        rating: 5,
        price: 21.99,
        quantity: 0,
        discount: 26.50,
        badge: "15% Off",
    },
    {
        id: 17,
        image: productImg4,
        title: "Fourth Wing",
        rating: 4,
        price: 17.99,
        quantity: 0,
        discount: 19.99,
    },
    {
        id: 18,
        image: productImg5,
        title: "The Family Plot",
        rating: 5,
        price: 16.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 19,
        image: productImg6,
        title: "The Last Lie",
        rating: 5,
        price: 16.99,
        quantity: 0,
        discount: 18.25,
        badge: "15% Off",
    },
    {
        id: 20,
        image: productImg7,
        title: "Echo of Silence",
        rating: 4,
        price: 14.99,
        quantity: 0,
        discount: 20.55,
    },
    {
        id: 21,
        image: productImg8,
        title: "The Ways We Hide",
        badge: "15% Off",
        rating: 5,
        price: 20.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 22,
        image: productImg27,
        title: "The Girl on the Train",
        rating: 5,
        price: 70.99,
        quantity: 0,
        discount: 35.59,
    },
    {
        id: 23,
        image: productImg9,
        title: "The Life of Nelson Mandela",
        rating: 5,
        price: 50.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 24,
        image: productImg12,
        title: "The Story of Marie Curie",
        rating: 4,
        price: 60.99,
        quantity: 0,
        discount: 30.99,
    },
    {
        id: 25,
        image: productImg11,
        title: "Albert Einstein",
        rating: 5,
        price: 21.99,
        quantity: 0,
        discount: 25.59,
        badge: "15% Off",
    },
    {
        id: 26,
        image: productImg10,
        title: "Winston Churchill",
        rating: 4,
        price: 48.99,
        quantity: 0,
        discount: 24.99,
    },
    {
        id: 27,
        image: productImg13,
        title: "The Love We Share",
        rating: 5,
        price: 30.99,
        quantity: 0,
        discount: 15.99,
        badge: "15% Off",
    },
    {
        id: 28,
        image: productImg14,
        title: "Whispers of the Heart",
        rating: 4,
        price: 50.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 29,
        image: productImg15,
        title: "A Court of Thorns and Roses",
        rating: 5,
        price: 60.99,
        quantity: 0,
        discount: 30.59,
        badge: "15% Off",
    },
    {
        id: 30,
        image: productImg16,
        title: "The Pumpkin Spice Café",
        rating: 4,
        price: 70.99,
        quantity: 0,
        discount: 35.99,
    },
    {
        id: 31,
        image: productImg2,
        title: "We Solve Murders",
        rating: 5,
        price: 80.99,
        quantity: 0,
        discount: 40.99,
    },
    //product list data
    {
        id: 32,
        image: productImg1,
        title: "The Butcher Game",
        rating: 5,
        price: 19.99,
        quantity: 0,
        discount: 24.99,
        badge: "New Rebased",
        badgeClass: "badge-success",
        description: "Dive into the thrilling world of crime and mystery with this gripping tale of deception and betrayal."
    },
    {
        id: 33,
        image: productImg2,
        title: "We Solve Murders",
        rating: 4,
        price: 18.99,
        quantity: 0,
        discount: 25.99,
        badge: "Best Seller",
        badgeClass: "badge-secondary",
        description: "Join a team of detectives as they uncover secrets in their pursuit of solving complex murder cases."
    },
    {
        id: 34,
        image: productImg3,
        title: "The Women",
        rating: 5,
        price: 21.99,
        quantity: 0,
        discount: 26.50,
        badge: "Out of Stock",
        badgeClass: "badge-danger",
        description: "An inspiring story of courage and resilience in the face of adversity, as told by women from different walks of life."
    },
    {
        id: 35,
        image: productImg4,
        title: "Fourth Wing",
        rating: 4,
        price: 17.99,
        quantity: 0,
        discount: 19.99,
        description: "Explore the high-flying adventures of a winged warrior as they battle forces of evil in a world at war."
    },
    {
        id: 36,
        image: productImg5,
        title: "The Family Plot",
        rating: 5,
        price: 16.99,
        quantity: 0,
        discount: 25.99,
        badge: "55% Off",
        badgeClass: "badge-danger",
        description: "A chilling family saga unfolds when dark secrets from the past resurface to haunt the present."
    },
    {
        id: 37,
        image: productImg6,
        title: "The Last Lie",
        rating: 5,
        price: 16.99,
        quantity: 0,
        description: "In a web of lies, trust is a luxury. Discover the consequences when the truth is finally revealed."
    },
    {
        id: 38,
        image: productImg7,
        title: "Echo of Silence",
        rating: 4,
        price: 14.99,
        quantity: 0,
        description: "In the quietest moments, the loudest truths emerge. A journey through emotional turmoil and healing."
    },
    {
        id: 39,
        image: productImg9,
        title: "The Life of Nelson Mandela",
        rating: 5,
        price: 21.99,
        quantity: 0,
        description: "A suspenseful thriller where every twist brings a new perspective, blurring the lines of truth and lies."
    },
    {
        id: 40,
        image: productImg12,
        title: "The Ways We Hide",
        badge: "New Rebased",
        rating: 5,
        price: 20.99,
        quantity: 0,
        badgeClass: "badge-success",
        description: "Dive into the thrilling world of crime and mystery with this gripping tale of deception and betrayal."
    },
    {
        id: 41,
        image: productImg27,
        title: "The Girl on the Train",
        rating: 5,
        price: .99,
        quantity: 0,
        description: "Dive into the thrilling world of crime and mystery with this gripping tale of deception and betrayal."
    },
    {
        id: 42,
        image: productImg11,
        title: "Albert Einstein",
        rating: 5,
        price: 21.99,
        quantity: 0,
        discount: 25.59,
        badge: "15% Off",
    },
    {
        id: 43,
        image: productImg10,
        title: "Winston Churchill",
        rating: 4,
        price: 48.99,
        quantity: 0,
        discount: 24.99,
    },
    {
        id: 44,
        image: productImg13,
        title: "The Love We Share",
        rating: 5,
        price: 30.99,
        quantity: 0,
        discount: 15.99,
        badge: "15% Off",
    },
    {
        id: 45,
        image: productImg14,
        title: "Whispers of the Heart",
        rating: 4,
        price: 50.99,
        quantity: 0,
        discount: 25.99,
    },
    {
        id: 46,
        image: productImg15,
        title: "A Court of Thorns and Roses",
        rating: 5,
        price: 60.99,
        quantity: 0,
        discount: 30.59,
        badge: "15% Off",
    },
    {
        id: 47,
        image: productImg16,
        title: "The Pumpkin Spice Café",
        rating: 4,
        price: 70.99,
        quantity: 0,
        discount: 35.99,
    },
    {
        id: 48,
        image: productImg2,
        title: "We Solve Murders",
        rating: 5,
        price: 80.99,
        quantity: 0,
        discount: 40.99,
    },
    //shop 2 product data
    //product list data
    {
        id: 49,
        image: productImg1,
        title: "The Butcher Game",
        rating: 5,
        price: 21.50,
        quantity: 0,
        discount: 24.99,
        badge: "New Rebased",
        badgeClass: "badge-success",
        description: "Dive into the thrilling world of crime and mystery with this gripping tale of deception and betrayal."
    },
    {
        id: 50,
        image: productImg2,
        title: "We Solve Murders",
        rating: 4,
        price: 18.99,
        quantity: 0,
        discount: 25.99,
        badge: "Best Seller",
        badgeClass: "badge-secondary",
        description: "Join a team of detectives as they uncover secrets in their pursuit of solving complex murder cases."
    },
    {
        id: 51,
        image: productImg3,
        title: "The Women",
        rating: 5,
        price: 21.99,
        quantity: 0,
        badge: "Out of Stock",
        badgeClass: "badge-danger",
        description: "An inspiring story of courage and resilience in the face of adversity, as told by women from different walks of life."
    },
    {
        id: 52,
        image: productImg4,
        title: "Fourth Wing",
        rating: 4,
        price: 17.99,
        quantity: 0,
        description: "Explore the high-flying adventures of a winged warrior as they battle forces of evil in a world at war."
    },
    {
        id: 53,
        image: productImg5,
        title: "The Family Plot",
        rating: 5,
        price: 25.99,
        quantity: 0,
        discount: 30.99,
        badge: "55% Off",
        badgeClass: "badge-danger",
        description: "A chilling family saga unfolds when dark secrets from the past resurface to haunt the present."
    },
    {
        id: 54,
        image: productImg6,
        title: "The Last Lie",
        rating: 5,
        price: 16.99,
        quantity: 0,
        description: "In a web of lies, trust is a luxury. Discover the consequences when the truth is finally revealed."
    },
    {
        id: 55,
        image: productImg7,
        title: "Echo of Silence",
        rating: 4,
        price: 14.99,
        quantity: 0,
        description: "In the quietest moments, the loudest truths emerge. A journey through emotional turmoil and healing."
    },
    {
        id: 56,
        image: productImg9,
        title: "The Life of Nelson Mandela",
        rating: 5,
        price: 21.99,
        quantity: 0,
        description: "A suspenseful thriller where every twist brings a new perspective, blurring the lines of truth and lies."
    },
    {
        id: 57,
        image: productImg12,
        title: "The Ways We Hide",
        badge: "New Rebased",
        rating: 5,
        price: 20.99,
        quantity: 0,
        badgeClass: "badge-success",
        description: "Dive into the thrilling world of crime and mystery with this gripping tale of deception and betrayal."
    },
    {
        id: 58,
        badge:"Best Seller",
        badgeClass:"badge-secondary",
        image: productImg11,
        title: "We Solve Murders",
        rating: 5,
        price: 21.99,
        discount:25.99,
        quantity: 0,
        description: "Join a team of detectives as they uncover secrets in their pursuit of solving complex murder cases."
    },
    {
        id: 59,
        image: productImg10,
        title: "The Woman",
        rating: 5,
        price: 21.99,
        quantity: 0,
        discount: 25.59,
        description:"An inspiring story of courage and resilience in the face of adversity, as told by women from different walks of life.",
        badge: "Out of Stock",
        badgeClass:"badge-danger"
    },
    {
        id: 60,
        image: productImg13,
        title: "Fourth Wing",
        rating: 4,
        price: 21.99,
        quantity: 0,
        description:"Explore the high-flying adventures of a winged warrior as they battle forces of evil in a world at war."
    },
    {
        id: 61,
        image: productImg14,
        title: "The Family Plot",
        rating: 5,
        price: 10.50,
        quantity: 0,
        discount: 20.99,
        badge: "55% Off",
        badgeClass:"badge-danger",
        description:"A chilling family saga unfolds when dark secrets from the past resurface to haunt the present."

    },
    {
        id: 62,
        image: productImg15,
        title: "The Last Lie",
        rating: 4,
        price: 21.50,
        quantity: 0,
        description:"In a web of lies, trust is a luxury. Discover the consequences when the truth is finally revealed."
    },
    {
        id: 63,
        image: productImg16,
        title: "Echo of Silence",
        rating: 5,
        price: 21.99,
        quantity: 0,
        description:"In the quietest moments, the loudest truths emerge. A journey through emotional turmoil and healing."
    },
    {
        id: 64,
        image: productImg19,
        title: "The Girl on the Train",
        rating: 4,
        price: 21.50,
        quantity: 0,
        discount: 35.99,
        description:"A suspenseful thriller where every twist brings a new perspective, blurring the lines of truth and lies."
    },
    {
        id: 65,
        image: productImg2,
        title: "We Solve Murders",
        rating: 5,
        price: 80.99,
        quantity: 0,
        discount: 40.99,
    },
]

export default productsData;