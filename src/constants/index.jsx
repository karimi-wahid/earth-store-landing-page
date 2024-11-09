import { FaHandHoldingHeart } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaBox } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


export const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
];

export const cardPosters = [
    {
        type: "Posters",
        price: 21.65,
        title: 'Poster V1',
        imgUrl: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg',
    },
    {
        type: "Posters",
        price: 17.99,
        title: 'Poster V2',
        imgUrl: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg',
    },
    {
        type: "Posters",
        price: 14.99,
        title: 'Poster V3',
        imgUrl: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg',
    },
]

export const testimonialData = [
    {
        text: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.',
        name: 'Jennifer Lewis',
        imgUrl: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg'
    },
    {
        text: 'Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.',
        name: 'Alicia Heart',
        imgUrl: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-2.jpeg'
    },
    {
        text: 'Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.',
        name: 'Juan Carlos',
        imgUrl: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-1.jpeg'
    },
]

export const servicesData = [  
    {  
        title: 'Secure Payment',  
        text: 'All our payments are SSL secured',  
        icon: <FaHandHoldingHeart size={25}/>  
    },  
    {  
        title: 'Delivered With Care',  
        text: 'Super fast shipping to your door',  
        icon: <GrSecure size={25}/>  
    },  
    {  
        title: 'Excellent Service',  
        text: 'Live chat and phone support',  
        icon: <FaBox size={25}/>  
    },  
];

export const contactUs = [
    {
        type: 'Email',
        connect: 'email@gmail.com',
        icon: <MdOutlineMailOutline />
    },
    {
        type: 'Phone',
        connect: '000-444-555-777',
        icon: <FaPhoneAlt />
    },
    {
        type: 'Location',
        connect: 'New-York',
        icon: <CiLocationOn />
    },
]