const db = require('./db')
const Sequelize = require('sequelize')
const models = require('./models');
const Game = models.Game;


//state your model associations (hasOne etc)

const syncAndSeed = async() => {
  await db.sync({force: true});

  const [game1] = await Promise.all([
    Game.create({name: 'Game 1', minplayers: 2, maxplayers: 4, description: 'description description', artwork: 'filename.png'}),
    Game.create({name: 'Game 2', minplayers: 2, maxplayers: 4, description: 'description description', artwork: 'filename.png'}),
    Game.create({name: 'Game 3', minplayers: 2, maxplayers: 4, description: 'description description', artwork: 'filename.png'}),
    Game.create({name: 'Game 4', minplayers: 2, maxplayers: 4, description: 'description description', artwork: 'filename.png'}),
    Game.create({name: 'Game 5', minplayers: 2, maxplayers: 4, description: 'description description', artwork: 'filename.png'}),
    Game.create({name: 'Game 6', minplayers: 2, maxplayers: 4, description: 'description description', artwork: 'filename.png'})
  ]);
};

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
  db,
  models: {Game},
  syncAndSeed
};
