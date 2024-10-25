# Capstone Project 3 - Blog Web Application

This project is a **Blog Web Application** developed using **Node.js**, **Express.js**, and **EJS**. Completed as part of **The Complete 2024 Web Development Bootcamp** by Dr. Angela on Udemy, this project showcases a dynamic website where users can create, view, edit, and delete blog posts. Since no database is implemented in this version, posts will not persist across sessions.

## Project Overview

The goal of this project is to create a functional and stylish blog application where users can manage posts. Emphasis was placed on providing a responsive and accessible user experience across both desktop and mobile devices.

### Features

1. **Post Creation**: Users can create new blog posts with a title and content, which will display on the home page.
2. **Post Viewing**: The home page lists all posts created in the session, allowing users to browse their blog content.
3. **Post Update/Delete**: Each post can be edited or deleted as desired by the user, offering complete control over their blog entries.
4. **Responsive Styling**: The application is designed to be visually appealing and fully responsive, ensuring a seamless user experience across different screen sizes.

### Technologies Used

- **Node.js**: Server-side runtime environment for executing JavaScript on the server.
- **Express.js**: Web framework for Node.js, handling routing and server setup.
- **EJS (Embedded JavaScript)**: Templating engine for dynamically generating HTML pages with JavaScript.
- **CSS3**: Used for styling and layout, including responsive design elements.

### Project Sections

- **Home Page**: Displays a list of all blog posts created during the session.
- **Create Post Page**: A form where users can submit a new blog post, including fields for a title and content.
- **Edit Post Page**: Allows users to edit existing posts.
- **Responsive Styling**: The design adapts to different screen sizes, ensuring the application is usable on both mobile and desktop.

### Folder Structure

```plaintext
Capstone Project 3/
├── public/
│   ├── css/
│   │   └── styles.css      # Main CSS file for styling
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Header partial for page layout
│   │   └── footer.ejs      # Footer partial for page layout
│   ├── blogDetails.ejs            # To see all the description 
│   ├── blogList.ejs         # To see all the blog in a list
│   ├── index.ejs            # The home page of project
├── indes.js                  # Main server file for the application
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

### Setup and Usage
  #### To run this project locally:
1. **Clone the repository:**
   ```bash
    git clone https://github.com/your-username/blog-app.git
    cd blog-app
    ```

2. **Install dependencies:**
     ```bash
    npm install
     ```

3. Run the application:
    ```bash
    npm start
    ```

4. Access the application:
    Open your browser and go to `http://localhost:3000`

## Project Learnings
This project provided hands-on experience with:
- Setting up a Node.js and Express.js server.
- Building dynamic web pages with EJS.
- Creating and handling CRUD operations (create, read, update, delete) for blog posts.
- Enhancing user experience with responsive design and layout.

## Future Improvements

- Data Persistence: Use a database such as MongoDB or SQLite to save posts between sessions.
- User Authentication: Implement user accounts for personalized posts.
- Additional Features: Add functionality for comments, likes, and post categories.


This project demonstrates foundational skills in building a Node.js application with Express and EJS, focusing on CRUD operations, responsive design, and good user experience.
