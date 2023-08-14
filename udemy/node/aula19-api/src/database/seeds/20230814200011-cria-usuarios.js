const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('users', [{
      nome: 'Ricardo',
      email: 'ricardo@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: () => { },
};
