import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";


const app = express();
const port = 3000;
const __dirname = path.resolve();
const homePath = path.join(__dirname, "views/blogList.ejs");
const blogDetailsPath = path.join(__dirname, "views/blogDetails.ejs");
// const BLOG_FILE_PATH = path.join(__dirname, 'blogs.json');

// const loadBlogs = () => {
//   try {
//       if (fs.existsSync(BLOG_FILE_PATH)) {
//           const data = fs.readFileSync(BLOG_FILE_PATH, 'utf-8');
//           return JSON.parse(data); // Parse JSON data from file
//       } else {
//           return []; // If the file doesn't exist, return an empty array
//       }
//   } catch (error) {
//       console.error("Error loading blogs:", error.message);
//       return []; // In case of error, return an empty array
//   }
// };


// const saveBlogs = (blogs) => {
//   try {
//       fs.writeFileSync(BLOG_FILE_PATH, JSON.stringify(blogs, null, 2)); // Save JSON to file
//   } catch (error) {
//       console.error("Error saving blogs:", error.message);
//   }
// };


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Global error handling middleware
// app.use((err, req, res, next) => {
//   console.error("Unhandled error:", err.message);
//   res.status(500).send("<h1>Internal Server Error</h1>");
// });


// Render index page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

let blogList = [];

app.post("/blogList", (req, res) => {
    const blogTitle = req.body.blogTitle;
    const blogDescription = req.body.blogDes;
    blogList.push({
      id: generateID(),
      title: blogTitle,
      description: blogDescription,
    });
    res.render(homePath, {
      blogList: blogList,
    });
  });

//   app.post('/blogList', (req, res) => {
//     try {
//       blogList = loadBlogs(); // Load current blogs
//       const newBlog = {
//         id: Date.now(), // Unique ID based on timestamp
//         title: req.body.blogTitle,
//         description: req.body.blogDes
//       };

//       blogList.push(newBlog); // Add new blog to the list
//       saveBlogs(blogList); // Save the updated list to file

//       res.render(homePath, {
//       blogList: blogList,
//       });
//     } catch (error) {
//       console.error("Error creating blog:", error.message);
//       res.status(500).send("<h1>Internal Server Error</h1>");
//   }
// });

  app.get('/blogList', (req, res) => {
    // Fetch or create the blogList (e.g., from a database or static data)
    res.render('blogList', { blogList }); // Pass blogList to the view
});
// app.get('/blogList', (req, res) => {
//   blogList = loadBlogs(); // Load blogs from file
//   res.render('blogList', { blogList });
// });

  app.get("/home", (req, res) => {
    res.render("index.ejs");
  });
  
  app.get("/blogDetails/:id", (req, res) => {
    const blogId = req.params.id; // This is a string
    
    // const blogList = loadBlogs(); // Reload the blog list

    console.log("Blog List:", blogList); // Debug to check if blogList is loading correctly
    console.log("Searching for blog with ID:", blogId);

    
    let blogDetails = blogList.find((blog) => blog.id == blogId);


    if (!blogDetails) {     
      // Log for debugging purposes
      console.log("Blog with ID not found:", blogId);
      return res.status(404).send("Blog not found");
  }
  res.render(blogDetailsPath, {
    blogDetails: blogDetails,
  });
  });

  app.post("/edit/:id", (req, res) => {
    const blogId = parseInt(req.params.id); // Ensure blogId is an integer
    const editBlogIndex = blogList.findIndex((blog) => blog.id === blogId);

    if (editBlogIndex === -1) {
        return res.send("<h1> Something went wrong </h1>");
    }

    // Update the blog in place
    blogList[editBlogIndex].title = req.body.blogTitle;
    blogList[editBlogIndex].description = req.body.blogDes;
    if (editBlogIndex !== -1) {
      blogList.splice(editBlogIndex, editBlogIndex + 1); // Removes 1 element at the found index
  }
    // Redirect back to the blogs page after editing
    // res.redirect("/blogList" , { blogList }); // You can adjust this to where you want the user to go after editing
    res.redirect("/home");
  
  });

//   app.post('/edit/:id', (req, res) => {
//     try {
//       const blogId = parseInt(req.params.id);
//       blogList = loadBlogs(); // Load current blogs
//       console.log(loadBlogs());
//       const editBlogIndex = blogList.findIndex((blog) => blog.id === blogId);
      
//       if (editBlogIndex === -1) {
//           return res.send("<h1>Something went wrong</h1>");
//       }

//       // Update the blog title and description
//       blogList[editBlogIndex].id = req.body.id;
//       blogList[editBlogIndex].title = req.body.blogTitle;
//       blogList[editBlogIndex].description = req.body.blogDes;

//       // if (editBlogIndex !== -1) {
//       //   blogList.splice(editBlogIndex, editBlogIndex + 1);
//       // };
//       saveBlogs(blogList); // Save the updated blogs to the file
//       res.redirect("/home");
//   } catch (error) {
//     console.error("Error editing blog:", error.message);
//     res.status(500).send("<h1>Internal Server Error</h1>");
// }
// });


  app.post("/delete/:id", (req, res) => {
    const blogId = req.params.id;
    blogList = blogList.filter((blog) => blog.id !== parseInt(blogId));
    res.send(
      '<script>alert("Blog deleted successfully"); window.location="/home";</script>'
    );
    res.redirect("/home");
  });

//   app.post('/delete/:id', (req, res) => {
//     try { 
//       const blogId = parseInt(req.params.id);
//       blogList = loadBlogs(); // Load current blogs

//       blogList = blogList.filter((blog) => blog.id !== blogId); // Remove the blog with the given id

//       saveBlogs(blogList); // Save the updated blogs to file
//       res.redirect("/blogList");
//     } catch (error) {
//       console.error("Error deleting blog:", error.message);
//       res.status(500).send("<h1>Internal Server Error</h1>");
//     } // Redirect to the updated blog list
// });

function generateID() {
  return Math.floor(Math.random() * 10000);
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
