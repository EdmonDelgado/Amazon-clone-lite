# 🛒 Amazon Clone Lite

This is a practice project where I built a lightweight version of Amazon’s main page.  
The goal is to strengthen my skills in **JavaScript, DOM manipulation, API calls, arrays, OOP (classes, objects, inheritance), and local storage (localStorage)**.

## 🚀 Features
- **Dynamic product catalog**: products are fetched from an external backend (`https://supersimplebackend.dev/products`).  
- **Classes and inheritance**:  
  - `Product`, `Clothing`, and `Appliance` extend specific functionalities (e.g., *size chart* for clothing, *warranty/instructions* for appliances).  
- **Shopping cart with localStorage**:  
  - Persistence of added items using the `Cart` class.  
  - Methods to add, remove, update quantities, and change delivery options.  
- **DOM manipulation**: dynamic rendering of products, cart items, and quantities.  
- **Responsive design**: built with HTML5 and CSS3 to simulate Amazon’s UI.

## 🔨 Coming Features / Work in Progress

- Making the search bar engine fully functional
- Making orders tracking interactive
- Implementing the “Buy Again” feature in the shopping experience

## 🛠️ Tech Stack

- **HTML5**  
- **CSS3** (modular and responsive styling)  
- **JavaScript (ES6+)**  
  - Classes, objects, and inheritance  
  - Array methods and arrow functions  
  - Fetch API and XMLHttpRequest  
  - LocalStorage  

## 📂 Project Structure

amazon.html, checkout.html, orders.html, tracking.html, README.md
backend/            → Contains products.json
data/               → Project logic: cart management (cart-class.js, cart-oop.js, cart.js) and classes (Cart, Products, DeliveryOptions, Orders)
images/             → Site images, product images, icons, and ratings
script/             → JS scripts per page and utilities
styles/             → Modular CSS (shared and page-specific)
tests/              → Automated tests with Jasmine

## 📚 What I Learned

- How to organize a **modular JavaScript project**.  
- Practical use of **OOP (classes, inheritance, encapsulation with private fields)**.  
- Differences between `fetch` and `XMLHttpRequest`.  
- Using **localStorage** to persist data across sessions.  
- Connecting frontend with a **backend API** to load products.  
- Writing automated tests with Jasmine.

## 📦 How to Run
- View online via GitHub Pages:
  - The project is hosted at: https://your-username.github.io/amazon-clone-lite/
  - Simply open the link in your browser to explore the main page, checkout, orders, and tracking pages.
