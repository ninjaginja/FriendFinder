var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // console.log(friends[0].responses);

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    // console.log(JSON.parse(newFriend.responses))
    console.log('newFriend = ' + JSON.stringify(newFriend));

    var newResponses = newFriend.responses;
    console.log("New Responses = " + newResponses);



    for (var i = 0; i < friends.length; i++) {
      var difference = 0;
      for (var j = 0; j < newResponses.length; j++) {
        difference += Math.abs(friends[i].responses[j] - newResponses[j]);
      }
      console.log(difference);

    }

    friends.push(newFriend);

    res.json(newFriend);

  });

};
