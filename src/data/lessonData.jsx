import KeyboardIcon from '@mui/icons-material/Keyboard';
import SchoolIcon from '@mui/icons-material/School';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { colorPalette } from '@theme/colors';

const colors = colorPalette;

export const lessonCategoriesData = [
    {
        title: "Keyboard Basics",
        icon: <KeyboardIcon />,
        color: colors.primary,
        lessons: [
            {
                title: "Home Row Position",
                description: "The foundation of touch typing",
                content: "The home row is where your fingers should rest by default. Place your left fingers on A, S, D, F and your right fingers on J, K, L, ;. This position allows you to reach all keys efficiently with minimal movement.",
                imageUrl: "https://www.readandspell.com/sites/default/files/resource-image.webp",
                imageAlt: "Hand position on home row keys",
                difficulty: "Beginner"
            },
            {
                title: "Keyboard Layout",
                description: "Understanding the QWERTY keyboard",
                content: "The standard QWERTY keyboard has specific zones for each finger. Learning these zones helps you type without looking at the keyboard. Each finger is responsible for multiple keys in a vertical column, with the index fingers handling more keys than others.",
                imageUrl: "https://cdn.shopify.com/s/files/1/0609/5428/0135/files/keyboard_key_composition.jpg?v=1720662044",
                imageAlt: "QWERTY keyboard layout with finger positions",
                difficulty: "Beginner"
            },
            {
                title: "Finger Placement Guide",
                description: "Which finger to use for each key",
                content: "Left pinky: Q, A, Z and modifiers. Left ring: W, S, X. Left middle: E, D, C. Left index: R, F, V, T, G, B. Right index: Y, H, N, U, J, M. Right middle: I, K, comma. Right ring: O, L, period. Right pinky: P, semicolon, slash, and modifiers.",
                imageUrl: "https://i.pinimg.com/736x/56/dd/bc/56ddbc9767e15aeb959879ce217fd786.jpg",
                imageAlt: "Finger placement guide for all keys",
                difficulty: "Beginner"
            }
        ]
    },
    {
        title: "Proper Technique",
        icon: <SchoolIcon />,
        color: colors.secondary,
        lessons: [
            {
                title: "Posture & Ergonomics",
                description: "Setting up your workspace correctly",
                content: "Sit with feet flat on the floor, back straight against the chair. Position the keyboard so your elbows form a 90-degree angle. Your wrists should float above the keyboard, not rest on the desk. The monitor should be at eye level, about an arm's length away.",
                imageUrl: "https://healthandbalance.com.au/wp-content/uploads/2018/10/posture_desk.jpg",
                imageAlt: "Proper typing posture and ergonomics",
                difficulty: "Intermediate"
            },
            {
                title: "Hand Positioning",
                description: "The correct way to hold your hands",
                content: "Keep your hands curved and relaxed, as if holding a small ball. Your fingers should be slightly curved, not flat or overly bent. This natural position reduces strain and allows for quick, efficient key presses without excessive movement.",
                imageUrl: "https://cdn.autonomous.ai/production/ecm/250116/A-Guide-on-Proper-Keyboard-Hand-placement0000494b7fb02a7.webp",
                imageAlt: "Correct hand positioning for typing",
                difficulty: "Beginner"
            },
            {
                title: "Avoiding Bad Habits",
                description: "Common mistakes to watch for",
                content: "Avoid 'hunt and peck' typing with two fingers. Don't look at the keyboard while typing - train your muscle memory instead. Avoid pounding keys too hard or tensing your hands and wrists. Don't hunch over or maintain poor posture for long typing sessions.",
                imageUrl: "https://c8.alamy.com/comp/EH5E2F/stop-bad-habits-sign-painted-open-hand-raised-isolated-on-white-background-EH5E2F.jpg",
                imageAlt: "Common typing bad habits to avoid",
                difficulty: "Intermediate"
            }
        ]
    },
    {
        title: "Advanced Techniques",
        icon: <SpeedIcon />,
        color: colors.accent2,
        lessons: [
            {
                title: "Typing Rhythm",
                description: "Developing consistent keystroke timing",
                content: "The secret to fast typing isn't moving your fingers quickly—it's maintaining a steady, consistent rhythm. Focus on even timing between keystrokes rather than bursts of speed. This consistency builds muscle memory and ultimately leads to faster, more accurate typing.",
                imageUrl: "https://axbom.com/content/images/2020/11/fist-of-sender-keystroke-dynamics.jpg",
                imageAlt: "Visualization of typing rhythm",
                difficulty: "Advanced"
            },
            {
                title: "Keyboard Shortcuts",
                description: "Essential shortcuts for productivity",
                content: "Mastering common keyboard shortcuts can dramatically increase your efficiency. Learn combinations for copy (Ctrl+C), paste (Ctrl+V), cut (Ctrl+X), undo (Ctrl+Z), save (Ctrl+S), and application-specific shortcuts. Using shortcuts eliminates the need to move between keyboard and mouse.",
                imageUrl: "https://www.codewithfaraz.com/img/Complete%20List%20of%20Computer%20Shortcut%20Keys%20in%20One%20Place-compressed.jpg",
                imageAlt: "Common keyboard shortcuts illustrated",
                difficulty: "Intermediate"
            },
            {
                title: "Touch Typing Mastery",
                description: "Typing without looking at the keyboard",
                content: "True touch typing means keeping your eyes on the screen, not your hands. This skill takes practice but dramatically improves speed and accuracy. Focus on the text you're typing while trusting your fingers to find the correct keys through muscle memory.",
                imageUrl: "data:image/jpeg;base64,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",
                imageAlt: "Touch typing demonstration",
                difficulty: "Advanced"
            }
        ]
    },
    {
        title: "Ergonomics & Health",
        icon: <AccessibilityNewIcon />,
        color: colors.accent3,
        lessons: [
            {
                title: "Preventing RSI",
                description: "Avoiding Repetitive Strain Injury",
                content: "Repetitive Strain Injuries can develop from poor typing habits. Take frequent short breaks (5 minutes every hour). Use ergonomic equipment like split keyboards or wrist supports if needed. Perform stretching exercises for fingers, wrists, and forearms regularly.",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsMTUUJ1i-NWoTEVTYyN4lqfGP99M7fRSCg&s",
                imageAlt: "RSI prevention techniques and stretches",
                difficulty: "All Levels"
            },
            {
                title: "Workspace Setup",
                description: "Creating an ergonomic typing environment",
                content: "Position your chair so your feet rest flat on the floor with knees at a 90° angle. Your keyboard should be positioned so your wrists are straight and hands slightly below elbow level. Monitor should be at eye level. Consider using a document holder if typing from paper sources.",
                imageUrl: "https://cdn.shopify.com/s/files/1/2661/6120/t/26/assets/ascent-with-walnut-table-top-1679554678318.jpg?v=1679554681",
                imageAlt: "Ergonomic workspace setup",
                difficulty: "All Levels"
            },
            {
                title: "Eye Health",
                description: "Reducing eye strain while typing",
                content: "Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Adjust monitor brightness to match your environment. Consider blue light filtering glasses for extended sessions. Blink frequently to prevent dry eyes.",
                imageUrl: "https://prasadnetralaya.com/wp-content/uploads/2023/09/4fa941c8-b54b-4496-be29-9ebe980e1e8b.jpg",
                imageAlt: "Tips for reducing eye strain",
                difficulty: "All Levels"
            }
        ]
    }
];