const express = require('express');
const { register, registerPage, tablePage, Delete, employeesPage } = require('../controllers/control');
const router = express.Router();
router.get('/assignment1', registerPage);
router.get('/assignment1-data', tablePage);
router.get('/', (req, res) => {
    return res.redirect('/assignment1');
});
router.get('/assignment2', employeesPage);
router.get('/deleteData', Delete);
router.post('/register', register);
router.get('*', (req, res) => {
    res.send('<h1>Page not found</h1> <p>Go to <a href="/assignment1">Home</a> page</p>');
});
module.exports = router;
module.exports = router;