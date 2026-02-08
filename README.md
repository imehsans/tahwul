# 🚀 Tahwul Frontend Dashboard

A modern, bilingual (English/Arabic), and responsive dashboard application designed for tracking digital transformation progress. Built with high performance and scalability in mind using the latest React ecosystem.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Tech Stack](#-tech-stack)
3. [How to Run the Code](#-how-to-run-the-code)
4. [Development Procedure](#-development-procedure)
5. [Assumptions & Limitations](#-assumptions--limitations)
6. [Future Improvements](#-future-improvements)

---

## 🌟 Project Overview

This dashboard allows users to:
- **Visualize Progress**: Track strategic objectives via interactive charts and timelines.
- **Manage Evidence**: Upload and review documents related to digital transformation standards.
- **Bilingual Interface**: Seamlessly switch between English (LTR) and Arabic (RTL) layouts.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

---

## 🛠 Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand), [React Query](https://tanstack.com/query/latest)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Internationalization**: [i18next](https://www.i18next.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## � How to Run the Code

Follow these steps to set up the project locally on your machine.

### 1. Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or higher recommended) -> [Download Here](https://nodejs.org/)
- **npm** (comes with Node.js)

### 2. Installation
Open your terminal/command prompt and navigate to the project folder:

```bash
# Navigate to the project directory
cd tahwul-frontend

# Install all necessary dependencies
npm install
```

### 3. Start Development Server
To run the app in development mode with hot-reloading:

```bash
npm run dev
```
> The application will typically start at `http://localhost:5173`. Open this URL in your browser.

### 4. Build for Production
To create an optimized build for deployment:

```bash
npm run build
```
The output will be generated in the `dist/` folder. You can preview it using:
```bash
npm run preview
```

---

## 🏗 Development Procedure

### How I Built This
1.  **Component-Driven Architecture**: I broke down the UI into reusable atomic components (`Card`, `Badge`, `Button`) and composed them into complex widgets (`ProjectTimeline`, `OverallCompliance`).
2.  **Mock Data Strategy**: Instead of hardcoding values in components, I created a centralized `src/data/mockData.js`. This captures the API response structure, making it easy to swap with a real backend later.
3.  **Pixel-Perfect Implementation**: I meticulously followed the provided visual references, ensuring the colors, spacing, and typography match the "Year 2050" modern aesthetic.
4.  **Internationalization (i18n)**: Implemented specialized translation files (`en.json`, `ar.json`) and a language switcher that dynamically updates the HTML `dir` attribute for correct RTL layout.

### Key Directories
- `src/pages`: Main application screens (Dashboard, Login, Details).
- `src/components`: Reusable UI elements (Layouts, Charts, Cards).
- `src/data`: JSON-like mock data simulating API responses.
- `src/i18n`: Configuration for multilanguage support.

---

## 🧐 Assumptions & Limitations

1.  **Authentication**: The login screen (`/`) accepts any email/password combination for demonstration purposes. There is no real backend authentication.
2.  **Data Persistence**: Changes (like posting a comment) are local to the current session or simplistic state, as there is no database. Refreshing the page may reset data.
3.  **Browser Support**: Developed and tested on modern browsers (Chrome, Edge, Firefox). IE11 is not supported.

---

## � Future Improvements

With more time, I would enhance the application by:
1.  **Backend Integration**: Connect to a Node.js/Express or Python backend to persist data.
2.  **Advanced State Management**: Use server-state tools more effectively for caching and synchronization.
3.  **Testing Suite**: Add Unit Tests (using Vitest) and End-to-End Tests (using Cypress) to ensure stability.
4.  **Accessibility (a11y)**: Audit and improve screen reader support and keyboard navigation to comply with WCAG standards.
5.  **Dark Mode**: Implement a system-aware dark theme using Tailwind's dark mode features.
