const User = require("./User");
const Post = require("./Post");
const gameData = require('./gameData');
const Image = require('./image');
const FavgameData = require("./favoritegames");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

//fav game relationships
User.hasMany(FavgameData, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})
//fav game relationships
FavgameData.belongsToMany(User, {
  foreignKey: "user_id",
})

gameData.hasMany(FavgameData, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
})



// Image.belongsTo(User, { 
//   foreignKey: 'user_id' 
// });

// Image.belongsTo(Game, { 
//   foreignKey: 'game_id' 
// });

module.exports = { User, Post, Game, Image, FavgameData };
