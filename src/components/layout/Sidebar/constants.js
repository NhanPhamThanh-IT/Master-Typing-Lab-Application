import routePaths from '@constants/routePaths.js';

const practicePath = routePaths.practice;
const typingTestPath = routePaths.typingTest;
const typingPracticePath = routePaths.typingPractice;

const CONSTANTS = {
    NAV_ITEMS: [
        { text: 'Testing', path: `${practicePath}/${typingTestPath}` },
        { text: 'Practice', path: `${practicePath}/${typingPracticePath}` },
    ]
}

export default CONSTANTS;