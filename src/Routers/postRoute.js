const express = require('express');
const multer = require('multer');
const path = require('path');
const Post = require('../models/post');
const router = express.Router();
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// Add a new post with image upload
router.post('/posts', upload.single('image'), async (req, res) => {
    const { title, category, content, innerContent, createdDate } = req.body;

    if (!req.file) {
        return res.status(400).json({
            status: 'FAILED',
            message: 'No image provided',
        });
    }

    const image = req.file.buffer.toString('base64');
    const data = new Post({image, title, content,category,innerContent, createdDate})
    
    try {
        const result = await data.save();
    
    if (!result) {
      res.json({
        status: 'FAILED',
        message: 'Job not registered successfully...',
      });
    } else {
      res.json({
        status: 'SUCCESS',
        message: 'Job registered successfully...',
        data: result,
      });
    }
      } catch (error) {
        console.error(error);
        res.status(500).json({
          status: 'FAILED',
          message: 'Internal Server Error',
        });
      }
    }); 


// Add a route to get all posts
// router.get('/posts', async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json({
//             status: 'SUCCESS',
//             message: 'Posts retrieved successfully',
//             data: posts,
//         });
//     } catch (error) {
//         console.error('Error retrieving posts:', error);
//         res.status(500).json({
//             status: 'FAILED',
//             message: 'Internal server error',
//         });
//     }
// });




// Add a route to get a single post by ID
router.get('/posts/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({
                status: 'FAILED',
                message: 'Post not found',
            });
        }

        res.json({
            status: 'SUCCESS',
            message: 'Post retrieved successfully',
            data: post,
        });
    } catch (error) {
        console.error('Error retrieving post by ID:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});


// Get all posts or filter by category
router.get('/posts', async (req, res) => {
    try {
        let query = {}; // Initialize an empty query object

        if (req.query.category) {
            // If the category parameter is provided, add it to the query
            query.category = req.query.category;
        }

        const posts = await Post.find(query);
        res.json({
            status: 'SUCCESS',
            message: 'Posts retrieved successfully',
            data: posts,
        });
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});



// Update a post by ID
router.put('/posts/:id', upload.single('image'), async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content, category, innerContent } = req.body;
        const imagePath = req.file ? req.file.buffer.toString('base64') : '';

        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            {
                title,
                content,
                image: imagePath || undefined, // Update the image if a new one is provided
                category,
                createdDate,
                innerContent,
            },
            { new: true } // Return the updated post
        );

        if (!updatedPost) {
            return res.status(404).json({
                status: 'FAILED',
                message: 'Post not found',
            });
        }

        res.json({
            status: 'SUCCESS',
            message: 'Post updated successfully',
            data: updatedPost,
        });
    } catch (error) {
        console.error('Error updating post by ID:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});






// Rest of the routes remain unchanged

module.exports = router;