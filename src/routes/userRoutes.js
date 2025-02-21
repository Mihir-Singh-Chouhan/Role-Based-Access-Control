const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

// Only for Admin
router.get('/admin',verifyToken,authorizeRole("admin"),(req,res) => {
    res.json({message: "Welcome to Admin Dashboard"});
})

// For Admin and Manager Only
router.get('/manager',verifyToken,authorizeRole("admin","manager"),(req,res) => {
    res.json({message: "Welcome to Manager Dashboard"});
})

// All can access
router.get('/user',verifyToken,authorizeRole("admin","manager","user"),(req,res) => {
    res.json({message: "Welcome to User Dashboard"});
})

module.exports = router;  