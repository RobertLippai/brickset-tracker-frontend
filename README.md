# Brickset Tracker - Vue Frontend

This is the Vue 3 frontend for my BricksetTracker project. It connects to the [Brickset Tracker - Spring Boot API](https://github.com/RobertLippai/brickset-tracker-api), letting users search for and keep track of their LEGO sets.

## Tech Stack
* Vue 3
* Vite
* JavaScript
* CSS

## Roadmap
- [ ] **User Authentication:** Secure registration and login functionality using JWT.
- [ ] **Public Data Views:** Display all sets, brands, and tags for visitors.
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