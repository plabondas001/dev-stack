# 🚀 DevStack

DevStack is a simple technology stack management website built with React and TypeScript. Users can explore different technologies, view their information, and add their favorite technologies to their personal stack.

---

## 🌐 Live Website

🔗 [Visit DevStack](https://devstack-1.netlify.app/)

---

## 📸 Project Screenshot

![DevStack Screenshot](https://i.ibb.co.com/BKrDKFkN/screencapture-localhost-5174-terms-2026-09-11-19-58-51.png)

---

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Icons
- Vite
- JSON
- React Hooks

---

## ✨ Features

### 1. Explore Technologies

Users can explore different technologies and see their name, category, description, rating, difficulty, and badge.

### 2. Add Technologies to Stack

Users can add their favorite technologies to their personal stack and see the technologies they have selected.

### 3. Remove Technologies

Users can remove technologies from their personal stack whenever they want.

### 4. Responsive Design

The website has a clean and responsive design that works well on different screen sizes.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

## 2. What is the difference between props and state?

Props are used to pass data from one component to another, while state is used to manage data inside a component. Props are read-only, but state can be updated.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to manage changing data in a component. I used it to manage the technologies selected by the user.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used for side effects. I used it to load the JSON data when the component loaded.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and update the list efficiently.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing UI based on a condition. I used it to show a message when the selected technology stack is empty.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send information back by calling a function passed from the parent through props.

---

## 📂 Project Structure

```text
DevStack/
├── public/
├── src/
│   ├── components/
│   ├── dataType/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md