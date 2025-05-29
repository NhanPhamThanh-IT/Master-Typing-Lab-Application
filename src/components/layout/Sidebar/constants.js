/**
 * Sidebar Navigation Constants
 *
 * Defines the navigation items displayed in the sidebar of the practice layout.
 * Each item includes display text and the corresponding route path for navigation.
 *
 * Structure:
 * - `NAV_ITEMS`: An array of objects, each with:
 *     - `text`: The label shown in the sidebar.
 *     - `path`: The URL path to navigate when the item is clicked.
 *
 * Dependencies:
 * - `routePaths` from constants/routePaths: Provides base route segments for constructing full paths.
 *
 * Usage:
 * ```js
 * import CONSTANTS from './constants';
 * console.log(CONSTANTS.NAV_ITEMS);
 * // [ { text: 'Testing', path: '/practice/typing-test' }, ... ]
 * ```
 *
 * Notes:
 * - Ensure that `routePaths` contains valid definitions for `practice`, `typingTest`, `typingPractice`, `typingLessons`, and `typingGames`.
 */
import routePaths from '@constants/routePaths.js';

const practicePath = routePaths.practice;
const typingTestPath = routePaths.typingTest;
const typingPracticePath = routePaths.typingPractice;
const typingLessonsPath = routePaths.typingLessons;
const typingGamesPath = routePaths.typingGames;

const CONSTANTS = {
    NAV_ITEMS: [
        { text: 'Testing', path: `${practicePath}/${typingTestPath}` },
        { text: 'Lessons', path: `${practicePath}/${typingLessonsPath}` },
        { text: 'Games', path: `${practicePath}/${typingGamesPath}` },
    ]
}

export default CONSTANTS;