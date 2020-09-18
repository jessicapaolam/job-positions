const Vacancies       = require('./database/models/vacancies');
const VacanciesDetail = require('./database/models/vacanciesDetail');

// const vacancies = [ 
//    {
//       id: 1,
//       position: 'Dev',
//       address: 'Ponta Grossa',
//       type: 'Remoto',
//       salary: '8.000',
//    }

// ] 

module.exports = {
   Query: {
      vacancies: () => Vacancies.find(),
      vacanciesDetail: (_, { id }) => VacanciesDetail.findById(id)
   },
   Mutation: {
      // createVacancie: () => vacancies[0]
   }
}