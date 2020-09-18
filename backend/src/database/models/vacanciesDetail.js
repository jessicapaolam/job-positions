const mongoose = require('mongoose');

const VacanciesDetailSchema = new mongoose.Schema({
   id: {
      type: Number,
      required: true
   },
   position: {
      type: String,
      required: true
   },
   company: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   type: {
      type: String
   },
   description: {
      type: String
   },
   salary: {
      type: Number
   }
});

module.exports = mongoose.model("VacanciesDetail", VacanciesDetailSchema);