const express = require('express');
const { register, registerPage, tablePage } = require('../controllers/control');
const router = express.Router();
router.get('/assignment1', registerPage);
router.get('/assignment1-data', tablePage);
router.get('/assignment2', (req, res) => {
    return res.render('employees');
});
router.post('/register', register);
router.get('*', (req, res) => {
    res.send('<h1>Page not found</h1> <p>Go to <a href="/assignment1">Home</a> page</p>');
});
module.exports = router;