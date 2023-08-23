import { arab_emirates, australia, britian, china, denmark, france, inventory, italy, russia, search, security, send, service_1, service_2, service_3, service_4, usa, facebook, twitter, linkedin, instagram, youtube } from "../utils/images";

export const navigationMenu = [
  {
    id: "all_category",
    linkText: "All Category",
  },
  {
    id: "hot_offers",
    linkText: "Hot offers",
  },
  {
    id: "gift_boxes",
    linkText: "Gift Boxes",
  },
  {
    id: "discounts",
    linkText: "Discounts",
  },
  {
    id: "watchlist",
    linkText: "Watchlist",
  },
  {
    id: "help",
    linkText: "Help",
  },
];

export const currencyOptions = [
  {
    id: "usd",
    country: "United States",
    currency: "USD",
  },
  {
    id: "inr",
    country: "India",
    currency: "INR",
  },
  {
    id: "franc",
    country: "France",
    currency: "FRANC",
  },
  {
    id: "pound-sterling",
    country: "United Kingdom",
    currency: "POUND",
  },
  {
    id: "kwd",
    country: "Kuwait",
    currency: "KWD",
  },
];

export const shippingOptions = [
  {
    id: "ship-us",
    location: "us",
    flagImg: usa,
  },
  {
    id: "ship-au",
    location: "au",
    flagImg: australia,
  },
  {
    id: "ship-dk",
    location: "dk",
    flagImg: denmark,
  },
  {
    id: "ship-cn",
    location: "cn",
    flagImg: china,
  },
  {
    id: "ship-fr",
    location: "fr",
    flagImg: france,
  }
];

export const categories = ['Automobiles', 'Clothes and wear', 'Home interiors'  ,'Computer and tech', 'Tools & equipments', 'Sports and outdoor',  'Animal and pets', 'Machinery tools', 'More category'];

export const services = [
  {
    id: "service-1",
    text: "Source from Industry Hubs",
    backgroundImg: service_1,
    iconImg: search
  },
  {
    id: "service-2",
    text: "Customize Your Products",
    backgroundImg: service_2,
    iconImg: inventory
  },
  {
    id: "service-3",
    text: "Fast, reliable shipping by ocean or air",
    backgroundImg: service_3,
    iconImg: send
  },
  {
    id: "service-4",
    text: "Product monitoring and inspection",
    backgroundImg: service_4,
    iconImg: security
  }
];

export const suppliers = [
  {
    id: "shop-ae",
    flagImg: arab_emirates,
    country: "Arabic Emirates",
    shopname: "shopname.ae"
  },
  {
    id: "shop-au",
    flagImg: australia,
    country: "Australia",
    shopname: "shopname.au"
  },
  {
    id: "shop-us",
    flagImg: usa,
    country: "United States",
    shopname: "shopname.us"
  },
  {
    id: "shop-ru",
    flagImg: russia,
    country: "Russia",
    shopname: "shopname.ru"
  },
  {
    id: "shop-it",
    flagImg: italy,
    country: "Italy",
    shopname: "shopname.it"
  },
  {
    id: "shop-de",
    flagImg: denmark,
    country: "Denmark",
    shopname: "shopname.de"
  },
  {
    id: "shop-fr",
    flagImg: france,
    country: "France",
    shopname: "shopname.fr"
  },
  {
    id: "shop-ch",
    flagImg: china,
    country: "China",
    shopname: "shopname.ch"
  },
  {
    id: "shop-br",
    flagImg: britian,
    country: "Britain",
    shopname: "shopname.br"
  }
];

export const socialLinks = [
  facebook, twitter, linkedin, instagram, youtube
];

export const footerLinks = [
  {
    id: "about",
    title: "About",
    links: ["About Us", "Find store", "Categories", "Blogs"]
  },
  {
    id: "partnership",
    title: "Partnership",
    links: ["Our Partners", "Branches", "Suppliers", "Programs"]
  },
  {
    id: "information",
    title: "Information",
    links: ["Help Center", "Money Refund", "Shipping", "Contact Us"]
  },
  {
    id: "for-users",
    title: "For Users",
    links: ["Login", "Register", "Settings", "My Orders"]
  }
]