const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');

module.exports = {
  query,
};

async function query() {
  try {
    const collection = await dbService.getCollection('user');
    var users = await collection.find({}).toArray();
    users = users.map(user => {
      delete user.password;
      return user;
    });
    return users;
  } catch (err) {
    logger.error('cannot find users', err);
    throw err;
  }
}
