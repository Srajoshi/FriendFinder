// import list data
const friendsData = require("../data/friends.js")
const path = require("path");

// create and export API routes
module.exports = function (app) {

  // create route to send back friendsData as JSON
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // create POST route to receive data from our front end and check for a match. And also add it our freindsData
  app.post("/api/friends", function (req, res) {
    // take the sent information and store ina variable.
    const newFriend = req.body;
    console.log(newFriend);

    const userResponses = newFriend.scores;
    console.log("UserResponses: ", userResponses);
    // best match variable initialized
    let matchName = "";
    let matchImage = "";
    // large value initially for comparison
    let totalDiff = 1000
    // for each user response:
    for (let i = 0; i < friendsData.length; i++) {
      console.log("friendsData.length = " + friendsData.length)
    // looping over each in our friends data to determine the difference

    let difference = 0;

      for(let j = 0; j < userResponses.length; j++) {

        difference += Math.abs(friendsData[i].scores[j] - userResponses[j]);

      }
      // comparing difference
      if (difference < totalDiff) {

        totalDiff = difference;
        matchName = friendsData[i].name;
        matchImage = friendsData[i].photo;
      }


    }
      // add to the friends array
      friendsData.push(newFriend);
      console.log("new friend = " + JSON.stringify(newFriend))
    // const compatibleFriend = ?

    // send back info for user to know the most compatible friend
    res.json({ matchName: matchName, matchImage: matchImage})
    console.log(matchName);

  });


}