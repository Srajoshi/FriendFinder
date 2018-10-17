// import list data
const friendsData = require("../data/friends.js")
const path = require("path");

// create and export API routes
module.exports = function (app) {

  // create route to send back friendsData as JSON
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // create POST route to receive data from our front end and add ti our freindsData
  app.post("/api/friends", function (req, res) {
    // take the sent information and store ina variable.
    const newFriend = req.body;
    console.log(newFriend);

    const userResponses = newFriend.scores;

    // best match 
    let matchName = "";
    let matchImage = "";
    // large value initially for comparison
    let totalDiff = 5000

    for (let i = 0; 1 < friendsData.length; i++) {
      console.log("friendsData.length = " + friendsData.length)
    // looping over each question to determine the difference

    let difference = 0;

    for(let j = 0; j < userResponses.length; j++) {
      // console.log("friendsData[i].scores[j]" + friendsData[i].scores[j]);

      difference += Math.abs(friendsData[i].scores[j]- userResponses[j]);

    }
      
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