const express = require('express');
const { register, registerPage, tablePage, Delete, employeesPage, deleteOne, pageNotFound } = require('../controllers/control');
const router = express.Router();
const User = require('../models/userModel');
router.get('/assignment1', registerPage);
router.get('/assignment1-data', tablePage);
router.get('/', (req, res) => {
    return res.redirect('/assignment1');
});
router.get('/deleteOne', deleteOne);
router.get('/assignment2', employeesPage);
router.get('/deleteData', Delete);
router.post('/register', register);
router.get('*', pageNotFound);
module.exports = router;
module.exports = router;