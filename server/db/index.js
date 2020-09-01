const db = require('./db')
const Sequelize = require('sequelize')
const models = require('./models');
const Game = models.Game;


//state your model associations (hasOne etc)

const syncAndSeed = async() => {
  await db.sync({force: true});

  const [game1] = await Promise.all([
    Game.create({name: 'Terra Mystica', minplayers: 2, maxplayers: 5, description: 'In the land of Terra Mystica dwell 14 different peoples in seven landscapes, and each group is bound to its own home environment, so to develop and grow, they must terraform neighboring landscapes into their home environments in competition with the other groups.', artwork: 'terramystica.jpg'}),
    Game.create({name: 'Whitehall Mystery', minplayers: 2, maxplayers: 4, description: 'Whitehall Mystery gives players the opportunity to both pursue Jack the Ripper and step into his shoes. Two to four players take on the roles of Jack himself or the real-life Investigators who famously took on the case at the height of the Ripper’s reign of terror.', artwork: 'whitehall.jpg'}),
    Game.create({name: 'Azul', minplayers: 2, maxplayers: 4, description: 'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they\'ve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player\'s score.', artwork: 'azul.jpg'}),
    Game.create({name: 'Terraforming Mars', minplayers: 1, maxplayers: 5, description: 'Play as a giant corporation working with Earth\'s World Government to terraform the Red Planet by raising the temperature, oxygen level, and ocean coverage of Mars. ', artwork: 'terraformingmars.jpg'}),
    Game.create({name: 'Concordia', minplayers: 2, maxplayers: 5, description: 'Concordia is a peaceful strategy game of economic devleopment in the time of the Roman Empire. Guide a trade dynasty and send colonists to the remote realms of the empire to develop your trade network and appease the ancient gods.', artwork: 'concordia.jpg'}),
    Game.create({name: 'King of Tokyo', minplayers: 2, maxplayers: 6, description: 'In King of Tokyo, you play mutant monsters, gigantic robots, and strange aliens —- all of whom are destroying Tokyo and whacking each other in order to become the one and only king of the giant monsters.', artwork: 'kingoftokyo.jpg'}),
    Game.create({name: 'Eldritch Horror', minplayers: 1, maxplayers: 8, description: 'Eldritch Horror is a co-operative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One, an elder being intent on destroying our world.', artwork: 'eldritchhorror.jpg'})
  ]);
};

//export your db and Models (so they all can be imported from a single central location)
module.exports = {
  db,
  models: {Game},
  syncAndSeed
};
