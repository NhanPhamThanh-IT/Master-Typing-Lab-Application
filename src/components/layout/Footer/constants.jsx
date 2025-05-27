import TEXT from '@/constants/textConstants.js';

const currentYear = new Date().getFullYear();

const CONSTANTS = {
    BRANCH: {
        NAME: TEXT.BRANCH,
        DESCRIPTION: `Improve your typing skills with our interactive exercises and challenging tests designed for all proficiency levels. Track your progress through detailed analytics, monitor your words per minute, accuracy rates, and see your improvement over time. Our scientifically-designed exercises target specific keyboard areas to enhance your speed, accuracy, and muscle memory effectively. Whether you're a beginner or looking to become a typing expert, ${TEXT.BRANCH} provides the tools you need to succeed.`,
    },
    USEFULLINKS: {
        TITLE: 'Useful Links',
        NAVITEMS: [
            {
                TITLE: 'Home',
                HREF: '/',
            },
            {
                TITLE: 'Practice',
                HREF: '/practice',
            },
            {
                TITLE: 'Statistics',
                HREF: '#',
            },
            {
                TITLE: 'Contact',
                HREF: '/contact-us',
            },
        ],
    },
    CONTACT: {
        TITLE: 'Contact',
        EMAIL: {
            TEXT: 'Have questions or suggestions? Contact us at',
            EMAIL: 'ptnhanit230104@gmail.com',
            EMAILLINK: 'mailto:ptnhanit230104@gmail.com',
        },
        SOCIALS_LINKS: [
            {
                ICON: 'Facebook',
                HREF: '#',
            },
            {
                ICON: 'Twitter',
                HREF: '#',
            },
            {
                ICON: 'LinkedIn',
                HREF: '#',
            },
            {
                ICON: 'GitHub',
                HREF: '#',
            },
        ],
    },
    SUPPORT: [
        {
            TEXT: `© ${currentYear} ${TEXT.BRANCH} - All rights reserved`,
        },
        {
            TEXT: 'Privacy Policy',
            HREF: '#',
        },
        {
            TEXT: 'Terms of Use',
            HREF: '#',
        },
    ]
};

export default CONSTANTS;