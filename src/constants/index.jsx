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


export const SPDForP = [
    {label : 'Printed on High-Quality vinyl.'},
    {label : '1-inch thick wooden back frame.'},
    {label : 'No additional hanging hardware is required.'},
    {label : 'Care: Dust with a soft, dry cloth.'},
]

export const SPDForPP = [
    {label : 'Printed on High-Quality matte photo paper.'},
    {label : 'Acrylic borders are used.'},
    {label : 'Highly durable acrylic glass is used on the top to protect it from damage.'},
    {label : 'Hooks are attached to the back of each frame for hanging.'},
]

export const SPDForPC = [
    {label : '17.5 pt thickness / 120 lb weight / 324 GSM'},
    {label : 'Light white, uncoated matte finish with an eggshell texture'},
    {label : 'Paper is easy to write on and won’t smudge'},
    {label : 'Made and printed in the USA'},
]

export const SPDForPCP = [
    {label : '12.5 pt thickness / 110 lb weight'},
    {label : 'Bright white, semi-gloss finish'},
    {label : '50% recycled content'},
    {label : 'FSC certified'},
    {label : 'Paper imported from Italy; printed in the USA'},
]