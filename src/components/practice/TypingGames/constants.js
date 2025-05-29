/**
 * Constants for the Typing Games feature
 */

// Difficulty levels for games
export const DIFFICULTY_LEVELS = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];

// Data for all available typing games
export const GAMES_DATA = [
    {
        id: 'word-master',
        title: 'Word Master',
        imageUrl: 'https://play-lh.googleusercontent.com/zmCQIy-MDcPQxaEk-ZWoOO4hOxZC6mJa-2E5o1R-z23wErCZtoGgMakDI7wBuxR7DC0',
        type: 'word-typing',
        icon: 'vocab',
        iconBg: '#3f51b5', // primary color
        description: 'Type vocabulary words by theme. Perfect for building general typing skills.',
        longDescription: 'Word Master helps you improve your typing by practicing themed vocabulary. Each difficulty level presents words of increasing complexity, helping you build speed and accuracy.',
        difficulty: ['easy', 'medium', 'hard'],
        difficultyDetails: [
            { level: 'easy', description: '3-5 letter common words' },
            { level: 'medium', description: '6-8 letter intermediate vocabulary' },
            { level: 'hard', description: '9+ letter advanced vocabulary' },
        ],
        scoringRules: [
            '10 points for each correctly typed word',
            'Speed bonus: +5 points when typing faster than average',
            'Accuracy bonus: +3 points for each word with no mistakes',
        ],
        tips: [
            'Focus on the next word while typing the current one',
            'Develop a rhythm to improve your speed',
            'Learn to recognize common word patterns',
        ],
        themes: {
            easy: ['animals', 'colors', 'food', 'home'],
            medium: ['sports', 'travel', 'technology', 'business'],
            hard: ['science', 'medicine', 'literature', 'philosophy'],
        },
        timeLimit: 60, // seconds
    },
    {
        id: 'time-attack',
        imageUrl: 'https://nationaltoday.com/wp-content/uploads/2022/07/4569-min.jpg',
        title: 'Time Attack',
        type: 'time-attack',
        icon: 'time',
        iconBg: '#9c27b0', // secondary color
        description: 'Type as many sentences as possible within the time limit. Race against the clock!',
        longDescription: 'Time Attack tests your speed and accuracy under pressure. Type complete sentences correctly before time runs out to earn points and extend your timer.',
        difficulty: ['easy', 'medium', 'hard'],
        difficultyDetails: [
            { level: 'easy', description: 'Simple sentences, 90 second timer' },
            { level: 'medium', description: 'Complex sentences, 60 second timer' },
            { level: 'hard', description: 'Challenging paragraphs, 45 second timer' },
        ],
        scoringRules: [
            '20 points for each completed sentence',
            'Time bonus: +5 seconds for perfect accuracy',
            'Combo bonus: Consecutive correct sentences multiply points',
        ],
        tips: [
            'Don\'t panic as the timer runs down',
            'Focus on accuracy to earn time bonuses',
            'Build combos for maximum points',
        ],
        initialTime: {
            easy: 90,
            medium: 60,
            hard: 45,
        },
    },
    {
        id: 'bomb-defuser',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/249/268/non_2x/bomb-game-ui-asset-use-for-powerup-vector.jpg',
        title: 'Bomb Defuser',
        type: 'bomb-defuse',
        icon: 'danger',
        iconBg: '#f44336', // error color
        description: 'Type the code quickly to defuse the bomb before time runs out!',
        longDescription: 'In Bomb Defuser, you must type complex codes perfectly to defuse virtual bombs. Each difficulty level increases the complexity of the codes and reduces available time.',
        difficulty: ['medium', 'hard'],
        difficultyDetails: [
            { level: 'medium', description: 'Alphanumeric codes, 30-second timer' },
            { level: 'hard', description: 'Complex codes with special characters, 20-second timer' },
        ],
        scoringRules: [
            '50 points for each defused bomb',
            'Time bonus: Up to 30 additional points for quick defusal',
            'Streak bonus: Points multiply for consecutive successful defusals',
        ],
        tips: [
            'Stay calm under pressure',
            'Pay close attention to special characters and capitalization',
            'Practice typing symbols to improve your reaction time',
        ],
        bombTimers: {
            medium: 30,
            hard: 20,
        },
    },
    {
        id: 'punctuation-pro',
        imageUrl: 'https://i.etsystatic.com/49907471/r/il/623f73/6177596469/il_fullxfull.6177596469_gxpl.jpg',
        title: 'Punctuation Pro',
        type: 'punctuation',
        icon: 'quote',
        iconBg: '#4caf50', // success color
        description: 'Master punctuation marks, numbers, and special characters through challenging exercises.',
        longDescription: 'Punctuation Pro focuses on the characters that many typists struggle with. Practice typing quotes, parentheses, numbers, and other special characters with increasing complexity.',
        difficulty: ['easy', 'medium', 'hard'],
        difficultyDetails: [
            { level: 'easy', description: 'Basic punctuation and numbers' },
            { level: 'medium', description: 'All punctuation marks and special characters' },
            { level: 'hard', description: 'Code snippets with complex syntax' },
        ],
        scoringRules: [
            '5 points for each correct character',
            'Bonus points for difficult characters (%, #, @, etc.)',
            'Perfect line bonus: +20 points for zero mistakes',
        ],
        tips: [
            'Pay extra attention to shift-key combinations',
            'Practice the number row without looking',
            'Maintain proper finger positioning even with unusual characters',
        ],
        timeLimit: {
            easy: 120,
            medium: 90,
            hard: 60,
        },
    },
];

// Word data by themes and difficulty levels
export const WORD_DATA = {
    animals: {
        easy: ['cat', 'dog', 'cow', 'pig', 'fox', 'bird', 'fish', 'frog', 'lion', 'bear'],
        medium: ['rabbit', 'turtle', 'giraffe', 'monkey', 'elephant', 'dolphin', 'penguin', 'zebra'],
        hard: ['chimpanzee', 'alligator', 'rhinoceros', 'hippopotamus', 'hummingbird', 'orangutan'],
    },
    colors: {
        easy: ['red', 'blue', 'pink', 'gray', 'gold', 'teal'],
        medium: ['purple', 'orange', 'yellow', 'violet', 'maroon', 'bronze'],
        hard: ['turquoise', 'lavender', 'magenta', 'burgundy', 'chartreuse', 'periwinkle'],
    },
    food: {
        easy: ['rice', 'fish', 'meat', 'egg', 'milk', 'bread'],
        medium: ['burger', 'noodle', 'cheese', 'yogurt', 'pastry', 'salmon'],
        hard: ['asparagus', 'guacamole', 'quesadilla', 'bruschetta', 'carbonara'],
    },
};

// Sentence data for Time Attack game
export const SENTENCE_DATA = {
    easy: [
        'The quick brown fox jumps over the lazy dog.',
        'She sells seashells by the seashore.',
        'How much wood would a woodchuck chuck?',
        'All that glitters is not gold.',
        'The early bird catches the worm.',
    ],
    medium: [
        'Imagination is more important than knowledge because knowledge is limited.',
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        "Life is what happens when you're busy making other plans.",
        'The way to get started is to quit talking and begin doing immediately.',
        "If you look at what you have in life, you'll always have more.",
    ],
    hard: [
        "The scientist's hypothesis stated that the calcium-dependent protein kinase would phosphorylate the substrate at a rate of 45 molecules per second.",
        "According to the quarterly financial report, the company's EBITDA increased by 17.3%, despite the 5.8% decrease in overall market capitalization.",
        'The blockchain algorithm implements a distributed ledger technology with cryptographic hash functions to ensure transaction immutability and network consensus.',
        'The architectural design incorporates passive solar heating, geothermal cooling systems, and photovoltaic panels to achieve net-zero energy consumption.',
        'The psychology experiment revealed that participants exhibited a statistically significant correlation between extroversion scores and reaction times (p<0.05).',
    ],
};

// Bomb codes for Bomb Defuser game
export const BOMB_CODES = {
    medium: [
        'RTX492', 'BCS719', 'MKL365', 'ZWQ801', 'JHP273',
        'VFT528', 'YGN946', 'XDU137', 'LOS582', 'APE429'
    ],
    hard: [
        'Kx7#9@Z', 'Qr5$2!Y', 'Jp3&8*W', 'Tn1^6+M', 'Bv4%0-L',
        'Gc2=9/F', 'Hs8<3>D', 'Fd6:7;A', 'Zw9(5)P', 'Lm2[4]S'
    ]
};

// Punctuation exercises for Punctuation Pro game
export const PUNCTUATION_DATA = {
    easy: [
        'Phone #: (555) 123-4567.',
        '25% of $80 is $20.',
        'Email me at: user@example.com',
        'Page 42, paragraph 3.',
        'Temperature: 72.5° Fahrenheit.',
    ],
    medium: [
        '"To be, or not to be: that is the question."',
        'Items needed: eggs (12), milk (1 gal.), bread ($3.50)!',
        'Visit https://www.example.com/path?query=123#fragment',
        'Formula: E = mc² [where m = mass]',
        'He said, "Don\'t forget the semi-colons; they\'re important!"',
    ],
    hard: [
        'function calculateArea(r) { return Math.PI * Math.pow(r, 2); }',
        'SELECT name, email FROM users WHERE age >= 18 ORDER BY name ASC;',
        '<div class="container" id="main-content"><!-- TODO: Add content --></div>',
        '#!/usr/bin/env python3\nprint(f"Result: {x * 100:.2f}%")',
        'git commit -m "Fixed bug #142 (crash when $value > 100%)"',
    ],
};
