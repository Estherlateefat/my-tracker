1️⃣ README.md (Copy–Paste Ready)
# 💰 Personal Finance Tracker

A modern and responsive **Personal Finance Tracker** built with **React** and **Tailwind CSS**.  
The application allows users to record income and expenses, automatically calculate balance, and persist data using localStorage.

---

## 🚀 Features

- Add income and expense transactions
- Automatic calculation of:
  - Total income
  - Total expenses
  - Current balance
- Transaction history with delete option
- Persistent data storage using localStorage
- Responsive and clean UI with Tailwind CSS
- Component-based React architecture

---

## 🛠️ Technologies Used

- React (with Hooks)
- Tailwind CSS (v4)
- Vite
- JavaScript (ES6+)
- LocalStorage API

---

## 📂 Project Structure



src/
├── components/
│ ├── BalanceSummary.jsx
│ ├── TransactionForm.jsx
│ └── TransactionList.jsx
├── App.jsx
├── main.jsx
└── index.css
Screenshots
![Dashboard](screenshots/dashboard.png)
![Add Transaction](screenshots/add-transaction.png)

GitHub: https://github.com/Estherlateefat/my-tracker
 🌐 Live Demo
Live Demo: https://my-tracker-five.vercel.app

## ▶️ How to Run Locally

1. Clone the repository
```bash
git clone <your-repo-link>
Install dependencies
npm install
Start the development server
npm run dev


👩‍💻 Author
Suara Lateefat Esther
Frontend Development Student
PROJECT REPORT
PROJECT TITLE: Personal Finance Tracker
INTRODUCTION
The Personal Finance Tracker is a web-based application developed to help users manage their daily income and expenses efficiently. The application provides a simple interface for recording transactions and automatically calculating financial summaries.
AIM AND OBJECTIVES
Aim:
To build a responsive and functional finance tracking application using modern frontend technologies.
Objectives:
- Allow users to record income and expenses
- Automatically calculate balance
- Store transaction data persistently
- Build a clean and user-friendly interface
TOOLS AND TECHNOLOGIES USED
- React
- Tailwind CSS
- Vite
- JavaScript
- LocalStorage
SYSTEM DESIGN
The application follows a component-based architecture:
- TransactionForm: handles user input
- TransactionList: displays transactions
- BalanceSummary:calculates and displays totals
- App.jsx :manages global state and logic
IMPLEMENTATION
React hooks (`useState`, `useEffect`) were used for state management and data persistence. Tailwind CSS was used for styling and responsiveness.
RESULT
The application successfully tracks financial transactions, calculates totals accurately, and maintains data even after page refresh.
CONCLUSION
The Personal Finance Tracker demonstrates effective use of React and Tailwind CSS in building a real-world frontend application.

DEPLOYMENT HELP (VERCEL – STEP BY STEP)
Step 1: Push to GitHub
``bash
git init
git add .
git commit -m "Final Personal Finance Tracker"
git branch -M main
git remote add origin <your-github-repo-link>
git push -u origin main

Step 2: Deploy on Vercel
Go to vercel.com
Click New Project
Import GitHub repository
Framework: Vite
Build command:npm run build
Output directory:dist
Click Deploy
✅ You’ll get a live URL.



































git clone https://github.com/Estherlateefat/my-tracker.git
