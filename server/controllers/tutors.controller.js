const Tutor = require("../models/tutor.model.js");

exports.create = (req, res, next) => {
    // Validate request
    Tutor.create({ firstName: req.body.firstName.trim(), lastName: req.body.lastName.trim(), phoneNumber: req.body.phoneNumber.trim(), email: req.body.email.trim(), password: req.body.password }).catch(function (err) {
        var array = err.message.split(',');
        /*const emailExist = Tutor.findOne({ where: { email: req.body.email.trim() } });
        if (!emailExist) {
            array.push('Email address already exists in system');
        }*/
        const valid = ['Please enter your first name', 'Please enter your last name', 'Please enter a valid phone number', 'Please enter a valid email address', 'Please enter a password', 'Email address already exists in system'];
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].split(': ').pop();
        }
        for (let i = 0; i < array.length; i++) {
            if (!valid.includes(array[i])) {
                array.splice(i, 1);
            }
        }
        for (let i = 0; i < valid.length; i++) {
            if (array[i] != valid[i]) {
                array.splice(i, 0, "");
            }
        }
        console.log(array);
        res.status(400).json(array);
    })

};

exports.findAll = (req, res) => {

};

exports.findOne = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Tutor.findOne({ where: { email } }).catch((err) => {
        console.log(err);
    });

    if (!user) {
        return res.json({ message: "Email or password is incorrect" });
    }
    if (user.password !== password) {
        return res.json({ message: "Email or password is incorrect" });
    }
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
 
exports.findAllPublished = (req, res) => {

};