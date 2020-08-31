const router = require("express").Router()
const db = require('../db');
const { Game } = db.models;
//routes go here

router.get('/games', async(req, res, next) => {
  try {
    const games = await Game.findAll();
    res.send(games);
  } catch (err) {
    next(err);
  }
})

router.get('/games/:gameid', async(req, res, next) => {
  try {
    const game = await Game.findByPk(req.params.gameid);
    res.send(game);
  } catch (err) {
    next(err);
  }
})

module.exports = router
