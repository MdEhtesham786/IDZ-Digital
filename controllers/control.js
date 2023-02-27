
const mongoose = require('mongoose');

const User = require('../models/userModel');

exports.registerPage = async (req, res) => {
    try {
        return res.render('register');
    } catch (err) {
        console.log(err);
        res.send(err);

    }
};
exports.tablePage = async (req, res) => {
    try {
        const Data = await User.find();
        console.log(Data);
        return res.render('table', { Data });
    } catch (err) {
        console.log(err);
        res.send(err);

    }
};
exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const Data = new User(req.body);
        await Data.save();
        res.redirect('/assignment1-data');
    } catch (err) {
        console.log(err);
        res.send(err);

    }
};
exports.employeesPage = async (req, res) => {
    try {
        return res.render('employees');
    } catch (err) {
        console.log(err);
        res.send(err);

    }
};
exports.Delete = async (req, res) => {
    try {
        await User.remove();
        console.log('All Data Cleared');

        return res.redirect('/assignment1');
    } catch (err) {
        console.log(err);
        res.send(err);

    }
};