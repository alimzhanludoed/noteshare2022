const Doc = require("../models/doc.model.js");

exports.create = (req, res, next) => {
    // Validate request
    Doc.create({ course: req.body.course.trim(), link: req.body.link.trim() });

};

exports.findAll = (req, res) => {

};

exports.findOne = async (req, res) => {
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
 
exports.findAllPublished = (req, res) => {

};