🛒 Shopping Cart
A modern and efficient shopping cart web application built using React and scaffolded with Vite for high performance and smooth user experience.

## 🚀 Features
Fast Development with Vite.

Modern UI built with React and React DOM .

Client-Side Routing using React Router DOM.

Lazy Loading of components using React.lazy and Suspense for performance optimization.

Global State Management with Redux Toolkit.

Search and Category Filtering functionality.

Stylish and Responsive Design using Tailwind CSS and styled-components.

API Integration with Axios for fetching product data.

User Notifications with React Toastify.

## 🏗️ Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   └── CartList.jsx
├── redux/
│   ├── slices/
│   │   ├── productsSlice.js
│   │   ├── cartSlice.js
│   │   ├── categorySlice.js
│   │   └── searchQuerySlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── assets/

##  🛠️ Technologies Used

Framework: React 

Build Tool: Vite

State Management: Redux Toolkit

Routing: React Router DOM

Styling: Tailwind CSS

HTTP Requests: Axios

Notifications: React Toastify

## 🌐 Available Routes

Route	Description

/	Displays the available products
/cart	Displays the user's shopping cart
📋 State Slices
products: Fetches and stores product data, including loading and error states.

cart: Manages cart items, quantity adjustments, and removal actions.

category: Handles product category management (for filtering).

searchQuery: Manages the search input for product filtering.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a pull request.

