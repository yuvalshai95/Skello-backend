const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');

module.exports = {
  query,
  getByUsername,
  add,
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
    logger.error('Cannot find users', err);
    throw err;
  }
}

async function getByUsername(username) {
  try {
    const collection = await dbService.getCollection('user');
    const user = await collection.findOne({username});
    return user;
  } catch (err) {
    logger.error(`Cannot finding user ${username}`, err);
    throw err;
  }
}

async function add({username, password, fullname, imgUrl}) {
  try {
    // peek only updatable fields!
    const userToAdd = {
      username,
      password,
      fullname,
      imgUrl,
    };
    console.log('🚀 ~ file: user.service.js ~ line 40 ~ add ~ userToAdd', userToAdd);
    const collection = await dbService.getCollection('user');
    await collection.insertOne(userToAdd);
    return userToAdd;
  } catch (err) {
    logger.error('Cannot insert user', err);
    throw err;
  }
}
