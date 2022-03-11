const {dbPassword} = require('../private/privateKeys.service');
module.exports = {
  dbURL: `mongodb+srv://yuval-shai:${dbPassword}@skello-proj.3ysvn.mongodb.net/skelloDB?retryWrites=true&w=majority`,
  // 'dbURL': 'mongodb://localhost:27017',
  // 'mongodb+srv://danielSkello:Ds09080911Ds@skello-projectca.gym30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
};
