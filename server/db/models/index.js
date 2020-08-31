const Sequelize = require("sequelize") //for things like Sequelize.STRING
const db = require('../db')

//define your model

const Game = db.define('game', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  minplayers: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  maxplayers: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artwork: {
    type: Sequelize.STRING
  }

})

module.exports = {
    Game
}
