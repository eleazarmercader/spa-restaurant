
# Silk & Olive - Gourmet Restaurant Web Application

_**[Check live](http://restaurant.eleazarmercader.com/)**_

Silk & Olive is an SPA for a gourmet restaurant, that allows users to explore a list of delicious dishes, check detail info and to manage a cart.

## Setup Instructions

This section provides guidance on setting up the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (preferably the latest stable version)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A text editor (e.g., [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/))
- [Git](https://git-scm.com/) for version control

### Cloning the Repository

1. Open your terminal.
2. Change the current working directory to the location where you want the cloned directory.
3. Type the following command and press Enter:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
(Replace your-username and your-project-name with your GitHub username and the repository name.)

### Installing Dependencies

After cloning the project, you need to install its dependencies.

1. Navigate to the project directory:

   ```bash
   cd your-project-name
2. Install the required npm packages:

   ```bash
   npm install
4. Install other needed dependencies:

   ```bash
   npm install bootstrap react-router-dom prop-types tailwindcss postcss autoprefixer
This command will download and install all the dependencies listed in the package.json file
- [Bootstrap:](https://getbootstrap.com/docs/5.0/getting-started/introduction/) The world’s most popular framework for building responsive
- [React-Router-Dom:](https://reactrouter.com/en/main/) To implement implementing dynamic routing in web applications
- [Prop-types:](https://www.npmjs.com/package/prop-types/) Runtime type checking for React props and similar objects
- [Tailwindcss:](https://v2.tailwindcss.com/) A utility-first CSS framework
- [Postcss:](https://postcss.org/) A utility-first CSS frameworkA tool for transforming CSS with JavaScript
- [Autoprefixer:](https://github.com/postcss/autoprefixer/) To parse CSS and add vendor prefixes to CSS rules

### Starting the Development Server

To run the application in development mode:

1.  Use the following command:
    
    `npm run dev` 
    
2.  Open [localhost](http://localhost:5173/) to view the application in the browser
    
The page will reload if you make edits. You will also see any lint errors in the console.

## Functionality Description

The Silk & Olive Restaurant application aims to provide an intuitive and user-friendly digital experience, enhancing the overall customer interaction with the restaurant. Below is an overview of the key functionalities:

### Menu Viewing
-   **Browse Menu Items**: Users can view a list of all available dishes on the restaurant's menu. Each menu item is presented with its name and price.
-   **Item Details**: On every menu item, users can view more details about that dish, including a full description and list of ingredients.

### Cart Management
-   **Add to Cart**: Users have the option to add menu items to their shopping cart. This feature allows for a seamless selection process, ideal for planning a meal or making an order.
-   **View Cart and Modify Quantities**: The cart can be accessed at any time, displaying all items added. Users can adjust the quantities of each item or remove items as needed.
-   **Total Amount**: The cart also provides a total amount reflecting the sum of the prices of all the items in the cart, taking into account their quantities.

### Contact Information

-   **Restaurant Contact**: The application includes contact details of the restaurant, such as email and phone number, enabling users to easily get in touch for inquiries or further information.

### Responsive Design

-   **Cross-Device Compatibility**: The application is designed to be responsive, ensuring an optimal user experience across various devices, including both mobile and desktop.

## Future Implementations

The "Silk & Olive Restaurant" web application is designed with scalability in mind, ready to evolve and expand its features. We're excited about the roadmap ahead and here are some of the upcoming functionalities we plan to implement:

### About Us Component 

-   **Engaging Storytelling**: This component will provide visitors with insights into the history, vision, and values of the Silk & Olive Restaurant, enhancing the connection with customers.
-   **Meet the Team**: Highlight the chefs, management, and staff, giving a personal touch to the restaurant's digital presence.

### Seasonal Specials Banner/Pop up Component

-   **Highlight Seasonal Dishes**: A dedicated banner to showcase special dishes of the season, enticing customers with timely and fresh offerings.
-   **Dynamic Updates**: This feature will allow for easy updates to promote the latest seasonal specials, keeping the menu exciting and current.

### Hover-to-Add-to-Cart in MenuItem

-   **Efficient Selection Process**: Implementing a hover feature on menu items that allows users to add dishes to their cart directly, streamlining the ordering process.
-   **Interactive User Experience**: Enhances the interactivity of the menu, making the selection process both efficient and enjoyable.

### Social Media Dish Sharing

-   **Share with Friends**: Users can share their favorite dishes on whatsapp and/or social media platforms, increasing the restaurant's reach and customer engagement.
-   **Word-of-Mouth Promotion**: Leverage social sharing as a tool for organic marketing and customer-driven endorsements.

### Related Dishes Component by Ingredient

-   **Discover Similar Flavors**: This component will suggest related dishes to users based on the ingredients of the item they are viewing.
-   **Personalized Recommendations**: Enhances user experience by providing personalized dish recommendations, encouraging exploration of the menu.

### Checkout Component

-   **Seamless Checkout Process**: A dedicated checkout component for a smooth and hassle-free payment experience.
-   **Multiple Payment Options**: Integration of various payment methods to cater to all customer preferences.

### TopBar Component

-   **Navigation and Information Hub**: A top bar that provides easy navigation to different sections of the application and quick access to essential information.
-   **User-Friendly Interface**: Enhances the overall usability of the app, making it more accessible and convenient for users.

### Data Fetching through API

-   **Dynamic Content**: Integration of API to fetch and display real-time data, ensuring the menu and content are always up-to-date.
-   **Backend Connectivity**: Allows for seamless synchronization with the restaurant's management system for menu updates, specials, and more.

Each of these features is designed to enhance user engagement, streamline the ordering process, and enrich the overall digital experience of the Silk & Olive Restaurant. Stay tuned for these exciting updates!
