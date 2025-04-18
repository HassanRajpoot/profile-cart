# Profile Cart App

A fully featured, responsive React application that allows users to update their profile, toggle light/dark themes, and manage a persistent shopping cart — all powered by **Redux Toolkit**, **React Hook Form**, **Tailwind CSS**, and **React Toastify**. Data is securely stored using `redux-persist-transform-encrypt`.

---

## 🚀 Features

-  **Encrypted State Persistence** using Redux Persist + Encryption
-  **Theme Toggle** — Light / Dark / System modes
-  **Profile Settings Form** (First Name, Last Name, Email)
-  **Form Validation** via React Hook Form
-  **Shopping Cart** with add/remove and item count
-  **Toast Notifications** for cart and profile actions
-  **Tailwind CSS** UI with dark mode support
-  **Persisted Redux State** across sessions

---

## Tech Stack

- **React**
- **Redux Toolkit**
- **React Hook Form**
- **Redux Persist**
- **redux-persist-transform-encrypt**
- **Tailwind CSS**
- **React Router DOM**
- **React Toastify**

---

## 📂 Folder Structure

src/
│
├── components/
│   ├── Cart.jsx
│   ├── Products.jsx
│   └── ThemeToggle.jsx
|   └── ItemCard.jsx
|   └── FoodItems.jsx
|   └── FoodCard.jsx
│
├── pages/
│   └── Settings.jsx
|   └──Profile.jsx
|   └──Home.jsx
│
├── redux/
│   ├── store.js
│   ├── cartSlice.js
│   ├── profileSlice.js
│   └── themeSlice.js
│
├ 
├── App.jsx 
└── index.js
