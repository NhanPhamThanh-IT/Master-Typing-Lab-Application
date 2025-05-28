/**
 * @fileoverview Constants used in the Footer component of the application.
 * This file exports an object containing all text constants, links, and configuration
 * data needed to render the footer section of the typing test application.
 * 
 * @module components/layout/Footer/constants
 * @requires constants/textConstants
 */

import routePaths from '@constants/routePaths';
import TEXT from '@/constants/textConstants.js';

/** Current year used for copyright information */
const currentYear = new Date().getFullYear();

/**
 * @constant {Object} CONSTANTS - Object containing all footer-related constants
 * @property {Object} BRANCH - Information about the application/company brand
 * @property {string} BRANCH.NAME - The application/company name from global text constants
 * @property {string} BRANCH.DESCRIPTION - Extended description of the application's features and purpose
 * 
 * @property {Object} USEFULLINKS - Navigation links section for the footer
 * @property {string} USEFULLINKS.TITLE - Title for the navigation links section
 * @property {Array<Object>} USEFULLINKS.NAVITEMS - Array of navigation items to display
 * @property {string} USEFULLINKS.NAVITEMS[].TITLE - Display text for each navigation item
 * @property {string} USEFULLINKS.NAVITEMS[].HREF - URL/path for each navigation link
 * 
 * @property {Object} CONTACT - Contact information section
 * @property {string} CONTACT.TITLE - Title for the contact section
 * @property {Object} CONTACT.EMAIL - Email contact information
 * @property {string} CONTACT.EMAIL.TEXT - Introductory text for the email contact
 * @property {string} CONTACT.EMAIL.EMAIL - The email address displayed to users
 * @property {string} CONTACT.EMAIL.EMAILLINK - The mailto: link for the email address
 * @property {Array<Object>} CONTACT.SOCIALS_LINKS - Array of social media links
 * @property {string} CONTACT.SOCIALS_LINKS[].ICON - Icon name/identifier for each social link
 * @property {string} CONTACT.SOCIALS_LINKS[].HREF - URL for each social media link
 * 
 * @property {Array<Object>} SUPPORT - Additional footer items like copyright and legal links
 * @property {string} SUPPORT[].TEXT - Display text for each support item
 * @property {string} [SUPPORT[].HREF] - Optional URL for support items that are links
 */
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
                HREF: routePaths.home,
            },
            {
                TITLE: 'Practice',
                HREF: routePaths.practice,
            },
            {
                TITLE: 'Statistics',
                HREF: '#',
            },
            {
                TITLE: 'Contact',
                HREF: routePaths.contactUs,
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
            HREF: routePaths.privacyPolicy,
        },
        {
            TEXT: 'Terms of Use',
            HREF: routePaths.termsOfUse,
        },
    ]
};

export default CONSTANTS;