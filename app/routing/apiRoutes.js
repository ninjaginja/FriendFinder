var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    console.log('userInput = ' + JSON.stringify(userInput));

    var friendResponses = newFriend.responses;
    console.log(friendResponses);

  });

};
