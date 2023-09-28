
const sequelize = require("../config/connection");
const { User, Post, Game, FavgameData } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const gameData = require('./gameData.json');
const favData= require('./favGameData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  for (const game of gameData) {
    await Game.create({
      ...game,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const favs = await FavgameData.bulkCreate(favData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
