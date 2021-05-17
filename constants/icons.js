import Colors from './colors';
const HOMESCREEN_ICONS_CATEGORIES = [
    {
        title: 'Cleaning &\nWashing',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'broom',
        },
        route: 'washAndCleanScreen'
    },
    {
        title: 'Purchase &\nDeliveries',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'motorbike',
        },
        route: 'purchaseAndDeliveriesScreen'
    },
    {
        title: 'Health,\nBeauty & Spa',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face-woman',
        },
        route: 'healthBeautyAndSpaScreen'
    },
    {
        title: 'Handyman &\nSpecialists',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: 'handymanAndSpecialistsScreen'
    },
];
const CLEANING_AND_WASHING_ICONS_CATEGORIES = [
    {
        title: 'House',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'home',
        },
        route: 'cleaningAndWasingScreen'
    },
    {
        title: 'CarWash',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'car',
        },
        route: 'cleaningAndWasingScreen'
    },
    {
        title: 'Condo',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'home-city',
        },
        route: 'cleaningAndWasingScreen'
    },

    {
        title: 'Appliances',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'fridge',
        },
        route: 'cleaningAndWasingScreen'
    },
    {
        title: 'Office\nBuilding',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'domain',
        },
        route: ''
    },
    {
        title: 'Laundry',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'washing-machine',
        },
        route: ''
    },
];
const HANDYMAN_AND_SPECIALISTS_ICONS_CATEGORIES = [
    {
        title: 'Electrician',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Mechanic',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Painter',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Plumber',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Technician',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Welder',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
];
const PURCHASE_AND_DELIVERIES_ICONS_CATEGORIES = [
    {
        title: 'Food & Restaurant',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'food',
        },
        route: 'foodAndRestaurantScreen'
    },
    {
        title: 'Parcel',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'truck-delivery',
        },
        route: ''
    },
    {
        title: 'QuickBuy',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'moped',
        },
        route: ''
    },
    {
        title: 'Moving & Hauling',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'cart',
        },
        route: ''
    },

];
const HEALTH_BEAUTY_AND_SPA_ICONS_CATEGORIES = [
    {
        title: 'Pedi-\nManicure',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Hair &\nMake up Salon',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Massage\nTherapist',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    {
        title: 'Facial\nServices',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        route: ''
    },
    // {
    //     title: 'Facial',
    //     icon: {
    //         color: Colors.black,
    //         type: 'mdi',
    //         name: 'face',
    //     },
    //     route: ''
    // },

];

const HOMESCREEN_CAROUSEL_ITEMS = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];


export default {
    HOMESCREEN_ICONS_CATEGORIES,
    HANDYMAN_AND_SPECIALISTS_ICONS_CATEGORIES,
    CLEANING_AND_WASHING_ICONS_CATEGORIES,
    HOMESCREEN_CAROUSEL_ITEMS,
    HEALTH_BEAUTY_AND_SPA_ICONS_CATEGORIES,
    PURCHASE_AND_DELIVERIES_ICONS_CATEGORIES
}