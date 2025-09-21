# Brickset Tracker - Vue Frontend

This is the Vue 3 frontend for my BricksetTracker project. It connects to the [Brickset Tracker - Spring Boot API](https://github.com/RobertLippai/brickset-tracker-api), letting users search for and keep track of their brick sets.

![Brickset Tracker Homepage](./public/screenshot.png)
![Brickset Tracker Explore Sets Page](./public/screenshot_2.png)

## Features
* **Dynamic Set Catalog:** Fetches and displays brick sets from the backend API.
* **Responsive Design:** Works on both desktop and mobile, featuring a collapsible hamburger menu.
* **Component-Based Architecture:** Reusable components for the Navbar, Footer, Hero Section, Set List and Set Cards.

## Tech Stack
* Vue 3
* Vue Router
* Vite
* JavaScript
* Axios
* Tailwind CSS
* Font Awesome

## Roadmap
- [x] **Layout Foundation:** Create a responsive main layout with a navigation bar and footer.
- [x] **Explore Sets Page:** Display all sets from the API in a responsive grid.
- [ ] **Set Detail Page:** Display detailed information about a set.
- [ ] **Explore Brands Page:** Display all brands from the API in a responsive grid.
- [ ] **User Authentication:** Secure registration and login functionality.
- [ ] **User Inventory Management:** Allow logged-in users to add or remove sets from their personal collection.
- [ ] **Admin Panels:** (Future) Provide UI for users with `EDITOR` or `ADMIN` roles to manage Sets, Brands, Tags and Comments.

## Project Setup

### Prerequisites

- Node.js (v18 or newer)
- npm

### Installation and Development
1.  Clone the repository:
    ```sh
    git clone https://github.com/RobertLippai/brickset-tracker-frontend.git
    ```

2.  Navigate into the project directory:
    ```sh
    cd brickset-tracker-frontend
    ```

3.  Install the dependencies:
    ```sh
    npm install
    ```

4.  Compile and run the hot-reloading dev server:
    ```sh
    npm run dev
    ```