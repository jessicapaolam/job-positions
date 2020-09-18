const Vacancies       = require('./database/models/vacancies');
const VacanciesDetail = require('./database/models/vacanciesDetail');

module.exports = {
   Query: {
      vacancies: () => Vacancies.find(),
      vacanciesDetail: (_, { id }) => VacanciesDetail.findById(id)
   },
   Mutation: {
      // createVacancie: () => vacancies[0]
   }
}