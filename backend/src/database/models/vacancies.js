const mongoose = require('mongoose');

const VacanciesSchema = new mongoose.Schema({
   id: {
      type: Number,
      required: true
   },
   position: {
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
   salary: {
      type: Number
   }
});

module.exports = mongoose.model("Vacancies", VacanciesSchema);