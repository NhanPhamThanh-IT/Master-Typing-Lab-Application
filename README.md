# 🚀 PTN-TypeMaster - Modern Typing Test & Practice Application

<div align="center">
  
![Stars](https://img.shields.io/github/stars/NhanPhamThanh-IT/Master-Typing-Lab-Application?style=social) ![Contributors](https://img.shields.io/github/contributors/NhanPhamThanh-IT/Master-Typing-Lab-Application?style=flat-square) ![Last Commit](https://img.shields.io/github/last-commit/NhanPhamThanh-IT/Master-Typing-Lab-Application) ![License](https://img.shields.io/github/license/NhanPhamThanh-IT/Master-Typing-Lab-Application)

</div>

## 📋 Overview

PTN-TypeMaster is a comprehensive typing practice application developed with a modern, highly interactive interface that helps users improve their typing speed, accuracy, and efficiency. The application provides a practice environment through tests, structured lessons, and engaging games.

### 🎯 Project Objectives

- Provide a comprehensive platform for users to improve their typing skills
- Create an engaging learning experience through interactive games
- Deliver detailed analytical data for users to track their progress
- Build a dynamic typing learning community

## ✨ Detailed Features

### 📊 Typing Test

The typing test is the core feature of the application, helping users evaluate and track their typing progress.

#### Key Functions:

- **Real-time Measurement**:

  - Track WPM (Words Per Minute)
  - Measure accuracy (%) during typing
  - Count and classify errors (addition, deletion, replacement of characters)
- **Test Customization**:

  - Adjust difficulty (easy, medium, hard)
  - Choose text length options (short, medium, long)
  - Set time limits (1 minute, 2 minutes, 5 minutes, unlimited)
  - Select content categories (literature, technology, sports, etc.)
- **Detailed Results Panel**:

  - Performance charts over time
  - Comparison with previous results
  - Analysis of slow and incorrect keystrokes
  - Lesson and game recommendations based on results
- **Technical Implementation**:

  - Uses components like `TextDisplay.jsx`, `TypingArea.jsx`, `ActionButtons.jsx`
  - Performance calculation with `typingUtils.js` (calculateWPM, calculateAccuracy, isCorrectChar)
  - Results display through `ResultsPanel.jsx` and `StatsBar.jsx`

### 📚 Typing Lessons

Typing lessons provide a structured learning path from basic to advanced levels.

#### Detailed Functions:

- **Structured Curriculum**:

  - **Basic Level**: Standard hand positioning, home row, basic keys
  - **Intermediate Level**: Typing speed, finger transition techniques, number typing
  - **Advanced Level**: Special character typing, high speed, absolute accuracy
- **Categorized Content**:

  - **By Keyboard Area**: Home row, top row, bottom row
  - **By Exercise Type**: Speed, accuracy, combination
  - **By Category**: Business, programming, literature
- **Interactive Learning**:

  - Direct feedback when typing incorrectly
  - Visual guidance for finger positioning
  - Adaptive lessons based on performance
- **Professional Tips**:

  - Proper typing posture
  - Finger relaxation techniques
  - Advice from high-speed typing experts
- **Technical Implementation**:

  - Lesson display through `LessonCard.jsx` and `LessonContent.jsx`
  - Lesson categorization with `LessonTabs.jsx`
  - Lesson data stored in `lessonData.jsx`
  - Color interface managed by `colors.js`

### 🎮 Typing Games

Typing games make practice more fun and engaging.

#### Game Details:

1. **Word Master**

   - **Description**: Theme-based vocabulary typing game
   - **How to Play**: Type words accurately before time runs out
   - **Diverse Themes**: Technology, science, literature, sports
   - **Features**:
     - Scoring system based on word difficulty
     - Bonus mechanism for consecutive correct words
     - Audio feedback effects (correct/wrong)
   - **Technology**: Uses `WordTypingGame.jsx` and data from `constants.js`
2. **Time Attack**

   - **Description**: Typing challenge with decreasing time
   - **How to Play**: Type correctly to gain time, mistakes reduce time
   - **Progressive Difficulty**: From short to long words, simple to complex
   - **Features**:
     - Visual time bar
     - "Panic Mode" when time is running low
     - High score leaderboard
   - **Technology**: Uses `TimeAttackGame.jsx` with countdown system
3. **Bomb Defuser**

   - **Description**: Type correctly to defuse the bomb before it explodes
   - **How to Play**: Type complex character strings accurately, no mistakes allowed
   - **Levels**:
     - Easy: Only letters and numbers
     - Medium: Added special characters
     - Hard: Long strings, short time, complex characters
   - **Features**:
     - Audio and visual effects during countdown
     - Success/failure bomb defusal animations
   - **Technology**: Implemented in `BombDefuseGame.jsx`
4. **Punctuation Pro**

   - **Description**: Focuses on typing special characters and punctuation
   - **How to Play**: Type text accurately with many punctuation marks and special characters
   - **Content**: Source code, academic text, complex grammar
   - **Features**:
     - Highlighting of each type of special character
     - Detailed statistics by character type
     - Quick typing tips for complex characters
   - **Technology**: Implemented in `PunctuationGame.jsx`

### 📱 Responsive Design

The application is designed to work smoothly across various devices and screen sizes.

#### Implementation Details:

- **Desktop**: Full interface with optimized layout for large screens

  - Side-by-side display of information sections and typing area
  - Utilizes space to show detailed analytics and charts
- **Tablet**: Adjusted layout for medium screens

  - Rearranged components for easy touch screen use
  - Optimized key sizes and interaction spacing
- **Mobile**: Focused interface for small screens

  - Vertical layout, prioritizing the typing area
  - Swipe functionality to switch between content sections
- **Technical Implementation**:

  - Uses Material-UI Grid and Box components to build flexible layouts
  - Custom media queries and breakpoints for different screen sizes
  - Uses `theme.js` to manage responsive design

## 🧩 Application Architecture

### Detailed Directory Structure

```
src/
├── App.jsx                # Main routing component using React Router
├── main.jsx               # Application entry point, renders App in BrowserRouter
├── theme.js               # Material-UI theme configuration (colors, typography, breakpoints)
├── assets/                # Static resources
│   ├── home-hero-background.png  # Background image for hero section
│   └── home-how-it-work.png      # How it works illustration
├── components/            # Reusable components
│   ├── contact/           # Contact page components
│   │   ├── ContactForm.jsx    # Contact form with validation
│   │   ├── ContactInfo.jsx    # Contact information
│   │   ├── LocationMap.jsx    # Location map
│   │   └── SocialLinks.jsx    # Social media links
│   ├── home/              # Home page components
│   │   ├── HeroSection.jsx    # Main banner
│   │   ├── FeaturesSection.jsx # Features introduction
│   │   └── TestimonialsSection.jsx # User testimonials
│   ├── layout/            # Layout components
│   │   ├── GeneralLayout.jsx  # General layout for main pages
│   │   ├── PracticeLayout.jsx # Layout for practice area
│   │   ├── Header/           # Top navigation bar
│   │   ├── Footer/           # Footer
│   │   └── Sidebar/          # Practice sidebar
│   └── practice/          # Practice components
│       ├── TypingTest/       # Typing test components
│       ├── TypingLessons/    # Lesson components
│       └── TypingGames/      # Game components
├── constants/             # Application-wide constants
│   ├── routePaths.js      # Navigation path definitions
│   └── textConstants.js   # Text constants
├── data/                  # Static data
│   ├── lessonData.jsx     # Typing lesson data
│   ├── privacyPolicyData.js # Privacy policy content
│   └── termsOfUseData.js  # Terms of use content
├── hooks/                 # Custom React hooks
│   └── useLazyLoadImage.jsx # Lazy image loading hook
├── pages/                 # Main pages
│   ├── MainPage/          # Main pages
│   │   ├── HomePage.jsx      # Home page
│   │   ├── TypingTestPage.jsx # Typing test page
│   │   ├── TypingLessonsPage.jsx # Lessons page
│   │   ├── TypingGamesPage.jsx   # Games page
│   │   └── GamePages/        # Individual game pages
│   └── SubPage/           # Auxiliary pages
│       ├── NotFoundPage.jsx   # 404 page
│       └── PrivacyPolicyPage.jsx # Policy page
└── utils/                 # Utilities
    └── typingUtils.js     # Typing utility functions
```

### 🛠️ Detailed Technology Stack

<div align="center">
  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![SWC](https://img.shields.io/badge/SWC-FFB300?style=for-the-badge&logo=swc&logoColor=black) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

</div>

#### Frontend Framework

- **React 19**: Using the latest React features

  - Hooks (useState, useEffect, useRef, useCallback)
  - Concurrent Mode for performance optimization
  - Suspense for code-splitting and lazy loading
  - Error Boundaries for elegant error handling
- **React Router 7**: Client-side navigation

  - Component-level routing with Routes and Route
  - Lazy loading for routes to optimize performance
  - Integrated UI transitions during navigation

#### UI Framework and Styling

- **Material-UI 7**:

  - Comprehensive component system (Box, Grid, Paper, Typography)
  - Custom theming with theme.js
  - Styling with Emotion (@emotion/react and @emotion/styled)
  - Responsive design with breakpoints
- **Icon Libraries**:

  - Font Awesome (diverse icons for the interface)
  - MUI Icons (optimized icons for Material-UI)
  - Lucide React (simple, modern icons)

#### Build Tools and Development

- **Vite 6**: Modern build tool

  - Ultra-fast dev server with Hot Module Replacement
  - Optimized production builds
  - Diverse plugin ecosystem
- **ESLint**: Ensuring code quality

  - Configured with eslint.config.js
  - React Hooks plugin to enforce hooks rules
  - React Refresh plugin for better dev experience
- **SWC**: High-performance JavaScript compiler

  - Integrated through @vitejs/plugin-react-swc
  - Faster compilation than Babel
  - Full support for ES6+ features

## 🚀 Detailed Installation Guide

### System Requirements

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 7.0.0 or higher
- **Modern Browser**: Chrome, Firefox, Edge, Safari (latest versions)
- **Disk Space**: At least 500MB free
- **RAM**: Minimum 4GB (8GB+ recommended)

### Detailed Installation

1. **Clone repository**

```powershell
git clone https://github.com/yourusername/typing-test-application.git
cd typing-test-application
```

2. **Install dependencies**

```powershell
npm install
```

3. **Create .env file if necessary**

```powershell
Copy-Item ".env.example" -Destination ".env"
```

4. **Start the application in development mode**

```powershell
npm run dev
```

5. **Access the application**
   - Open your browser and navigate to: `http://localhost:5173`
   - Admin interface: `http://localhost:5173/admin` (if available)

### Useful Commands

```powershell
npm run build          # Create production build
npm run preview        # Run preview server for build
npm run lint           # Check ESLint errors
```

## 📊 Tracking and Reporting Features

### User Dashboard

The application provides a detailed dashboard for users to track their progress:

- **Progress Charts**: Shows improvement in WPM and accuracy over time
- **Keyboard Heat Map**: Identifies which keys are typed slowly or incorrectly
- **Error Analysis**: Categorizes errors into groups (addition, deletion, substitution)
- **Detailed Statistics**: Total practice time, words typed, average accuracy

### Ranking System

- **Global Leaderboard**: Compare with other users
- **Achievement Badges**: Unlock when reaching important milestones
- **Weekly Challenges**: New challenges each week with dedicated leaderboards

## 📚 API Documentation

### API Structure

```
/api
├── user/               # User management endpoints
├── typing-tests/       # Test data and results
├── lessons/            # Lesson content and progress
└── games/              # Game stats and leaderboards
```

### Authentication

- **JWT-based authentication**
- **OAuth integration** with Google, Facebook
- **Role-based access control** for admin and users

## 📱 Progressive Web App (PWA)

The application is built with PWA capabilities:

- **Offline support**: Uses service workers to function offline
- **Installable**: Can be installed on mobile and desktop devices
- **Push notifications**: Notifies users about new challenges, updates

## 📄 License

PTN-TypeMaster is released under the MIT License - see the LICENSE file for details.

```
MIT License

Copyright (c) 2025 PTN-TypeMaster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Contributing

We welcome contributions to the project! Here's how:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Create a Pull Request**

### Contribution Guidelines

- Follow the code style rules in ESLint
- Write unit tests for new features
- Update documentation when necessary
- Make sure all tests pass before creating a PR

## 📬 Contact

- **Website**: [https://ptntypemaster.com](https://ptntypemaster.com)
- **Email**: ptnhanit230104@gmail.com
- **GitHub Issues**: [https://github.com/NhanPhamThanh-IT/typing-test-application/issues](https://github.com/yourusername/typing-test-application/issues)

## 🗺️ Development Roadmap

### Coming Soon

- **Multiplayer mode**: Compete directly with other users
- **AI Integration**: Typing analysis and personalized recommendations
- **Multiple language support**: Expanding to Vietnamese, French, German, etc.
- **Native mobile apps**: iOS and Android versions

---

© 2025 PTN-TypeMaster. All rights reserved.
