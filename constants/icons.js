import Colors from './colors';
const HOMESCREEN_ICONS_CATEGORIES = [
    {
        title: 'Cleaning &\nWashing',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'broom',
        },
        onPress: () => { 
            
        }
    },
    {
        title: 'Purchase &\nDeliveries',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'motorbike',
        },
        onPress: () => { 
            
        }
    },
    {
        title: 'Health,\nBeauty &\nSpa',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face-woman',
        },
        onPress: () => { 
            
        }
    },
    {
        title: 'Handyman &\nSpecialists',
        icon: {
            color: Colors.black,
            type: 'mdi',
            name: 'face',
        },
        onPress: () => { 
            
        }
    },
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
    HOMESCREEN_CAROUSEL_ITEMS,
}