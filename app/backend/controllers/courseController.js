
const Course = require('../models/Course');

const getAllCourses = async (req, res) => {
  const courses = await Course.find({}).populate('instructor', 'name');
  res.json(courses);
};

module.exports = { getAllCourses };

