const express = require('express');
const Category = require('../models/category');
const router = express.Router();
const cors = require('cors');

// Add a new category
router.post('/categories', async (req, res) => {
    try {
        const { categorytype } = req.body;
        const newCategory = new Category({ categorytype });
        const savedCategory = await newCategory.save();

        res.json({
            status: 'SUCCESS',
            message: 'Category added successfully',
            data: savedCategory,
        });
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});


// Add multiple categories
router.post('/categories', async (req, res) => {
    try {
        const categories = req.body;
        const insertedCategories = await Category.insertMany(categories);

        res.json({
            status: 'SUCCESS',
            message: 'Categories added successfully',
            data: insertedCategories,
        });
    } catch (error) {
        console.error('Error adding categories:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});


// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({
            status: 'SUCCESS',
            message: 'Categories retrieved successfully',
            data: categories,
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});


router.get('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({
                status: 'FAILED',
                message: 'Category not found',
            });
        }

        res.json({
            status: 'SUCCESS',
            message: 'Category retrieved successfully',
            data: category,
        });
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        res.status(500).json({
            status: 'FAILED',
            message: 'Internal server error',
        });
    }
});

// Add more routes as needed (update, delete, etc.)

module.exports = router;