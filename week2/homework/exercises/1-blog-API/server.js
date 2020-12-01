'use strict';
const express = require('express');
const app = express();

// YOUR CODE GOES IN HERE
const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({ extended: false })); // Express middleware to pass data into obj
app.use(express.json()); // parse req body

// Check for errors
function checkValidity(req) {
  if (
    typeof req.body == 'undefined' ||
    typeof req.body.title === 'undefined' ||
    typeof req.body.content == 'undefined'
  ) {
    return true;
  } else {
    return false;
  }

  if (fs.existsSync(req.params.title)) {
    return true;
  }
}

// CREATE - POST - /blogs
app.post('/blogs', (req, res) => {
  if (checkValidity(req)) {
    res.status(404);
    res.end('That request was invalid!');
    return;
  }
  // object for new blog posts data
  const newBlog = {
    title: req.body.title,
    content: req.body.content,
  };

  // How to get the title and content from the request??
  fs.writeFileSync(newBlog.title, newBlog.content);
  res.status(201); // created blog status response
  res.end('Blog post created successfully');
});

// UPDATE - PUT - /posts/:title
app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  if (fs.existsSync(req.params.title)) {
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok');
  } else {
    // Send response with error message
    res.status(404);
    res.end('This post does not exist!');
  }
});

// DELETE - DELETE - /blogs/:title
app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  // Add condition here
  if (checkValidity(req)) {
    fs.unlinkSync(req.params.title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404);
    res.end('Blog post not found');
  }
});

// GET - READ - /blogs/:title
app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  if (checkValidity(req)) {
    // check if post exists
    const post = fs.readFileSync(req.params.title);
    // send response
    res.send(post);
  } else {
    res.status(404);
    res.end('This post does not exist!');
  }
});

// Look for environment port otherwise set to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
